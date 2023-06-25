import PageHeader from "./common/pageHeder";
import Input from "./common/input";
import { useFormik } from "formik";
import { createUser } from "../services/userService";
// import { createUser } from "../services/userService";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
const Signup = () => {
  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    validate({ email, password, name }) {
      const errors = {};
      let isValid = true;
      if (!email) {
        errors.email = "email field is required";
        isValid = false;
      }
      if (!password) {
        errors.password = "password field is required";
        isValid = false;
      }
      if (!name) {
        errors.name = "name field is required";
        isValid = false;
      }
      return isValid ? null : errors;
    },

    onSubmit(values) {
      console.log("submited", values);
      createUser(values);
    },
  });
  return (
    <>
      <PageHeader
        title="Sign Up with RealApp"
        description="Sign Up it is Free "
      />
      <form onSubmit={form.handleSubmit} noValidate>
        <Input
          {...form.getFieldProps("email")}
          type="email"
          label="Email"
          required
          error={form.touched.email && form.errors.email}
        />
        <Input
          {...form.getFieldProps("password")}
          type="password"
          label="Password"
          required
          error={form.touched.password && form.errors.password}
        />
        <Input
          {...form.getFieldProps("name")}
          type="text"
          label="Name"
          required
          error={form.touched.name && form.errors.name}
        />
        <div className="my-2">
          <button
            type="submit"
            disabled={!form.isValid}
            className="btn btn-primary"
          >
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};

export default Signup;

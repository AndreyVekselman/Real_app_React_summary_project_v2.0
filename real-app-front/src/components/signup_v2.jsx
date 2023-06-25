import PageHeader from "./common/pageHeder";
import Input from "./common/input";
import { useFormik } from "formik";
import Joi from "joi";
import { createUser } from "../services/userService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Signup = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    validate(values) {
      const schema = Joi.object({
        email: Joi.string()
          .min(6)
          .max(255)
          .required()
          .email({ tlds: { allow: false } }),
        password: Joi.string().min(6).max(1024).required(),
        name: Joi.string().min(2).max(255).required(),
      });
      const { error } = schema.validate(values, { abortEarly: false });
      if (!error) {
        return null;
      }
      const errors = {};
      for (const detail of error.details) {
        const errorKey = detail.path[0];
        errors[errorKey] = detail.message;
      }
      return errors;
    },

    async onSubmit(values) {
      try {
        console.log("submited", values);
        createUser(values).then(console.log);
        await createUser({ ...values, biz: false });
        navigate("/sign-in");
      } catch ({ response }) {
        if (response && response.status === 400) {
          setError(response.data);
        }
      }
    },
  });
  return (
    <>
      <PageHeader
        title="Sign Up with RealApp"
        description="Sign Up it is Free "
      />
      <form onSubmit={form.handleSubmit} noValidate>
        {error && <div className="alert alert-danger">{error}</div>}
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

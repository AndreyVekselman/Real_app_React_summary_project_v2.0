import PageHeader from "./common/pageHeder";
import Input from "./common/input";
import { useFormik } from "formik";
import Joi from "joi";
import { createUser } from "../services/userService";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./context/auth.context";
import formikValedateUsingJoi from "../utils/formikValidateUsingJoi";
import { toast } from "react-toastify";
const Signup = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { user } = useAuth();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    validate: formikValedateUsingJoi({
      email: Joi.string()
        .min(6)
        .max(255)
        .required()
        .email({ tlds: { allow: false } }),
      password: Joi.string().min(6).max(1024).required(),
      name: Joi.string().min(6).max(255).required(),
    }),

    async onSubmit(values) {
      try {
        await createUser({ ...values, biz: false });
        navigate("/sign-in");
      } catch ({ response }) {
        if (response && response.status === 400) {
          setError(response.data);
          toast.error(`${response.data}`);
        }
      }
    },
  });
  if (user) {
    return <Navigate to="/" />;
  }
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
        <div className="d-flex mb-3">
          <div className="me-auto p-2">
            <button
              type="submit"
              disabled={!form.isValid}
              className="btn btn-primary"
            >
              Sign Up
            </button>
          </div>
          <div className="my-2 me-2">
            <Link to="/">
              <button
                type="button"
                className="btn btn-danger"
                style={{ width: "5rem" }}
              >
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signup;

import PageHeader from "./common/pageHeder";
import Input from "./common/input";
import { useFormik } from "formik";
import Joi from "joi";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import formikValedateUsingJoi from "../utils/formikValidateUsingJoi";
import { useAuth } from "./context/auth.context";
import { toast } from "react-toastify";

const SignupBiz = ({ redirect = "/" }) => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { user, login, createUser } = useAuth();

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
        createUser(values).then(console.log);
        await createUser({ ...values, biz: true });
        login({ email: values.email, password: values.password });
        console.log("create and login");
        navigate(redirect);
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
        title="Sign Up Business with RealApp"
        description="Sign Up Business"
      />
      <form onSubmit={form.handleSubmit} noValidate>
        {error && <div className="alert alert-danger mt-2">{error}</div>}
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
              Sign Up Business
            </button>
          </div>
          <div className="my-2 me-2">
            <Link to="/">
              <button
                type="button"
                className="btn btn-danger"
                style={{ width: "9rem" }}
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

export default SignupBiz;

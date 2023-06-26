import PageHeader from "./common/pageHeder";
import Input from "./common/input";
import { useFormik } from "formik";
import Joi from "joi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import formikValedateUsingJoi from "../utils/formikValidateUsingJoi";
import cardService from "../services/cardService";
import { ToastContainer, toast } from "react-toastify";

const CreateCard = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      bizName: "",
      bizDescription: "",
      bizAddress: "",
      bizPhone: "",
      bizImage: "",
    },
    validate: formikValedateUsingJoi({
      bizName: Joi.string().min(2).max(255).required().label("Name"),
      bizDescription: Joi.string()
        .min(2)
        .max(1024)
        .required()
        .label("Description"),
      bizAddress: Joi.string().min(2).max(400).required().label("Address"),
      bizPhone: Joi.string()
        .min(9)
        .max(10)
        .required()
        .regex(/^0[2-9]\d{7,8}$/)
        .label("Phone"),
      bizImage: Joi.string().min(11).max(1024).allow("").label("Image"),
    }),

    async onSubmit(values) {
      try {
        const { bizImage, ...body } = values;
        if (bizImage) {
          body.bizImage = bizImage;
        }
        await cardService.createCard(body);
        toast.success("New Card created successefully", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setTimeout(() => {
          navigate("/mycards");
        }, 1500);
      } catch ({ response }) {
        if (response && response.status === 400) {
          setError(response.data);
        }
      }
    },
  });
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <PageHeader
        title={
          <>
            Create a new Business card with a Real{" "}
            <i className="bi bi-boxes"> App</i>
          </>
        }
      />
      <form onSubmit={form.handleSubmit} noValidate>
        {error && <div className="alert alert-danger">{error}</div>}
        <Input
          {...form.getFieldProps("bizName")}
          type="text"
          label="Name"
          required
          error={form.touched.bizName && form.errors.bizName}
        />
        <Input
          {...form.getFieldProps("bizDescription")}
          type="text"
          label="Description"
          required
          error={form.touched.bizDescription && form.errors.bizDescription}
        />
        <Input
          {...form.getFieldProps("bizAddress")}
          type="text"
          label="Address"
          required
          error={form.touched.bizAddress && form.errors.bizAddress}
        />
        <Input
          {...form.getFieldProps("bizPhone")}
          type="text"
          label="Phone"
          required
          error={form.touched.bizPhone && form.errors.bizPhone}
        />
        <Input
          {...form.getFieldProps("bizImage")}
          type="text"
          label="Image"
          error={form.touched.bizImage && form.errors.bizImage}
        />
        <div className="d-flex mb-3">
          <div className="me-auto p-2">
            <button
              type="submit"
              disabled={!form.isValid}
              className="btn btn-primary"
            >
              Create Card
            </button>
          </div>
          <div className="my-2 ">
            <Link to="/mycards">
              <button
                type="button"
                className="btn btn-danger "
                style={{ width: "7rem" }}
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

export default CreateCard;

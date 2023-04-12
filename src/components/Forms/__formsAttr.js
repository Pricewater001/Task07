import * as Yup from "yup";

export const ContactUSSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
  
    username: Yup.string()
      .required("username is required")
      .min(4, "username is too short - should be 4 chars minimum"),
      phonenumber : Yup.string().min(10,"Enter at least more than 10 numbers").required('the phonenumber is required'),
  });

export const initialValues = {
    email: "",
    username : "",
    phonenumber:"",
  };
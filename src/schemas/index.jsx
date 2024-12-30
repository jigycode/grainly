import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().email().required("please enter a valid email"),
  password: Yup.string().required("please enter a password"),
});

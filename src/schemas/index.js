import * as yup from "yup";

export const basicSchema = yup.object().shape({
    // email: yup.string().email("Please enter a valid email").required("Please enter an email address!"),
    email: yup.string().email("Please enter a valid email"),
    password: yup.string().min(8).matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/, {message: "Please use a stronger password"}),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match")
})
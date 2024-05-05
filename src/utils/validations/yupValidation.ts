import * as Yup from 'yup'

// validation for login
export const loginValidation = Yup.object({
    email: Yup.string()
    .email("please enter valid email")
    .required("please enter email"),
    password: Yup.string().required("Please enter password"),
})

export const validationSchema = Yup.object({
    name: Yup.string()
      .min(3)
      .max(30)
      .matches( /^[^\s]+(\s[^\s]+)*$/, "Name cannot have adjacent spaces")
      .required("Please enter name"),
    
    email: Yup.string()
      .email("Please enter valid email")
      .required("Please enter email"),
      mobile: Yup.string()
      .matches(/^(?!(\d)\1{9})[5-9]\d{9}$/, "Invalid mobile number")
      .required("Please enter mobile"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .matches(/^[^\s]+$/, "Password cannot contain spaces")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character"
      )
      .required("Please enter password"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password not matched")
      .required("Please enter confirm password"),
  });
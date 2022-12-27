import * as Yup from 'yup';

export function FormValidation(values) {
    const errors = {};
    if (!values.firstname) {
      errors.firstname = "First name is required.";
    }
    if (!values.othernames) {
      errors.othernames = "Other names are required.";
    }
    if (!values.msisdn) {
      errors.msisdn = "Phone number is required.";
    }
    if (!values.password) {
      errors.password = "Password is required.";
    }
    if (values.password != values.confirm_password) {
      errors.passwordMatch = "Passwords must match.";
    }
    return errors;
  }

 export const RegistrationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    otherNames: Yup.string().required('Required'),
    msisdn: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string().required('Required'),
  });

  export const LoginSchema = Yup.object().shape({
    msisdn: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
  });
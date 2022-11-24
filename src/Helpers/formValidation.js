export function FormValidation(values, confirm_password) {
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
    if (values.password != confirm_password) {
      errors.passwordMatch = "Passwords must match.";
    }
    return errors;
  }
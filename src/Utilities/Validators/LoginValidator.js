export const validateLoginForm = (formValues) => {
  const errors = {};

  // Email validation
  if (!formValues.email.trim()) {
    errors.email = "Email is Required";
  } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
    errors.email = "Please Enter a Valid Email Address";
  }

  // Password validation
  if (!formValues.password) {
    errors.password = "Password is Required";
  } else if (formValues.password.length < 8) {
    errors.password = "Password must be at least 8 Characters Long";
  } else if (!/\d/.test(formValues.password)) {
    errors.password = "Password must contain at least one Numeric Character";
  } else if (!/[a-zA-Z].*[a-zA-Z].*[a-zA-Z]/.test(formValues.password)) {
    errors.password = "Password must contain at least 3 Alphabetic Characters";
  } else if (formValues.password.length > 400) {
    errors.password = "Password must be at most 400 Characters long";
  }

  return errors;
};

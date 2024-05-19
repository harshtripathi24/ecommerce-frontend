export const validateSignUpForm = (formValues) => {
  const errors = {};

  // Name validation
  if (!formValues.name.trim()) {
    errors.name = "Name is Required";
  } else if (formValues.name.trim().length < 3) {
    errors.name = "Name Must be at least 3 Characters Long";
  } else if (formValues.name.trim().length > 320) {
    errors.name = "Name Must be at most 320 Characters Long";
  }

  // Email validation
  if (!formValues.email.trim()) {
    errors.email = "Email is Required";
  } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
    errors.email = "Please Enter a Valid Email Address";
  }

  // Password validation
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
    errors.password = "Password must be at most 400 Characters Long";
  }

  // Confirm password validation
  if (!formValues.confirmPassword) {
    errors.confirmPassword = "Confirm Password is Required";
  } else if (formValues.password !== formValues.confirmPassword) {
    errors.confirmPassword = "Passwords do not Match";
  }

  return errors;
};

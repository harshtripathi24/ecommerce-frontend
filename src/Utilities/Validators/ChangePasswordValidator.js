export const validatePasswordChangeForm = (formValues) => {
  const errors = {};

  // Old Password validation
  if (!formValues.oldPassword) {
    errors.oldPassword = "Old Password is Required";
  } else if (formValues.oldPassword.length < 8) {
    errors.oldPassword = "Old Password must be at least 8 Characters Long";
  } else if (!/\d/.test(formValues.oldPassword)) {
    errors.oldPassword =
      "Old Password must contain at least one Numeric Character";
  } else if (!/[a-zA-Z].*[a-zA-Z].*[a-zA-Z]/.test(formValues.oldPassword)) {
    errors.oldPassword =
      "Old Password must contain at least 3 Alphabetic Characters";
  } else if (formValues.oldPassword.length > 400) {
    errors.oldPassword = "Old Password must be at most 400 Characters Long";
  }

  // New Password validation
  if (!formValues.newPassword) {
    errors.newPassword = "New Password is Required";
  } else if (formValues.newPassword.length < 8) {
    errors.newPassword = "New Password must be at least 8 Characters Long";
  } else if (!/\d/.test(formValues.newPassword)) {
    errors.newPassword =
      "New Password must contain at least one Numeric Character";
  } else if (!/[a-zA-Z].*[a-zA-Z].*[a-zA-Z]/.test(formValues.newPassword)) {
    errors.newPassword =
      "New Password must contain at least 3 Alphabetic Characters";
  } else if (formValues.newPassword.length > 400) {
    errors.newPassword = "New Password must be at most 400 Characters Long";
  }

  // Confirm Password validation
  if (!formValues.confirmPassword) {
    errors.confirmPassword = "Confirm Password is Required";
  } else if (formValues.newPassword !== formValues.confirmPassword) {
    errors.confirmPassword = "Passwords do not Match";
  }

  return errors;
};

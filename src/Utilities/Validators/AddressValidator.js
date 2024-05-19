// List of Indian states and their short forms
const indianStates = [
  { name: "Andhra Pradesh", shortForm: "AP" },
  { name: "Arunachal Pradesh", shortForm: "AR" },
  { name: "Assam", shortForm: "AS" },
  { name: "Bihar", shortForm: "BR" },
  { name: "Chhattisgarh", shortForm: "CT" },
  { name: "Goa", shortForm: "GA" },
  { name: "Gujarat", shortForm: "GJ" },
  { name: "Haryana", shortForm: "HR" },
  { name: "Himachal Pradesh", shortForm: "HP" },
  { name: "Jharkhand", shortForm: "JH" },
  { name: "Karnataka", shortForm: "KA" },
  { name: "Kerala", shortForm: "KL" },
  { name: "Madhya Pradesh", shortForm: "MP" },
  { name: "Maharashtra", shortForm: "MH" },
  { name: "Manipur", shortForm: "MN" },
  { name: "Meghalaya", shortForm: "ML" },
  { name: "Mizoram", shortForm: "MZ" },
  { name: "Nagaland", shortForm: "NL" },
  { name: "Odisha", shortForm: "OD" },
  { name: "Punjab", shortForm: "PB" },
  { name: "Rajasthan", shortForm: "RJ" },
  { name: "Sikkim", shortForm: "SK" },
  { name: "Tamil Nadu", shortForm: "TN" },
  { name: "Telangana", shortForm: "TS" },
  { name: "Tripura", shortForm: "TR" },
  { name: "Uttarakhand", shortForm: "UT" },
  { name: "Uttar Pradesh", shortForm: "UP" },
  { name: "West Bengal", shortForm: "WB" },
  { name: "Andaman and Nicobar Islands", shortForm: "AN" },
  { name: "Chandigarh", shortForm: "CH" },
  { name: "Dadra and Nagar Haveli", shortForm: "DN" },
  { name: "Delhi", shortForm: "DL" },
  { name: "Jammu and Kashmir", shortForm: "JK" },
  { name: "Lakshadweep", shortForm: "LD" },
  { name: "Ladakh", shortForm: "LA" },
  { name: "Puducherry", shortForm: "PY" },
];

export const validateAddressForm = (formValues) => {
  const errors = {};

  // Phone Number Validation
  if (!formValues.phoneNumber.trim()) {
    errors.phoneNumber = "Phone Number is Required";
  } else if (!/^\d{10}$/.test(formValues.phoneNumber)) {
    errors.phoneNumber = "Please Enter a Valid 10-digit Phone Number";
  }

  // Address Validation
  if (!formValues.address.trim()) {
    errors.address = "Address is Required";
  } else if (formValues.address.trim().length > 200) {
    errors.address = "Address must be at most 200 Characters Long";
  }

  // City Validation
  if (!formValues.city.trim()) {
    errors.city = "City is Required";
  } else if (formValues.city.trim().length > 100) {
    errors.city = "City must be at most 100 Characters Long";
  }

  // State Validation
  if (!formValues.state.trim()) {
    errors.state = "State is Required";
  } else {
    const stateMatch = indianStates.find(
      (state) =>
        state.name.toLowerCase() === formValues.state.trim().toLowerCase() ||
        state.shortForm.toLowerCase() === formValues.state.trim().toLowerCase()
    );

    if (!stateMatch) {
      errors.state = "Please Enter a Valid Indian State Name or Short Form";
    }
  }

  // Pincode Validation
  if (!formValues.pincode.trim()) {
    errors.pincode = "Pincode is Required";
  } else if (!/^\d{6}$/.test(formValues.pincode)) {
    errors.pincode = "Please Enter a Valid 6-digit Pincode";
  }

  return errors;
};

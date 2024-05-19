import styled from "@emotion/styled";
import { TextField } from "@mui/material";

const StyledTextFieldWrapper = styled(TextField)`
  width: 100%;
  margin: 10px 0;

  & label.Mui-focused {
    color: var(--primary-color);
  }

  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: var(--primary-color);
    }
  }
`;

const StyledTextField = ({
  label,
  type,
  value,
  onChange,
  error,
  helperText,
  ...props
}) => {
  return (
    <StyledTextFieldWrapper
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      error={!!error}
      helperText={helperText}
      {...props}
    />
  );
};

export default StyledTextField;

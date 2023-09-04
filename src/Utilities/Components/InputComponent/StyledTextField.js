import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const StyledTextField = styled(TextField)`
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

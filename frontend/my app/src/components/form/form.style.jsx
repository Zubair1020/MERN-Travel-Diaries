import { Box, TextField, styled } from "@mui/material";

export const StyledBox = styled(Box)`
  max-width: clamp(5rem, 40vw + 10rem, 38rem);
  border-radius: 1rem;
  margin: 5rem auto auto auto;
  padding: clamp(2rem, 5vw, 5rem);
  box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
    rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;

  h3 {
    text-align: center;
  }

  .contained-login-btn {
  }
  .outline-login-btn {
    box-shadow: 0px 0px 5px black;
  }
  button {
    border-radius: 1rem;
  }
`;
export const StyledForm = styled("form")`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  button {
    box-shadow: 0 0 0 2px #ffd95a;
    font-weight: 600;
  }

  button.MuiButton-contained {
    color: #212a3e;
    margin-bottom: 1rem;
    :hover {
      box-shadow: 0 0 10px 1px #ffd95a;
      color: white;
    }
  }
  button.MuiButton-outlined {
    color: #e8b700;
    :hover {
      background-color: #ffd95a;
      box-shadow: 0 0 10px 3px #ffd95a;
      color: #212a3e;
    }
  }
`;

export const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    :hover fieldset {
      border-color: #e8b700;
    }
    .Mui-focused fieldset {
      border-color: #e8b700;
    }
  }
`;

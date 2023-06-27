import { Box, Button, TextField, styled } from "@mui/material";

export const StyledBox = styled(Box)`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 15px;
  margin: clamp(1rem, 5vw, 2rem);
  h2 {
    font-size: clamp(1.4rem, 6vw, 3.5rem);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.1rem 0 clamp(0.5rem, 5vw, 1.5rem);
    span {
      color: #ffd93d;
      margin-left: clamp(0.1rem, 2vw, 1rem);
    }
  }
`;

export const StyledForm = styled("form")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 clamp(3rem, 10vw, 8rem);
`;

export const StyledTextFiled = styled(TextField)`
  input::placeholder,
  .MuiInputLabel-root {
    font-size: clamp(0.9rem, 5vw, 1.4rem);
  }
  .MuiInput-root {
    font-size: clamp(1rem, 5vw, 1.5rem);
    height: clamp(3rem, 5vw, 4rem);
  }
`;

export const StyledButton = styled(Button)`
  border-radius: 10px;
  font-size: clamp(0.5rem, 5vw, 1.1rem);
  font-weight: 600;
  margin-bottom: clamp(1rem, 5vw, 3rem);
  width: 50%;
  align-self: center;
  @media (max-width: 440px) {
    width: 80%;
  }
`;

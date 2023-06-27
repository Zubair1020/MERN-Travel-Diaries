import { Box, styled } from "@mui/material";

export const StyledBox = styled(Box)`
  border-radius: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  margin: clamp(1rem, 5vw, 5rem) 0;
  text-align: center;
  h2 {
    font-size: clamp(1.7rem, 5vw, 4rem);
  }
  h4 {
    font-size: clamp(1.2rem, 5vw, 2.3rem);
  }
  h4 {
    font-size: clamp(1rem, 5vw, 2rem);
  }
  div {
    background-color: #fffad7;
    padding: 2rem clamp(1.5rem, 10vw, 6rem);
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  button {
    font-weight: 600;
  }
`;

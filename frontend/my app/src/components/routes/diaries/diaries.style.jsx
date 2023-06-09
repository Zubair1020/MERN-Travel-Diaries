import { Container, styled } from "@mui/material";

export const CardContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  gap: 5rem;
  align-items: center;
  justify-items: center;
  margin-top: clamp(2rem, 5vw, 5rem);
  padding-bottom: clamp(2rem, 5vw, 5rem);
`;

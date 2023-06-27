import { styled } from "@mui/material";

export const StyledSliderImg = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${({ src }) => src});
  background-size: cover;
  width: 100vw;
  height: 100vh;
  opacity: ${({ index, currentIndex }) => (index === currentIndex ? 1 : 0)};
  transition: opacity 1s ease;
`;

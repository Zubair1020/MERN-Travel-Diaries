import { Box, styled } from "@mui/material";

export const Hero = styled("div")`
  position: relative;
  top: clamp(1rem, 5vw, 5rem);
  background-color: #7574747a;
  border-radius: 20px;
  backdrop-filter: blur(0.2rem);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  color: #ffff;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: clamp(1rem, 8vw - 1rem, 5rem);
  padding: clamp(1rem, 8vw - 1rem, 5rem);

  @media (max-width: 700px) {
    top: clamp(5rem, 15vw, 0rem);
  }

  h1 {
    font-size: clamp(1.2rem, 8vw, 5rem);
    span {
      color: #ffd95a;
      border-bottom: 0.2rem solid #ffd95a;
    }
    @media (max-width: 800px) {
      br {
        display: none;
      }
    }
  }

  p {
    margin: 1.5rem 0;
    font-size: clamp(0.9rem, 5vw, 1.2rem);
  }
`;

export const ButtonBox = styled(Box)`
  display: flex;
  gap: 2rem;

  button.MuiButton-outlined {
    box-shadow: 0 0 0 2px #ffd95a;
    :hover {
      background-color: #ffd95a;
      box-shadow: none;
      color: rgba(0, 0, 0, 0.87);
    }
  }

  @media (max-width: 535px) {
    flex-direction: column;
  }
`;

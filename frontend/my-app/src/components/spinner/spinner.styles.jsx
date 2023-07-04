import { styled } from "@mui/material";

export const SpinnerOverlay = styled("div")`
  height: 76vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  box-shadow: 0 10rem white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  background-color: #fff;
`;

export const SpinnerContainer = styled("div")`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #ffd93d;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 0.9s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

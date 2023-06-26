import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const ErrorModal = ({ errorMessage, resetError }) => {
  const [open, setOpen] = useState(!!errorMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    setOpen(!!errorMessage);
  }, [errorMessage]);

  const style = {
    position: "'absolute' as 'absolute'",
    transform: "translate(32vw, 35vh)",
    maxWidth: "clamp(10rem, 25vw + 10rem, 30rem)",
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 24,
    p: "clamp(2rem, 5vw, 5rem) clamp(1.5rem, 5vw, 3.5rem)",
  };

  return (
    <Modal
      keepMounted
      open={open}
      onClose={() => {
        dispatch(resetError(null));
      }}
      aria-labelledby="error-modal-title"
      aria-describedby="error-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="error-modal-title"
          variant="h6"
          component="h6"
        >
          Error :
        </Typography>
        <Typography
          variant="h6"
          component="h2"
          id="error-modal-description"
          sx={{ mt: 2 }}
        >
          {errorMessage}
        </Typography>
      </Box>
    </Modal>
  );
};

export default ErrorModal;

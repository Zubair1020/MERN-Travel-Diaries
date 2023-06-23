import { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { setAuthError } from "../../redux-store/auth/auth.actions";
import { Box } from "@mui/material";

const ErrorModal = ({ authError }) => {
  const [open, setOpen] = useState(!!authError);
  const dispatch = useDispatch();

  useEffect(() => {
    setOpen(!!authError);
  }, [authError]);

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
        dispatch(setAuthError(null));
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
          {authError}
        </Typography>
      </Box>
    </Modal>
  );
};

export default ErrorModal;

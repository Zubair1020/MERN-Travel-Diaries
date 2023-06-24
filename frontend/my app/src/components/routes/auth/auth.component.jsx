import { useDispatch, useSelector } from "react-redux";
import {
  selectIsSignedUp,
  selectAuthError,
} from "../../../redux-store/auth/auth.selectors";
import { setAuthRequest } from "../../../utils/crud-api-call.utils";

import Form from "../../form/form.component";
import { StyledContainer } from "./auth.style";
import ErrorModal from "../../error-modal/error-modal.component";
import { setCurrentUser } from "../../../redux-store/user/user.action";
import { useNavigate } from "react-router-dom";
import {
  setAuthError,
  setIsLoggedIn,
} from "../../../redux-store/auth/auth.actions";

const Auth = () => {
  const isSignedUp = useSelector(selectIsSignedUp);
  const authError = useSelector(selectAuthError);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data, reset) => {
    const resData = await setAuthRequest(data, isSignedUp, dispatch);
    console.log(resData);
    dispatch(setIsLoggedIn(true));
    dispatch(setAuthError(null));
    !isSignedUp
      ? dispatch(setCurrentUser(resData.users._id))
      : dispatch(setCurrentUser(resData.id));
    reset();
    navigate("/add");
  };

  return (
    <StyledContainer>
      <Form onSubmit={onSubmit} />
      {authError ? <ErrorModal authError={authError} /> : null}
    </StyledContainer>
  );
};

export default Auth;

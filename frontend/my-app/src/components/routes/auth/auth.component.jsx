import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsSignedUp } from "../../../redux-store/user-interaction/userInteraction.selector";
import {
  setCurrentUserAsync,
  setCurrentUserFailed,
} from "../../../redux-store/user/user.action";
import {
  selectCurrentUserError,
  selectCurrentUserIsLoading,
} from "../../../redux-store/user/user.selector";

import Form from "../../form/form.component";
import ErrorModal from "../../error-modal/error-modal.component";
import Spinner from "../../spinner/spinner.component";
import { StyledContainer } from "./auth.style";

const Auth = () => {
  const isSignedUp = useSelector(selectIsSignedUp);
  const currentUserError = useSelector(selectCurrentUserError);
  const currentUserLoading = useSelector(selectCurrentUserIsLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data, reset) => {
    dispatch(setCurrentUserAsync(data, isSignedUp, navigate, reset));
  };

  return (
    <StyledContainer>
      {currentUserLoading ? (
        <Spinner />
      ) : (
        currentUserError && (
          <ErrorModal
            errorMessage={currentUserError}
            resetError={setCurrentUserFailed}
          />
        )
      )}
      <Form onSubmit={onSubmit} />
    </StyledContainer>
  );
};

export default Auth;

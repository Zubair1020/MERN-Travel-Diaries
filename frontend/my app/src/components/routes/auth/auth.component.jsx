import { setAuthRequest } from "../../../utils/crud-api-call.utill";
import Form from "../../form/form.component";
import { StyledContainer } from "./auth.style";

const Auth = () => {
  const onSubmit = (data, reset, isSignUp) => {
    reset();
    setAuthRequest(data, isSignUp);
  };

  return (
    <StyledContainer>
      <Form onSubmit={onSubmit} />
    </StyledContainer>
  );
};

export default Auth;

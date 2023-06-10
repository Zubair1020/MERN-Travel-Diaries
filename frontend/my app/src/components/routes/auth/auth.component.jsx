import Form from "../../form/form.component";
import { StyledContainer } from "./auth.style";

const Auth = () => {
  const onSubmit = (data, reset, isSignUp) => {
    reset();
    setAuthRequest(data, isSignUp);
  };

  const setAuthRequest = (data, isSignUp) => {
    const url = `http://localhost:3000/user/${isSignUp ? "signup" : "login"}`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        ...(isSignUp && { name: data.name }),
      }),
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          console.log("Unable to Authenticate user");
          throw new Error("Unable to Authenticate user");
        }
        return res.json();
      })
      .then((resData) => console.log(resData))
      .catch((err) => {
        throw new Error("Request failed", err);
      });
  };

  return (
    <StyledContainer>
      <Form onSubmit={onSubmit} />
    </StyledContainer>
  );
};

export default Auth;

import { setAuthError, setIsLoggedIn } from "../redux-store/auth/auth.actions";
import { setPosts } from "../redux-store/posts/posts.action";

const baseURL = "http://localhost:3000/";

export const getPosts = (dispatch) => {
  fetch(`${baseURL}posts`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((data) => {
      dispatch(setPosts(data.posts));
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

export const setAuthRequest = (
  data,
  isSignedUp,
  dispatch,
  setCurrentUser,
  reset,
  navigate
) => {
  const url = `${baseURL}user/${!isSignedUp ? "signup" : "login"}`;

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
      ...(!isSignedUp && { name: data.name }),
    }),
  })
    // Error Checking From Response
    .then((res) => {
      if (res.status !== 200 && res.status !== 201) {
        return res.json().then((errorData) => {
          if (res.status === 400) {
            throw new Error(errorData.ErrorMassage); // Throw an error with the error message
          }
          if (res.status === 500) {
            throw new Error(errorData.ErrorMassage); // Throw an error with the error message
          }
          throw new Error(errorData.error);
        });
      }
      return res.json();
    })
    // Hindering the response
    .then((resData) => {
      console.log(resData);
      dispatch(setIsLoggedIn(true));
      dispatch(setAuthError(null));
      !isSignedUp
        ? dispatch(setCurrentUser(resData.users._id))
        : dispatch(setCurrentUser(resData.id));
      reset();
      navigate("/add");
    })
    .catch((error) => {
      dispatch(setAuthError(error.message));
      console.error("Error during authentication:", error);
      throw error;
    });
};

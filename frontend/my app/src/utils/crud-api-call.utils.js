import { setAuthError } from "../redux-store/auth/auth.actions";

const baseURL = "http://localhost:3000/";

export const getPosts = async () => {
  try {
    const res = await fetch(`${baseURL}posts`);
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return await res.json();
  } catch (error) {
    throw new Error(`Error occurred fetching data ${error.message}`);
  }
};

export const setAuthRequest = async (data, isSignedUp, dispatch) => {
  const url = `${baseURL}user/${!isSignedUp ? "signup" : "login"}`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        ...(!isSignedUp && { name: data.name }),
      }),
    });

    if (res.status !== 200 && res.status !== 201) {
      const errorData = await res.json();
      if (res.status === 400) {
        throw new Error(errorData.ErrorMassage); // Throw an error with the error message
      }
      if (res.status === 500) {
        throw new Error(errorData.ErrorMassage); // Throw an error with the error message
      }
      throw new Error(errorData.error);
    }

    return await res.json();
  } catch (error) {
    dispatch(setAuthError(error.message));
    console.error("Error during authentication:", error);
    throw error;
  }
};

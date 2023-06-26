import { setTabValue } from "../redux-store/user-interaction/userInteraction.action";

const baseURL = "http://localhost:3000/";

export const getPosts = async () => {
  const res = await fetch(`${baseURL}posts`);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return await res.json();
};

export const setAuthRequest = async (data, isSignedUp) => {
  const url = `${baseURL}user/${!isSignedUp ? "signup" : "login"}`;
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
};

export const addPost = async (
  data,
  currentUser,
  navigate,
  reset,
  setError,
  dispatch,
  setIsLoading
) => {
  const url = `${baseURL}posts`;
  setIsLoading(true);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: data.title,
        description: data.description,
        location: data.location,
        date: data.date,
        image: data.imageUrl,
        user: currentUser,
      }),
    });
    if (res.status !== 200 && res.status !== 201) {
      const errorData = await res.json();
      if (res.status === 422) {
        throw new Error(errorData.ErrorMassage); // Throw an error with the error message
      }
      if (res.status === 404) {
        throw new Error(errorData.ErrorMassage); // Throw an error with the error message
      }
      throw new Error(errorData.error);
    }

    reset();
    dispatch(setTabValue(1));
    navigate("/diaries");
    setIsLoading(false);
    const resData = await res.json();
    console.log(resData);
    return resData;
  } catch (error) {
    setError(error);
    setIsLoading(false);
    throw error;
  }
};

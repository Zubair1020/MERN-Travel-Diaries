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

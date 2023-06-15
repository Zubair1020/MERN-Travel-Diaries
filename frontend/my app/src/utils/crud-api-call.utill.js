const baseURL = "http://localhost:3000/";

export const getPosts = (setPostsData) => {
  fetch(`${baseURL}posts`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((data) => {
      setPostsData(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

export const setAuthRequest = (data, isSignUp) => {
  const url = `${baseURL}user/${isSignUp ? "signup" : "login"}`;

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

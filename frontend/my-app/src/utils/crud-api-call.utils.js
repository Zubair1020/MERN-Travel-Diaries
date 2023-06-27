const baseURL = "http://localhost:3000/";

/***************  GET request fro all the posts  ************* */
export const getPosts = async () => {
  const res = await fetch(`${baseURL}posts`);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return await res.json();
};

/***************  POST request to authenticate user ************* */
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

/***************  POST request ot add post  ************* */
export const addPost = async (data, currentUser) => {
  const url = `${baseURL}posts`;

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

  return await res.json();
};

/***************  GET request to get posts by id  ************* */
export const getPostDetails = async (id) => {
  const res = await fetch(`${baseURL}posts/${id}`);
  if (res.status !== 200) throw new Error("Unable to fetch diary");

  return await res.json();
};

/***************  PUT request to update post  ************* */
export const updatePostById = async (data, id) => {
  const url = `${baseURL}posts/${id}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: data.title,
      description: data.description,
      location: data.location,
      image: data.imageUrl,
    }),
  });
  if (res.status !== 200) {
    const errorData = await res.json();
    throw new Error("Unable to update" + errorData);
  }

  return await res.json();
};

/***************  DELETE request to delete user selected post  ************* */
export const deletePostById = async (id) => {
  const url = `${baseURL}posts/${id}`;
  const res = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.status !== 200) {
    const errorData = await res.json();
    throw new Error("Unable to delete: " + errorData.message);
  }

  return await res.json();
};

/***************  GET request to get user details  ************* */
export const getUserDetails = async (id) => {
  const res = await fetch(`${baseURL}user/${id}`);
  if (res.status !== 200) throw new Error("No user found");

  return await res.json();
};

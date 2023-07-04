import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  setDoc,
  addDoc,
  doc,
  updateDoc,
  getDoc,
  arrayUnion,
  arrayRemove,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3nvx3wkymE7WnvzvmhBQ2LzyhsOe5794",
  authDomain: "full-stack-travel-diary.firebaseapp.com",
  projectId: "full-stack-travel-diary",
  storageBucket: "full-stack-travel-diary.appspot.com",
  messagingSenderId: "1083332366925",
  appId: "1:1083332366925:web:795b295118e2bd460d8204",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

//******** Authentication *******/
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return console.error("Emai or password is missing");

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signAuthInWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return console.error("Email or Password is missing");

  return signInWithEmailAndPassword(auth, email, password);
};

//********** Create user ************/
export const createUserDocumentFromAuth = async (userAuth, name) => {
  const { uid, email } = userAuth;
  const createdAt = new Date();
  const data = {
    name: name,
    email,
    posts: [],
    createdAt,
  };

  await setDoc(doc(db, "users", uid), data, { merge: true });
  // console.log("User created with ID: ", uid);
};

//********** Create Post ************/
export const addPostById = async (data, uid) => {
  const postData = {
    title: data.title,
    description: data.description,
    image: data.imageUrl,
    location: data.location,
    date: data.date,
    id: null,
    user: uid,
  };

  const docRef = await addDoc(collection(db, "posts"), postData);
  const postId = docRef.id;
  await updateDoc(doc(db, "posts", postId), { id: postId });
  // console.log("Post created with ID: ", postId);
  addRemovePostId(uid, docRef.id, true);
};

// ******** Get a document
//********** Get the  CurrentUsers Details ************/
export const getUserDetails = async (uid) => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) return docSnap.data();

  // docSnap.data() will be undefined in this case
  throw new Error("No such document found!");
};

// ************** Get real-time updates
//********** Get all of the posts with the updates ************/
export const getAllPosts = (updatePosts) => {
  const collectionRef = collection(db, "posts");
  const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
    const posts = querySnapshot.docs.map((doc) => doc.data());
    updatePosts(posts);
  });
  return unsubscribe; // Return the unsubscribe function
};

//********** Delete Post ************/
export const deletePostById = async (uid, postId) => {
  await deleteDoc(doc(db, "posts", postId));
  // console.log("Post successfully deleted");
  addRemovePostId(uid, postId, false);
};

//********** Helper function to add or remove id to users post array ************/
export const addRemovePostId = async (uid, postId, add) => {
  const washingtonRef = doc(db, "users", uid);
  await updateDoc(washingtonRef, {
    posts: add ? arrayUnion(postId) : arrayRemove(postId),
  });
  console.log(
    `Posts id ${add ? "added" : "removed"} ${
      add ? "to" : "from"
    } posts filed in users document`
  );
};

//********** Update a post ************/
export const updatePostById = async (data, postId) => {
  const washingtonRef = doc(db, "posts", postId);

  await updateDoc(washingtonRef, {
    title: data.title,
    description: data.description,
    image: data.imageUrl,
    location: data.location,
  });
  console.log("Successfully updated post");
};

//********** Get a post to update ************/
export const getPostDetailsById = async (postId) => {
  const docRef = doc(db, "posts", postId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) return docSnap.data();
  throw new Error("No document found!");
};

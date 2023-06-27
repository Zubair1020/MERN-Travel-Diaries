import mongoose from "mongoose";
import Post from "../models/Post";
import User from "../models/User";

export const getAllPosts = async (req, res) => {
  let posts;

  try {
    posts = await Post.find();
  } catch (err) {
    console.error(err);
  }

  if (!posts) {
    return res.status(500).json({ ErrorMassage: "Unexpected Error Occurred" });
  }

  return res.status(200).json({ posts });
};

export const addPost = async (req, res) => {
  const { title, description, location, date, image, user } = req.body;

  if (
    !title ||
    title.trim() === "" ||
    !description ||
    description.trim() === "" ||
    !location ||
    location.trim() === "" ||
    !date ||
    isNaN(Date.parse(date)) ||
    !image ||
    image.trim() === "" ||
    !user
  ) {
    return res.status(422).json({ ErrorMassage: "Invalid Data" });
  }

  let existingUser;
  try {
    existingUser = await User.findById(user);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ErrorMassage: "Internal Server Error" });
  }

  if (!existingUser) {
    return res.status(404).json({ ErrorMassage: "User not found" });
  }

  let post;
  try {
    post = new Post({
      title,
      description,
      location,
      date: new Date(date),
      image,
      user,
    });

    const session = await mongoose.startSession();
    session.startTransaction();
    existingUser.posts.push(post);
    await existingUser.save({ session });
    await post.save({ session });
    session.commitTransaction();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ErrorMassage: "Unexpected Error Occurred" });
  }

  if (!post) {
    return res.status(500).json({ ErrorMassage: "Unexpected Error Occurred" });
  }

  return res.status(200).json({ Message: "Successfully posted", post });
};

export const getPostById = async (req, res) => {
  const id = req.params.id;

  let post;
  try {
    post = await Post.findById(id);
  } catch (err) {
    return console.error(err);
  }

  if (!post) return res.status(404).json({ ErrorMassage: "No post found" });

  return res.status(200).json({ post });
};

export const updatePostById = async (req, res) => {
  const id = req.params.id;
  const { title, description, location, image } = req.body;

  if (
    !title &&
    title.trim() == "" &&
    !description &&
    description.trim() &&
    !location &&
    location.trim() == "" &&
    !image &&
    image.trim() == ""
  ) {
    return res.status(422).json({ ErrorMassage: "Invalided Data" });
  }

  let post;
  try {
    post = await Post.findByIdAndUpdate(id, {
      title,
      description,
      location,
      image,
    });
  } catch (err) {
    return res.json({ err });
  }

  if (!post) return res.status(500).json({ ErrorMassage: "Unable to update" });

  return res.status(200).json({ massage: "Updated successfully" });
};

export const deletePostById = async (req, res) => {
  const id = req.params.id;

  let post;
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    post = await Post.findById(id).populate("user");
    post.user.posts.pull(post);
    await post.user.save({ session });
    await Post.deleteOne({ _id: id });
    session.commitTransaction();
  } catch (err) {
    console.error(err);
    return res.json({ err });
  }

  if (!post) return res.status(500).json({ ErrorMassage: "Unable to delete" });

  return res.status(200).json({ massage: "Deleted successfully" });
};

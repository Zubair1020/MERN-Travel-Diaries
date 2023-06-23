import { hashSync, compareSync } from "bcryptjs";
import User from "../models/User";

export const getAllUsers = async (req, res) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    return console.error(err);
  }

  if (!users)
    return res.status(500).json({ ErrorMassage: "Unexpected Error Occurred" });

  return res.status(200).json({ users });
};

export const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  if (
    !name &&
    name.trim() == "" &&
    !email &&
    email.trim() &&
    !password &&
    password.length < 6
  ) {
    return res.status(422).json({ ErrorMassage: "Invalid Data" });
  }
  const hashedPassword = hashSync(password);

  let users;
  try {
    users = new User({ name, email, password: hashedPassword });
    await users.save();
  } catch (error) {
    console.error("Error creating user:", error);
    if (
      error.code === 11000 &&
      error.keyPattern &&
      error.keyValue &&
      error.keyValue.email
    ) {
      const duplicateEmailError = `Email '${error.keyValue.email}' is already registered.`;
      return res.status(409).json({ error: duplicateEmailError });
    }
    return res.status(500).json({ error: "An error occurred" });
  }

  if (!users) {
    return res.status(500).json({ ErrorMassage: "Unexpected Error Occurred" });
  }

  return res.status(201).json({ massage: "User created successfully ", users });
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email && email.trim() && !password && password.length < 6) {
    return res.status(422).json({ ErrorMassage: "Invalid Data" });
  }

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (error) {
    return res.status(500).json({ ErrorMassage: "Email is not registered" });
  }
  if (!existingUser) {
    return res.status(500).json({ ErrorMassage: "No user found" });
  }
  if (!existingUser || existingUser.length === 0) {
    return res.status(500).json({ ErrorMassage: "No user found" });
  }

  const isPasswordCorrect = compareSync(password, existingUser.password);

  if (!isPasswordCorrect) {
    return res.status(400).json({ ErrorMassage: "Incorrect Password" });
  }

  return res
    .status(200)
    .json({ id: existingUser.id, massage: "Login Successful" });
};

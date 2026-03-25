const User = require("../model/user.model");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};
exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user" });
  }
};
exports.getUserByEmail = async (req, res) => {
  const { email } = req.params;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user" });
  }
};
exports.addUser = async (req, res) => {
  const user = req.body;
  try {
    const newUser = new User(user);
    const savedUser = await newUser.save();
    const userDto = { ...savedUser._doc }; // Convert Mongoose document to plain JavaScript object
    delete userDto.password; // Remove password from the response
    delete userDto.__v; // Remove __v field from the response
    res.status(201).json(userDto); // Send the user data without the password
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add user" });
  }
};
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const user = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update user" });
  }
};
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete user" });
  }
};

// yogender 21532
// W/D Am Node@1
// keshav 20102
// Himanshu 21541
// satyaprakash 22053
// ritu 21491
// dilshad 20425
// arnav 21309
// kritesh 21050
// Bhupender 20742
// Paramjeet Singh 21919
// sukhmanpreet 21969
// Priya arora 20101
// akash 21973

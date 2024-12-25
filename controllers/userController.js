const user = require("../models/user");

// get all users
// localhost:3000/api/users/all (get)
async function getAllUsers(req, res) {
  const allusers = await user.find();
  return res.status(200).json(allusers);
}

// get user by id
// localhost:3000/api/users/:id (get)
async function getUserById(req, res) {
  const { id } = req.params;
  //   const theuser = user.find({ _id: id }); // array
  //   const theuser = user.findOne({ _id: id }); // element 1
  const theuser = await user.findById(id); // element 1
  return res.status(200).json(theuser);
}

// Effacer l'user by id
// localhost:3000/api/users/:id (delete)
async function deleteUserById(req, res) {
  const { id } = req.params;
  await user.findByIdAndDelete(id);
  return res.status(200).json({ message: "Success deletion" });
}

// creation l'user
// localhost:3000/api/users (post)
async function creationUser(req, res) {
  const { firstname, lastname, birthday, age, isActive } = req.body;
  await user.create({
    firstname: firstname,
    lastname: lastname,
    birthday: birthday,
    age: age,
    isActive: isActive,
  });
  return res.status(201).json({ message: "user Added" });
}

//update user by id
// localhost:3000/api/users/:id (put)
async function updateUser(req, res) {
  const { id } = req.params;
  const { firstname, lastname, birthday, age, isActive } = req.body;
  await user.findByIdAndUpdate(id, {
    $set: { firstname, lastname, birthday, age, isActive },
  });
  return res.status(200).json({ message: "user updated" });
}

module.exports = {
  getAllUsers,
  getUserById,
  deleteUserById,
  creationUser,
  updateUser,
};

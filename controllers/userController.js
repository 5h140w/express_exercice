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

module.exports = { getAllUsers, getUserById };

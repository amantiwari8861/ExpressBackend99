exports.getAllUsers = async (req, res) => {
  res.send("Givinging User!");
};
exports.getUserById = async (req, res) => {
  const { id } = req.params;
  res.send("Givinging User Details Having ID :" + id);
};
exports.addUser = async (req, res) => {
  const user = req.body;
  res.send("Adding User! " + JSON.stringify(user));
};
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const user = req.body;
  res.send("Updating User having id " + id + " with " + JSON.stringify(user));
};
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  res.send("Deleting User having id :" + id);
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

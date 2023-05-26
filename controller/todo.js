const getAllTodos = (req, res) => {
  return res.json({
    msg: "WOW",
  });
};

const createATodo = (req, res) => {
  console.log(req.body);
};

const updateATodo = (req, res) => {
  const { id } = req.params;
  console.log(id);
};
const deleteATodo = (req, res) => {
  const { id } = req.params;
  console.log(id);
};

module.exports = { getAllTodos, createATodo, updateATodo, deleteATodo };

const express = require("express");
const router = express.Router();
const TodoController = require("../controller/todo");

router.get("/", TodoController.getAllTodos);

router.post("/", TodoController.createATodo);

router.put("/:id", TodoController.updateATodo);

router.delete("/:id", TodoController.deleteATodo);

module.exports = router;

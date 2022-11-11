import express, { Router } from "express";
import Todos from "../models/todo.js";
const router = Router();

export async function getTodos(req, res) {
	try {
		const limit = parseInt(req.query.limit) || 10
		const offset = parseInt(req.query.offset) || 0
		console.log({ limit, offset })
		const TodoList = await Todos.find({ user: req.user._id }).sort({ 'order': 'asc' }).limit(limit).skip(offset);
		res.send({ Todos: TodoList });
	} catch (error) {
		console.log(error);
		return res.status(500).send({ Error: error });
	}
}
export async function getTodo(req, res) {
	try {
		const Todo = await Todos.findOne({ _id: req.params.id });
	
		res.send({ Todo });
	} catch (error) {
		console.log(error);
		return res.status(500).send({ Error: error });
	}
}
export async function createTodo(req, res) {
	const { title, status } = req.body
	const Todo = new Todos({ title, status});
	try {
		await Todo.save();
		res.send({ Todo });
	} catch (error) {
		console.log(error);
		return res.status(500).send({ Error: error });
	}
}
export async function deleteTodo(req, res) {
	try {
		const Todo = await Todos.findByIdAndDelete(req.params.id);

		if (!Todo) return res.status(404).send({ Error: "No items Found" });
		res.send({ message: "Todo deleted" });
	} catch (error) {
		console.log(error);
		return res.status(500).send({ Error: error });
	}
}
export async function updateTodo(req, res) {
	try {
		await Todos.findByIdAndUpdate(req.params.id, req.body);
		const Todo = await Todos.findOne({ _id: req.params.id });
		res.send({ Todo });
	} catch (error) {
		console.log(error);
		return res.status(500).send({ Error: error });
	}
}



router.get("/all", getTodos);
router.get("/:id", getTodo);
router.post("/", createTodo);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;

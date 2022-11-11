import mongoose from "mongoose";

const TodoSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		enum: ['TODO', 'INPROGRESS', 'TESTING', 'DONE'],
		default: 'TODO'
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Users",
	},
	order: {
		type: Number,
		default: Date.now
	}
}, { timestamps: true });

const TodoModel = mongoose.model("todo", TodoSchema);
export default TodoModel;
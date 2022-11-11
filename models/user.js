import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
	sid: { type: String, unique: true },
	firstName: { type: String, trim: true },
	lastName: { type: String, trim: true },
	email: { type: String, required: true, trim: true, lowercase: true, unique: true, sparse: true },
	password: { type: String },
});

const UserModel = mongoose.model("user", UserSchema);
export default UserModel;
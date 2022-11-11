import mongoose from "mongoose";
const { connect } = mongoose;
import { DB_URL } from '../utils/envset.js'


const mongoDbKey = DB_URL;

connect(mongoDbKey, {
	useNewUrlParser: true,
}).then(e => console.log("connected to db")).catch((e) => {
	console.log(e);
});

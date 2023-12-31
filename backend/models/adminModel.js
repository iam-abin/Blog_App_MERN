import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
	{
		adminName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			min: 4,
		},
	},
	{ timestamps: true }
);

const Admin = mongoose.model("Admin", AdminSchema);
export default Admin;

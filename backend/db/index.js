import mongoose from "mongoose";

const connectDb = async () => {
	try {
		const connectionInstance = await mongoose.connect(
			`${process.env.MONGODB_URI}`
		);
		console.log(
			`MongoDB connected!! DB HOST: ${connectionInstance.connection.host}`
		);
	} catch (error) {
		console.log("MONGO DB FAILED", error);
		process.exit(1);
	}
}

export default connectDb
import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URL);
    if (connection.readyState === 1) {
      /*
        readyState property return 3 values: 
        0 -> Disconnected
        1 -> Connected
        2 -> Connecting
        3 -> Disconnecting
      */
      return Promise.resolve(true);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export default connectMongo;

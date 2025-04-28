import app from "./app";
import mongoose from 'mongoose';
import { dbUrl, port } from './config/config';

let server: ReturnType<typeof app.listen>

const serverStart = () => {
  server = app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })
} 

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl)
    console.log("DB CONNECTED SUCCESSFULLY")
    serverStart()
  } catch (error) {
    console.log(error, "DB CONNECTION FAILED")
    process.exit(1)
  }
}

connectDB()

const gracefullyShutDown = async () => {
  try {
    server.close(() => {
      console.log('server is closed')
    })

    await mongoose.connection.close();
    console.log('DB connection closed')
    process.exit(1)
  } catch (error) {
    console.log(error, "DB CONNECTION FAILED TO SHUTDOWN")
  }
}

process.on('SIGTERM', gracefullyShutDown);
process.on('SIGINT', gracefullyShutDown);
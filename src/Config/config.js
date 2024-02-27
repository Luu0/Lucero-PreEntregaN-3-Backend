import dotenv from "dotenv";
dotenv.config();

export default{
  port: process.env.PORT,
  urlmongo: process.env.MONGO_URL,
  adminname: process.env.ADMIN_NAME,
  adminpassword: process.env.ADMIN_PASSWORD,
}
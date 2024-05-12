import dotenv from "dotenv";
dotenv.config();

const serverConfig = {
  port: process.env.PORT || 8000,
  jwtSecret: process.env.JWT_SECRET,
};

export default serverConfig;

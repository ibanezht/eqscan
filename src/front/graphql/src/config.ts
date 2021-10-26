import * as dotenv from "dotenv";

export interface Config {
  PORT: number;
  API_URI: string;
}

export function getConfig(): Config {
  dotenv.config();

  const PORT = parseInt(process.env.PORT ?? "4000");
  const API_URI = process.env.API_URI ?? "http://localhost:5000";

  return {
    PORT,
    API_URI,
  };
}

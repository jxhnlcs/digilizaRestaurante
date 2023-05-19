import mysql from 'mysql2/promise'
import * as dotenv from 'dotenv'
dotenv.config()

const conf = {
  host: process.env.BD_HOST,
  user: process.env.BD_USER,
  password: process.env.BD_PWD,
  database: process.env.BD_DB,
};
;
export const connection = await mysql.createConnection(conf)

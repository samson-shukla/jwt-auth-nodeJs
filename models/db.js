import mysql from "mysql2";
import "dotenv/config";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

// Establishing database connection
db.connect((err) => {
  if (!err) console.log("Database connected successfully");
  else
    console.log(
      "Database connection failed" + JSON.stringify(err, undefined, 2)
    );
});

export default db;

const { Pool } = require("pg");
const bcrypt = require("bcrypt");

const connectionString = "postgresql://neondb_owner:npg_1OoZDaQg5LpI@ep-polished-lab-b4jqpaun-pooler.c-6.us-east-2.aws.neon.tech/neondb?sslmode=require&uselibpqcompat=true";

const pool = new Pool({
  connectionString,
});

async function run() {
  try {
    const res = await pool.query("SELECT * FROM users LIMIT 5");
    console.log("Users:", res.rows);
  } catch (e) {
    console.error("Error:", e);
  } finally {
    await pool.end();
  }
}

run();

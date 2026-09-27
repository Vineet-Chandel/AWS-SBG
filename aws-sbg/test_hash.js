const { Pool } = require("pg");
const connectionString = "postgresql://neondb_owner:npg_1OoZDaQg5LpI@ep-polished-lab-b4jqpaun-pooler.c-6.us-east-2.aws.neon.tech/neondb?sslmode=require&uselibpqcompat=true";
const pool = new Pool({ connectionString });
async function run() {
  try {
    const res = await pool.query("SELECT password FROM users ORDER BY id DESC LIMIT 1");
    if (res.rows.length > 0) {
      console.log("Hash:", res.rows[0].password);
      console.log("Length:", res.rows[0].password.length);
    }
  } finally {
    await pool.end();
  }
}
run();

import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DB_CONNECTION_LINK,
});

export default pool;
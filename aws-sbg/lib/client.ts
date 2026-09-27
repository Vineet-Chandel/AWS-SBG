import { Pool } from "pg";

// Add uselibpqcompat=true to suppress the 'pg' library warning
const connectionString = process.env.DB_CONNECTION_LINK?.includes("sslmode=require")
  ? process.env.DB_CONNECTION_LINK.replace("sslmode=require", "sslmode=require&uselibpqcompat=true")
  : process.env.DB_CONNECTION_LINK;

const pool = new Pool({
  connectionString,
});

export default pool;
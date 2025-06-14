import serverlessMysql from "serverless-mysql";

export const db = serverlessMysql({
  config: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

export async function query(q: string, values?: (string | number)[]) {
  try {
    const results = await db.query(q, values);
    await db.end();
    return results;
  } catch (err) {
    console.error("MySQL query error:", err);
    throw err;
  }
}

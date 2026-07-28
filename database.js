require("dotenv").config();

const { Pool } = require("pg");

const pool = new Pool({
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
});

async function initializeDatabase() {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS tasks (
            id SERIAL PRIMARY KEY,
            title TEXT NOT NULL,
            done BOOLEAN NOT NULL
        )
    `);

    const result = await pool.query("SELECT COUNT(*) FROM tasks");

    if (Number(result.rows[0].count) === 0) {
        await pool.query(`
            INSERT INTO tasks (title, done)
            VALUES
            ('Buy milk', false),
            ('Study Express', false),
            ('Go to the gym', true)
        `);
    }
}

initializeDatabase()
    .then(() => console.log("Database initialized"))
    .catch(err => console.error(err));

module.exports = pool;
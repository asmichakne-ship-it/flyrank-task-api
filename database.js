const Database = require("better-sqlite3");

const db = new Database("tasks.db");

db.prepare(`
CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    done INTEGER NOT NULL
)
`).run();

// Check if table is empty
const count = db.prepare("SELECT COUNT(*) AS count FROM tasks").get();

if (count.count === 0) {

    const insert = db.prepare(
        "INSERT INTO tasks (title, done) VALUES (?, ?)"
    );

    insert.run("Buy milk", 0);
    insert.run("Study Express", 0);
    insert.run("Go to the gym", 1);
}

module.exports = db;
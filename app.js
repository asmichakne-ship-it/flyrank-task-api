const express = require("express");

const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const app = express();

const db = require("./database");

app.use(express.json());

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Task API",
            version: "1.0.0",
            description: "A simple CRUD API built with Express"
        }
    },
    apis: ["./app.js"]
};

const swaggerSpec = swaggerJsdoc(options);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get API information
 *     responses:
 *       200:
 *         description: Returns API information
 */

// Route 1 : Basic info
app.get("/", (req, res) => {
   res.json({
    name: "Task API",
    version: "1.0",
    endpoints: ["/tasks"]
});
});

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Get all tasks
 *     responses:
 *       200:
 *         description: Returns a list of all tasks
 */

// Route 2 : displays all the tasks
app.get("/tasks", (req, res) => {

    const tasks = db
        .prepare("SELECT * FROM tasks")
        .all();

    tasks.forEach(task => {
        task.done = Boolean(task.done);
    });

    res.json(tasks);

});

/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     summary: Get a task by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Task ID
 *     responses:
 *       200:
 *         description: Task found
 *       404:
 *         description: Task not found
 */

// Route 3 : displays a specific task from the list
app.get("/tasks/:id", (req, res) => {

    const taskId = Number(req.params.id);

    const task = db
        .prepare("SELECT * FROM tasks WHERE id = ?")
        .get(taskId);

    if (!task) {
        return res.status(404).json({
            error: `Task ${taskId} not found`
        });
    }

    task.done = Boolean(task.done);

    res.json(task);

});

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Create a new task
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *     responses:
 *       201:
 *         description: Task created
 *       400:
 *         description: Title is required
 */

// POST method : for sending data or creating new tasks
app.post("/tasks", (req, res) => {

    const { title } = req.body;

    if (!title || title.trim() === "") {
    return res.status(400).json({
        error: "Title is required"
    });
    }

    const result = db.prepare(
    "INSERT INTO tasks (title, done) VALUES (?, ?)"
    ).run(title, 0);

    const newTask = {

    id: result.lastInsertRowid,

    title,

    done: false

    };

    res.status(201).json(newTask);

});

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Update an existing task
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               done:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Task updated
 *       404:
 *         description: Task not found
 */

// PUT method : to update the tasks
app.put("/tasks/:id", (req, res) => {

    const taskId = Number(req.params.id);

    const { title, done } = req.body;

    const existing = db
        .prepare("SELECT * FROM tasks WHERE id = ?")
        .get(taskId);

    if (!existing) {

        return res.status(404).json({
            error: `Task ${taskId} not found`
        });

    }

    db.prepare(
        "UPDATE tasks SET title = ?, done = ? WHERE id = ?"
    ).run(title, done ? 1 : 0, taskId);

    res.json({

        id: taskId,

        title,

        done

    });

});

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Delete a task
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Task deleted
 *       404:
 *         description: Task not found
 */

// DELETE method : to delete the tasks
app.delete("/tasks/:id", (req, res) => {

    const taskId = Number(req.params.id);

    const result = db
        .prepare("DELETE FROM tasks WHERE id = ?")
        .run(taskId);

    if (result.changes === 0) {

        return res.status(404).json({
            error: `Task ${taskId} not found`
        });

    }

    res.status(204).send();

});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
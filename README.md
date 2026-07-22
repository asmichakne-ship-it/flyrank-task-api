# Task API

A RESTful CRUD API built with **Node.js**, **Express.js**, and **SQLite** as part of the FlyRank Backend Internship (Week 3 Assignment).

The API allows users to:

- View all tasks
- View a single task
- Create a new task
- Update an existing task
- Delete a task

The project also includes interactive API documentation using **Swagger UI**.

---

## Technologies Used

- Node.js
- Express.js
- SQLite
- better-sqlite3
- Swagger UI
- Swagger JSDoc

---

## Why SQLite?

SQLite was chosen because it is a lightweight, serverless database that stores all data in a single file (`tasks.db`). It requires no separate installation or configuration, making it ideal for small projects and learning backend development.

Unlike the previous version of this project, tasks are now stored permanently and remain available even after the server is restarted.

---

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/flyrank-task-api.git
```

Move into the project folder:

```bash
cd flyrank-task-api
```

Install dependencies:

```bash
npm install
```

---

## Running the Project

Start the server:

```bash
node app.js
```

The API will be available at:

```
http://localhost:3000
```

Swagger documentation:

```
http://localhost:3000/docs
```

---

## Database

The application automatically creates a SQLite database named:

```
tasks.db
```

if it does not already exist.

On the first run it will:

- create the `tasks` table
- insert three example tasks

The database file is listed in `.gitignore`, so it is **not stored in the GitHub repository**. Every new clone automatically creates a fresh database.

---

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | / | API information |
| GET | /tasks | Get all tasks |
| GET | /tasks/{id} | Get a task by ID |
| POST | /tasks | Create a task |
| PUT | /tasks/{id} | Update a task |
| DELETE | /tasks/{id} | Delete a task |

---

## Example Request

```bash
curl -i http://localhost:3000/tasks
```

Example response:

```json
[
  {
    "id": 1,
    "title": "Buy milk",
    "done": false
  },
  {
    "id": 2,
    "title": "Study Express",
    "done": false
  },
  {
    "id": 3,
    "title": "Go to the gym",
    "done": true
  }
]
```

---

## Example SQL Query

One SQL query used during development:

```sql
SELECT * FROM tasks;
```

This query returns every task currently stored in the database.

---

## Database Screenshot

Add a screenshot here showing the `tasks` table opened in **DB Browser for SQLite**.

Example:

```
![Database Screenshot](images/database.png)
```

---

## Swagger Documentation

Add your Swagger screenshot here:

```
![Swagger UI](images/swagger.png)
```

---

## Project Structure

```
flyrank-task-api/
│
├── app.js
├── database.js
├── package.json
├── package-lock.json
├── README.md
├── .gitignore
└── node_modules/
```

---

## Author

Created as part of the FlyRank Backend Internship Backend Track - Week 3 Assignment.

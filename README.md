# Task API

A simple RESTful CRUD API built with **Node.js** and **Express.js** as part of the FlyRank Backend Internship assignment.

The API allows you to:

- View all tasks
- View a single task
- Create a new task
- Update an existing task
- Delete a task

The project also includes interactive API documentation using **Swagger UI**.

---

# Technologies Used

- Node.js
- Express.js
- Swagger UI
- Swagger JSDoc

---

# Installation

npm install
npm start

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

# Run the Project

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

# API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | / | API information |
| GET | /health | Health check |
| GET | /tasks | Get all tasks |
| GET | /tasks/{id} | Get a task by ID |
| POST | /tasks | Create a new task |
| PUT | /tasks/{id} | Update a task |
| DELETE | /tasks/{id} | Delete a task |

---

# Example curl Output

Command:

```bash
curl -i http://localhost:3000/tasks
```

Example output:

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

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
  }
]
```

---

# Swagger Documentation Screenshot
https://github.com/user-attachments/assets/f5b6b9d4-8883-4aee-aa96-3056bac898d7

Project structure:

```
flyrank-task-api/
│
├── app.js
├── package.json
├── package-lock.json
├── README.md
├── .gitignore
```

# Author
Created as part of the **FlyRank Backend Internship** assignment.

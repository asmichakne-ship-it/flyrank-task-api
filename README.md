# Task API

A RESTful Task API built with Node.js, Express, PostgreSQL, and Docker. It supports full CRUD operations and includes Swagger documentation for testing the API.

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
- PostgreSQL
- pg
- Docker
- Docker Compose
- Swagger UI
- swagger-jsdoc

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
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

## Environment Variables

```env
PGHOST=localhost
PGPORT=5432
PGUSER=postgres
PGPASSWORD=dev
PGDATABASE=tasks
```
The users should copy the .env.example to .env and update it if needed.

---

## Running the Project

Start the server:

Local :

```bash
npm install
node app.js
```

Docker :

```bash
docker compose up --build
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

## Docker section

The project includes a Dockerfile and compose.yaml. Running docker compose up --build starts both the Express application and the PostgreSQL database.

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

## Database and Sawgger Screenshot

The Screenshot shows the task-api in Swagger

<img src="C:\Users\LENOVO\Desktop\Screenshots\Swagger.png" alt="Swagger Screenshot" width="850">

The screenshot shows the working database in Docker

<img src="C:\Users\LENOVO\Desktop\Screenshots\Docker.png" alt="Docker Screenshot" width="850">

--

## Project Structure

```
flyrank-task-api/
│── app.js
│── database.js
│── Dockerfile
│── compose.yaml
│── package.json
│── .env.example
│── README.md
```

---

## Author

Created as part of the FlyRank Backend Internship Backend Track - Week 3 Assignment.

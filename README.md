# Task Management Dashboard

A modern full-stack task management web application built for **interns and managers**. It allows managers to create, assign, and delete tasks, while interns can update the status of their assigned tasks. This project demonstrates **role-based access control**, JWT authentication, and a responsive React front-end with Styled Components.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [License](#license)

---

## Features

### Manager
- Create new tasks with title, description, deadline, assigned user, and status.
- Delete tasks.
- View all registered interns.
- Manage tasks for all users.

### Intern
- View tasks assigned to them.
- Update the status of their tasks (`To Do`, `In Progress`, `Done`).

### Common Features
- JWT-based authentication and role-based access control.
- Responsive UI built with React and Styled Components.
- Easy-to-use task dashboard.
- Error handling and notifications.

---

## Tech Stack

**Frontend**
- React
- React Router DOM
- Axios
- Styled Components

**Backend**
- Node.js
- Express.js
- SQLite
- JWT for authentication

**Other Tools**
- Git for version control
- Postman for API testing
- Vite for React setup

---
### Screenshots

Login Page

![Login Page](https://res.cloudinary.com/dpiu7mohv/image/upload/v1756987484/Screenshot_2025-09-04_171553_ude3x3.png "Login Page")

Register Page

![Login Page](https://res.cloudinary.com/dpiu7mohv/image/upload/v1756988483/Screenshot_2025-09-04_171606_wtdjds.png "Register Page")

Dashboard – Intern View

![Login Page](https://res.cloudinary.com/dpiu7mohv/image/upload/v1756988605/Screenshot_2025-09-04_171430_yab6sw.png "Dashboard – Intern View")

Dashboard – Manager View

![Login Page](https://res.cloudinary.com/dpiu7mohv/image/upload/v1756988711/Screenshot_2025-09-04_171536_bd4y3n.png "Dashboard – Manager View")

Interns List Page

![Login Page](https://res.cloudinary.com/dpiu7mohv/image/upload/v1756988760/Screenshot_2025-09-04_172127_kitupz.png "Interns List Page")

---

## Install frontend dependencies
   cd client-vite
   npm install

## Install backend dependencies
  cd ../server
   npm install

## Setup environment variables

Create a .env file in the server folder:

JWT_SECRET=your_jwt_secret

Run the backend server
npm start

Run the frontend
cd ../client-vite
npm run dev


Open your browser at the URL provided by Vite (usually http://localhost:5173).

## Usage

Register a new account as a Manager or Intern.

Login using your credentials.

Managers can:

Create new tasks

Delete tasks

View all interns

### Interns can:

View assigned tasks

Update the status of tasks

API Endpoints

### Authentication

POST /auth/register – Register a new user (intern or manager)

POST /auth/login – Login and receive JWT token, role, and user ID

### Tasks

GET /tasks – Fetch all tasks (Manager) or assigned tasks (Intern)

POST /tasks/create – Create a new task (Manager only)

PUT /tasks/:id/status – Update task status (Intern for assigned tasks, Manager for all)

DELETE /tasks/delete/:id – Delete a task (Manager only)

### Interns

GET /tasks/interns – Fetch all registered interns (Manager only)
---
## Folder Structure

```
project-root/
│
├── client-vite/        # Frontend React app
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login/
│   │   │   ├── Register/
│   │   │   ├── Dashboard/
│   │   │   └── InternsPage/
│   │   └── styledComponents.js
│   └── package.json
│
└── server/             # Backend Express app
    ├── routes/
    ├── database/
    ├── middleware/
    └── package.json
```

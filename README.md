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

## Installation

1. **Clone the repository**
```bash
git clone <repository-url>

Install frontend dependencies

cd client-vite
npm install


Install backend dependencies

cd ../server
npm install


Setup environment variables

Create a .env file in the server folder:

JWT_SECRET=your_jwt_secret


Run the backend server

npm start


Run the frontend

cd ../client-vite
npm run dev


Open your browser at the URL provided by Vite (usually http://localhost:5173).

Usage

Register a new account as a Manager or Intern.

Login using your credentials.

Managers can:

Create new tasks.

Delete tasks.

View all interns.

Interns can:

View assigned tasks.

Update the status of tasks.

API Endpoints
Authentication

POST /auth/register – Register a new user (intern or manager)

POST /auth/login – Login and receive JWT token, role, and user ID

Tasks

GET /tasks – Fetch all tasks (Manager) or assigned tasks (Intern)

POST /tasks/create – Create a new task (Manager only)

PUT /tasks/:id/status – Update task status (Intern for assigned tasks, Manager for all)

DELETE /tasks/delete/:id – Delete a task (Manager only)

Interns

GET /tasks/interns – Fetch all registered interns (Manager only)

Folder Structure

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




# Screenshots
# 1️ Login Page

Shows the login form for existing users (Interns & Managers).

![Login Page](<img width="288" height="236" alt="Screenshot 2025-09-04 171553" src="https://github.com/user-attachments/assets/529a0795-0ec1-4524-9b2a-4029c5bf3118" />
)



2️⃣ Register Page

Allows new users to register as an Intern or Manager.
<img width="289" height="349" alt="Screenshot 2025-09-04 171606" src="https://github.com/user-attachments/assets/29ff7a37-f436-4093-ad8b-ecb37cc7f700" />


3️⃣ Dashboard – Intern View

Interns can view their assigned tasks and update the status.
<img width="1277" height="541" alt="Screenshot 2025-09-04 171430" src="https://github.com/user-attachments/assets/6b2dc0e4-0f66-45bd-9718-1c7120d37ec6" />


4️⃣ Dashboard – Manager View

Managers can create tasks, delete tasks, and view all interns.
<img width="376" height="507" alt="Screenshot 2025-09-04 171536" src="https://github.com/user-attachments/assets/51b7b47e-67eb-48ee-979f-9085051aeaf4" />


5️⃣ Interns List Page

Managers can view all registered interns and their details.
<img width="388" height="246" alt="Screenshot 2025-09-04 172127" src="https://github.com/user-attachments/assets/26e0c7b9-1834-430d-abba-fecc1514986f" />



---

## Screenshots

### 1️⃣ Login Page
Shows the login form for existing users (Interns & Managers).

![Login Page](https://res.cloudinary.com/dpiu7mohv/image/upload/v1756987484/Screenshot_2025-09-04_171553_ude3x3.png)

### 1️⃣ Login Page
Shows the login form for existing users (Interns & Managers).

![Login Page](## Screenshots

### 1️⃣ Login Page
Shows the login form for existing users (Interns & Managers).

![Login Page](https://github.com/user-attachments/assets/db2cebdd-8c2f-4628-b63a-fb0884515c5e)

### 2️⃣ Register Page
Allows new users to register as an Intern or Manager.

![Register Page](https://github.com/user-attachments/assets/29ff7a37-f436-4093-ad8b-ecb37cc7f700)

### 3️⃣ Dashboard – Intern View
Interns can view their assigned tasks and update the status.

![Dashboard Intern](https://github.com/user-attachments/assets/6b2dc0e4-0f66-45bd-9718-1c7120d37ec6)

### 4️⃣ Dashboard – Manager View
Managers can create tasks, delete tasks, and view all interns.

![Dashboard Manager](https://github.com/user-attachments/assets/51b7b47e-67eb-48ee-979f-9085051aeaf4)

### 5️⃣ Interns List Page
Managers can view all registered interns and their details.

![Interns List](https://github.com/user-attachments/assets/26e0c7b9-1834-430d-abba-fecc1514986f)

---)

### 2️⃣ Register Page
Allows new users to register as an Intern or Manager.

![Register Page](https://github.com/user-attachments/assets/29ff7a37-f436-4093-ad8b-ecb37cc7f700)

### 3️⃣ Dashboard – Intern View
Interns can view their assigned tasks and update the status.

![Dashboard Intern](https://github.com/user-attachments/assets/6b2dc0e4-0f66-45bd-9718-1c7120d37ec6)

### 4️⃣ Dashboard – Manager View
Managers can create tasks, delete tasks, and view all interns.

![Dashboard Manager](https://github.com/user-attachments/assets/51b7b47e-67eb-48ee-979f-9085051aeaf4)

### 5️⃣ Interns List Page
Managers can view all registered interns and their details.

![Interns List](https://github.com/user-attachments/assets/26e0c7b9-1834-430d-abba-fecc1514986f)

---)

### 2️⃣ Register Page
Allows new users to register as an Intern or Manager.

![Register Page](https://github.com/user-attachments/assets/29ff7a37-f436-4093-ad8b-ecb37cc7f700)

### 3️⃣ Dashboard – Intern View
Interns can view their assigned tasks and update the status.

![Dashboard Intern](https://github.com/user-attachments/assets/6b2dc0e4-0f66-45bd-9718-1c7120d37ec6)

### 4️⃣ Dashboard – Manager View
Managers can create tasks, delete tasks, and view all interns.

![Dashboard Manager](https://github.com/user-attachments/assets/51b7b47e-67eb-48ee-979f-9085051aeaf4)

### 5️⃣ Interns List Page
Managers can view all registered interns and their details.

![Interns List](https://github.com/user-attachments/assets/26e0c7b9-1834-430d-abba-fecc1514986f)

---


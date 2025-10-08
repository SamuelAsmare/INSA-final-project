# TaskNest 📝

**TaskNest** is a full-stack task management web application that helps users organize, track, and prioritize their daily tasks efficiently. Users can add tasks with due dates, priorities (Low, Medium, High), titles, and descriptions. The application alerts users when deadlines are approaching and allows them to mark or delete completed tasks.  

Built using **React**, **Node.js**, **Express**, **MySQL**, **Firebase Authentication**, and **Plain CSS**, TaskNest is designed to provide a smooth and responsive experience on both desktop and mobile devices.  

---

## Table of Contents

1. [Project Overview](#project-overview)  
2. [Key Features](#key-features)  
3. [Tech Stack](#tech-stack)  
4. [Screenshots](#screenshots)  
5. [Installation](#installation)  
6. [Usage](#usage)  
7. [System Architecture](#system-architecture)  
8. [Future Enhancements](#future-enhancements)  
9. [License](#license)  

---

## Project Overview

TaskNest is designed for productivity enthusiasts, students, and professionals who want to manage their time efficiently. The main idea is to provide a **simple, user-friendly interface** while maintaining powerful backend functionality for task storage, notifications, and secure authentication.  

**Goals of TaskNest:**  
- Allow users to efficiently create, track, and delete tasks  
- Alert users of upcoming deadlines  
- Provide a clean and responsive user interface  
- Ensure data security and privacy with Firebase Authentication  

---

## Key Features

- **User Authentication:** Secure sign-up and login using Firebase.  
- **Task Management:**  
  - Add tasks with title, description, priority, and due date  
  - View all active tasks in a list  
  - Delete completed tasks  
  - Get alerts when tasks are nearing their deadlines  
- **Priority Levels:** Categorize tasks as Low, Medium, or High priority.  
- **Responsive Design:** Works seamlessly on desktops, tablets, and mobile devices.  
- **Full-Stack Implementation:** React frontend communicates with Node.js/Express backend using REST APIs, storing data in MySQL.  

---

## Tech Stack

| Layer           | Technology                  |
|-----------------|-----------------------------|
| Frontend        | React, Plain CSS            |
| Backend         | Node.js, Express.js         |
| Database        | MySQL                       |
| Authentication  | Firebase Authentication     |
| Notifications   | Browser-based alerts        |
| Deployment      | Netlify (Frontend), Optional Node Hosting for Backend |

---

## Screenshots

> Replace these with actual screenshots from your project  

**Dashboard:**  
![Dashboard](./screenshots/dashboard.png)  

**Add Task Form:**  
![Add Task](./screenshots/add-task.png)  

**Notifications:**  
![Notification](./screenshots/notification.png)  

---

## Installation

1. **Clone the Repository**  

```bash
git clone https://github.com/your-username/tasknest.git
cd tasknest

##  Install Backend Dependencies
bash
```
npm install
```

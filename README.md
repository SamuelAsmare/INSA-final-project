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
 
**Home page:**
<img width="1892" height="873" alt="image" src="https://github.com/user-attachments/assets/d5216cc7-8a1b-435b-bd5c-161b811803e7" />
<img width="1906" height="629" alt="image" src="https://github.com/user-attachments/assets/7979ac64-a3b8-4282-ae76-f4efdddff2b4" />
<img width="1891" height="409" alt="image" src="https://github.com/user-attachments/assets/9b8ac587-7138-4274-af05-3a4cf1b592ff" />








**Dashboard:**  

<img width="1894" height="871" alt="image" src="https://github.com/user-attachments/assets/9a6c4125-b569-4707-9de9-7e7f24167b18" />
<img width="1879" height="624" alt="image" src="https://github.com/user-attachments/assets/e9e5f9f1-f9d9-45ff-9cad-963610bf45ae" />
<img width="1889" height="629" alt="image" src="https://github.com/user-attachments/assets/7c18a92e-b9da-41bd-93a6-2d781c149bde" />




 

**Add Task Form:**  
<img width="1894" height="846" alt="image" src="https://github.com/user-attachments/assets/b4381b59-a74a-4e9c-af23-f489d2cabdca" />


---

## Installation

1. **Clone the Repository**  

```bash
git clone https://github.com/SamuelAsmare/tasknest.git
cd tasknest
```

## Install Backend Dependencies

```bash
npm install
```

## Start Backend Server
```bash
node server.js
```


## Install Frontend Dependencies and Start Frontend
```bash
cd client
npm install
npm start
```

### Open this to view the app locally 

```bash http://localhost:3000 ```

## Usage

Sign up or log in with your email account.

Add tasks using the Add Task form (title, description, priority, due date).

View all tasks in the dashboard.

Delete tasks once completed.

Get alerted when tasks are approaching their deadlines.

# System Architecture

**Frontend**: React components with state management for handling tasks, notifications, and authentication.

**Backend**: Node.js with Express REST APIs for task CRUD operations and user authentication.

**Database**: MySQL database storing user accounts and task data.

**Authentication**: Firebase ensures secure login and account management.

**Notifications**: Browser-based notifications alert users of upcoming tasks.

## Flow:

**User <--> React Frontend <--> Express APIs <--> MySQL Database**

## Future Enhancements

Drag-and-drop task reordering

Dark mode / light mode toggle

Task categories and tags

Real-time collaboration for multiple users

Email/SMS notifications for due tasks

Integration with calendar apps

## License

This project is licensed under the MIT License – feel free to use, modify, and distribute.

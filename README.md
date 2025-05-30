Here’s a short and clean project note for your **Admin Authentication System** using **MERN Stack**:

---

## 📝 Project: Admin Authentication System (MERN Stack)

### 📌 Overview

A simple MERN-based admin login system that uses JWT for secure authentication. It features a protected dashboard and login screen with session handling via localStorage.

---

### 🧩 Tech Stack

* **Frontend:** React, React Router
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose ODM)
* **Authentication:** JSON Web Tokens (JWT)
* **Styling:** Custom CSS

---

### 🔐 Features

* Admin login with hashed password
* JWT token-based authentication
* Protected dashboard route
* Logout functionality
* Middleware to validate token
* MongoDB schema for Admin user

---

### 🛠 Setup Instructions

#### 📦 Backend

1. Install dependencies:

   ```bash
   npm install
   ```
2. Create `.env` file:

   ```
   MONGODB_URI=mongodb://127.0.0.1:27017/admin-auth
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```
3. Create an admin:

   ```bash
   node createAdmin.js
   ```
4. Start server:

   ```bash
   npm start
   ```

#### 🌐 Frontend

1. Install dependencies:

   ```bash
   npm install
   ```
2. Start app:

   ```bash
   npm run dev
   ```
3. Navigate to: `http://localhost:5173`

---

### 👤 Default Admin Credentials

```bash
Email: admin@example.com
Password: admin123
```

---

Let me know if you want a version of this note in **PDF**, **Markdown**, or for a **README.md** file!

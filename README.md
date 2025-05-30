# 🗳 Real-Time Polling App

A full-stack real-time polling web app built using **React**, **Express**, **Socket.IO**, and **MongoDB**. Users can create polls, vote in real time, and see live result updates via a bar chart.

---

## 📁 Project Structure

```

polling-app/
├── client/ # React frontend (Vite)
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ │ ├── CreatePoll.jsx
│ │ │ ├── PollList.jsx
│ │ │ ├── VoteForm.jsx
│ │ │ └── ResultsChart.jsx
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ └── styles.css
│ ├── package.json
│ └── vite.config.js
├── server/ # Express + Socket.IO backend
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── server.js
│ └── package.json
└── .gitignore

```

---

## 🚀 Features

- ✅ Create custom polls with multiple options
- 🗳 Vote on polls with your name
- 📊 Live vote results using **Chart.js**
- ⚡ Real-time updates powered by **Socket.IO**
- 💅 Responsive and modern UI

---

## 🛠️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/polling-app.git
cd polling-app
```

### 2. Install backend dependencies

```bash
cd server
npm install
```

### 3. Install frontend dependencies

```bash
cd ../client
npm install
```

---

## 🧪 Run the App

### Start the backend server (Port: 5000)

```bash
cd server
npm start
```

Make sure MongoDB is running locally or set `MONGO_URI` in `.env`.

### Start the frontend dev server (Port: 3000)

```bash
cd ../client
npm run dev
```

Visit: **[http://localhost:3000](http://localhost:3000)**

---

## ⚙️ Technologies Used

- **Frontend:** React, Vite, Chart.js, Socket.IO Client
- **Backend:** Express, MongoDB, Mongoose, Socket.IO
- **Other:** Axios, Vite Proxy, CORS

---

## 🧹 To Do

- [ ] User authentication
- [ ] Poll expiration logic
- [ ] Admin dashboard
- [ ] Mobile-first polish

---

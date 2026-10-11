# PlacementProject 🚀

A full-stack placement and job management web application built using the MERN stack. The project provides a platform for users to explore job opportunities and manage job-related activities through a web interface.

- **GitHub Repository:** https://github.com/DhananjayMallik/PlacementProject

## 🛠️ Tech Stack

**Frontend**
- React.js
- Vite
- React Router
- Axios
- React Icons
- React Hot Toast

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt
- Cookie Parser
- Cloudinary
- Express File Upload

## ✨ Key Features

- User-related operations and account management
- Job listing and management APIs
- Job application management
- JWT-based authentication support
- Password hashing using bcrypt
- Cloudinary integration for media handling
- REST API architecture
- React-based frontend with client-side routing

## 📁 Project Structure

```text
PlacementProject/
├── backend/
│   ├── config/
│   ├── database/
│   ├── middlewares/
│   ├── routes/
│   ├── app.js
│   └── server.js
│
├── frontned/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

> Note: The frontend folder is currently named `frontned` in the repository.

## ⚙️ Installation and Setup

### Prerequisites

- Node.js and npm
- MongoDB database
- Cloudinary account if using media upload features
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/DhananjayMallik/PlacementProject.git
cd PlacementProject
```

### 2. Set Up the Backend

```bash
cd backend
npm install
```

Create the environment configuration file expected by the backend and add the required environment variables.

Example:

```env
PORT=4000
FRONTNED_URL=http://localhost:5173
```

Also configure the MongoDB connection, JWT secret, and Cloudinary credentials using the exact variable names expected by your source code.

Start the backend:

```bash
npm run dev
```

Alternatively, use `npm start` if you prefer the production start script.

### 3. Set Up the Frontend

Open a new terminal:

```bash
cd frontned
npm install
npm run dev
```

Open the local URL displayed by Vite, usually:

```text
http://localhost:5173
```

Configure the frontend API base URL to match your local backend address and the environment variable used in your frontend code.

## 🔗 Backend API Routes

The backend organizes its APIs using the following route prefixes:

| Module | Base Route |
|---|---|
| User | `/api/v1/user` |
| Job | `/api/v1/job` |
| Application | `/api/v1/application` |

Refer to the corresponding backend route files for specific endpoints, HTTP methods, request bodies, and responses.

## 🔐 Security

- Password hashing with bcrypt
- JWT-based authentication support
- Environment-based configuration
- CORS configuration for frontend-backend communication

**Important:** Never commit database credentials, JWT secrets, or Cloudinary API secrets to your public repository.

## 🚀 Future Enhancements

- Improve job search and filtering
- Add pagination for job listings
- Expand automated testing
- Improve API documentation
- Enhance validation and error handling
- Add more detailed loading and empty states

## 👨‍💻 Author

**Dhananjay Mallik**

- GitHub: https://github.com/DhananjayMallik

---

⭐ If you find this project interesting, feel free to explore the repository and share feedback.

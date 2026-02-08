# Charity Donation Platform (Full-Stack Web Application)

## Project Overview
The Charity Donation Platform is a full-stack web application that allows users to register, log in, browse charity organizations, search charities by keywords (for example: “hunger”), view detailed information about each charity, make donations, and view their personal donation history.

The project is built using Node.js, Express, MongoDB, and React. All user data, charities, and donations are stored in MongoDB. Authentication is handled using JSON Web Tokens (JWT), and passwords are securely hashed using bcrypt.

---

## Features
- User registration and login (JWT authentication)
- Secure password hashing with bcrypt
- Browse list of charity organizations
- Search charities by keywords
- Charity details page with images
- Make donations to charities
- View personal donation history (“My Donations”)
- Protected routes for authenticated users
- All data stored in MongoDB (users, charities, donations)

---

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcrypt
- dotenv
- CORS

### Frontend
- React (Vite)
- Axios
- React Router
- CSS / Tailwind (if applicable)

### Database
- MongoDB
- MongoDB Compass (for visualization)

---

## Project Structure

### Backend Structure
<img width="542" height="1586" alt="Снимок 09 02 2026 в 02 51 (1)" src="https://github.com/user-attachments/assets/334f6f8f-918c-42cd-b0a2-72115a64c6e9" />


### Frontend Structure
<img width="548" height="1644" alt="Снимок 09 02 2026 в 02 51 (2)" src="https://github.com/user-attachments/assets/3aead608-27ea-4051-94d1-4ca41ff2d507" />


---

## Database Structure

### Collections
- `users` – registered users (username, email, password, role)
- `charities` – charity organizations (name, description, city, tags)
- `donations` – user donations (user, charity, amount, message, date)

Database name:charity_donation
---

## API Documentation

### Authentication (Public)

#### Register
**POST** `/register`  
Body:
```json
{
  "username": "Aldik",
  "email": "aldik@gmail.com",
  "password": "120606"
}

Login
POST /login
Body:
{
  "email": "aldik@gmail.com",
  "password": "120606"
}

Returns JWT token.

User (Private – JWT required)

Header:
Authorization: Bearer <token>
Get Profile
GET /users/profile

Update Profile
PUT /users/profile
Body:
{
  "username": "NewName",
  "email": "newemail@example.com"
}

Charities (Public)

Get All Charities
GET /charities
Optional query:
/charities?search=hunger
Get Charity Details
GET /charities/:id

Donations (Private – JWT required)

Create Donation
POST /donations
Body:
{
  "charityId": "charity_id_here",
  "amountKZT": 5000,
  "message": "Hope this helps"
}

Get My Donations
GET /donations/mine

Local Setup Instructions

1. Clone Repository
git clone <your-github-repo-url>
cd charity-donation

2. Backend Setup
cd backend
npm install

Create .env file in backend/: ;3


Run backend:
npm run dev


Seed charities:
npm run seed

Backend URL:
http://127.0.0.1:5050

3. Frontend Setup
cd frontend
npm install
npm run dev

Frontend URL:
http://localhost:5173

Deployment

The backend is deployed on Render.

Deployment URL:
<PUT YOUR RENDER BACKEND URL HERE>

MongoDB Atlas is used for production database. Sensitive data such as database credentials and JWT secrets are stored in environment variables.

Screenshots

(Add screenshots of the following pages)
	•	Home page
	•	Login / Register
	•	Charities list
	•	Charity details
	•	Donation form
	•	My Donations page


Author

Final Project – Full-Stack Web Development

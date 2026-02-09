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
  <img width="3420" height="2214" alt="Снимок 09 02 2026 в 06 38" src="https://github.com/user-attachments/assets/b572e48e-b96d-4df8-9c60-97a875e29987" />

- `charities` – charity organizations (name, description, city, tags)
  <img width="3420" height="2214" alt="Снимок 09 02 2026 в 06 38 (1)" src="https://github.com/user-attachments/assets/0cd7a574-082a-4ee1-9571-6f80ddfa0a6d" />

- `donations` – user donations (user, charity, amount, message, date)
  <img width="3420" height="2214" alt="Снимок 09 02 2026 в 06 39" src="https://github.com/user-attachments/assets/b7c71ac2-3b28-4540-95a8-8b04a33d8099" />


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
```
---
###Login
POST /login
Body:
```
{
  "email": "aldik@gmail.com",
  "password": "120606"
}
```
Returns JWT token.

User (Private – JWT required)

Header:
Authorization: Bearer <token>
```
Get Profile
GET /users/profile
```
Update Profile
PUT /users/profile
Body:
```
{
  "username": "NewName",
  "email": "newemail@example.com"
}
```

Charities (Public)

Get All Charities
```
GET /charities
```
Optional query:
```
/charities?search=hunger
Get Charity Details
GET /charities/:id
```
Donations (Private – JWT required)

Create Donation
POST /donations
Body:
```
{
  "charityId": "charity_id_here",
  "amountKZT": 5000,
  "message": "Hope this helps"
}
```
Get My Donations
```
GET /donations/mine
```
Local Setup Instructions

1. Clone Repository
git clone <your-github-repo-url>
cd charity-donation

2. Backend Setup
cd backend
npm install

Create .env file in backend/: ;3


Run backend:
```
npm run dev
```

Seed charities:
```
npm run seed
```
Backend URL:
```
http://127.0.0.1:5050
```
3. Frontend Setup
```
cd frontend
npm install
npm run dev
```
Frontend URL:
```
http://localhost:5173
```
Deployment

The backend is deployed on Render.

Deployment URL:
https://charity-donation-k1fx.onrender.com

MongoDB Atlas is used for production database. Sensitive data such as database credentials and JWT secrets are stored in environment variables.

Screenshots

	•	Home page
<img width="3420" height="2214" alt="Снимок 09 02 2026 в 03 55 (1)" src="https://github.com/user-attachments/assets/8aa55350-4f8a-4900-ac1f-5675fe4958df" />

	•	Login / Register
<img width="3420" height="2214" alt="Снимок 09 02 2026 в 03 55 (2)" src="https://github.com/user-attachments/assets/8b4decc5-0b84-4659-b723-d66f0a98e39b" />

<img width="3420" height="2214" alt="Снимок 09 02 2026 в 03 55 (3)" src="https://github.com/user-attachments/assets/cd7ae984-cb2f-4e9a-932f-bbf099f7961c" />

	•	Charities list
<img width="3420" height="2214" alt="Снимок 09 02 2026 в 03 56" src="https://github.com/user-attachments/assets/9b752143-2d8e-48a3-aabf-e2536d61d1e4" />

	•	Charity details
<img width="3420" height="2214" alt="Снимок 09 02 2026 в 03 56 (1)" src="https://github.com/user-attachments/assets/f1f98883-33aa-4eb2-862a-b92e12b60082" />

<img width="3420" height="2214" alt="Снимок 09 02 2026 в 03 57" src="https://github.com/user-attachments/assets/55e4dc64-ecb0-4de6-9186-bfc929e7366b" />

<img width="3420" height="2214" alt="Снимок 09 02 2026 в 03 57 (1)" src="https://github.com/user-attachments/assets/4b4eea16-63b3-4c64-ad7b-1f1cef0eb010" />

	•	Donation form
<img width="3420" height="2214" alt="Снимок 09 02 2026 в 03 57" src="https://github.com/user-attachments/assets/743db7ed-819b-4222-8140-d729bf86ae2d" />

	•	My Donations page
<img width="3420" height="2214" alt="Снимок 09 02 2026 в 03 57 (1)" src="https://github.com/user-attachments/assets/c30f64f7-685f-41f2-859a-91607de87795" />



Author: Amanzhol Aldiyar, Kalzhanov Zhansultan

Final Project – Full-Stack Web Development

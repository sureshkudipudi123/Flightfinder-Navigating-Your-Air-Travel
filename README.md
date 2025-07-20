# ✈️ Flight Booking App

A full-stack flight booking system with user, admin, and operator roles.

GitHub Repo: [Flightfinder – Navigating Your Air Travel](https://github.com/sureshkudipudi123/Flightfinder-Navigating-Your-Air-Travel)  
Project Owner: [suryakudipudi631@gmail.com](mailto:suryakudipudi631@gmail.com)

---

## 🧰 Tech Stack

- **Frontend**: React, React Router, Axios  
- **Backend**: Express.js, MongoDB, Mongoose  
- **Authentication**: JWT (JSON Web Tokens)  
- **Styling**: Basic HTML/CSS (optionally extendable using Tailwind or Bootstrap)

---

## 📁 Folder Structure

FlightBookingApp/
├── client/ # React Frontend
├── server/ # Express + MongoDB Backend
└── README.md

yaml
Copy
Edit

---

## ⚙️ How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/sureshkudipudi123/Flightfinder-Navigating-Your-Air-Travel
cd Flightfinder-Navigating-Your-Air-Travel
2. Install Dependencies
Backend
bash
Copy
Edit
cd server
npm install
Frontend
bash
Copy
Edit
cd ../client
npm install
3. Setup Environment Variables
Create a .env file inside /server:

env
Copy
Edit
PORT=5000
MONGO_URI=mongodb://localhost:27017/flightapp
JWT_SECRET=your_jwt_secret_key
Ensure MongoDB is running locally or replace MONGO_URI with your MongoDB Atlas URI.

4. Run the App
Start Backend
bash
Copy
Edit
cd server
npm run dev
Start Frontend
bash
Copy
Edit
cd ../client
npm start
🧪 Test Credentials
Admin:

makefile
Copy
Edit
username: admin
password: admin123
User:

makefile
Copy
Edit
username: user1
password: user123
Or register a new user via the registration form.

📌 Features
👤 User
Register & Login

Search for Flights

Book Flights

View & Cancel Bookings

🛠️ Admin
Add / Update / Delete Flights

View All Flights, Bookings, and Users

📷 Screenshots (Optional)
Add screenshots of:

Login Page

Flight Search & Booking

Admin Dashboard

📩 Backend Reference
Implementation logic inspired from:
Reference Video: Google Drive Link

✅ Future Enhancements
✉️ Email Confirmations

💳 Payment Gateway Integration

🧑‍💼 Role-Based Dashboards

🎨 Improved UI/UX with Tailwind or Bootstrap

📝 License
This project is developed for educational/demo purposes only.
All code is open to extend, adapt, and modify based on your needs.

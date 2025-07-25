📦 Inventory Management Tool
A full-stack Inventory Management Application for small businesses. Built with:

Backend: Node.js, Express, MongoDB

Frontend: React, Tailwind CSS

Features: JWT Auth, product inventory management, API docs, Dockerized setup

✨ Features
🔐 Secure REST API with JWT Authentication

🧾 Full CRUD for products

📄 Pagination support

📘 OpenAPI/Swagger documentation

🐳 Docker Compose for one-command startup

🧪 Postman collection and automated test script

🚀 Quick Start
1. Clone the Repo
bash
Copy code
git clone https://github.com/YOUR-USERNAME/inventory-management-tool.git
cd inventory-management-tool
2. Backend Setup
bash
Copy code
cd inventory-backend
cp .env.example .env        # Edit .env with your own values
npm install
npm run dev                 # Or: npm start
3. Frontend Setup
bash
Copy code
cd ../inventory-frontend
npm install
npm start
4. Run with Docker (Recommended)
At repo root (requires Docker Desktop):

bash
Copy code
docker-compose up --build
Frontend: http://localhost:3000

Backend API: http://localhost:8080

Swagger Docs: http://localhost:8080/api-docs

🗄️ Environment Variables
Backend .env.example
env
Copy code
MONGO_URI=mongodb://mongo:27017/inventory-db
JWT_SECRET=your-very-strong-secret
PORT=8080
Make sure to update .env with your production or development values.

🔑 API Authentication
Register → POST /register

Login → POST /login (returns access_token as JWT)

Use JWT token in protected requests:

makefile
Copy code
Authorization: Bearer <token>
📚 API Documentation
Swagger UI: http://localhost:8080/api-docs

Contains all endpoints, schemas, and request/response details.

📬 Postman Collection
File: FiMoney.postman_collection.json (at repo root)

Usage:
Import into Postman

Use /login to obtain JWT

Set JWT as Bearer Token in Authorization header

🧪 Automated API Test Script
File: test_api.py

Requirements
Python 3.6+

requests library

Run Test
bash
Copy code
pip install requests
python test_api.py
Tests include: registration, login, product creation, update, and listing.

🏗️ Database Initialization
MongoDB collections auto-create on first run via Mongoose models.

Optionally, you can create a seeds.js in inventory-backend/ to populate initial data.

Or use the API endpoints manually to register, login, and add products.

🗂️ Project Structure
bash
Copy code
.
├── inventory-backend/         # Express API, MongoDB models, routes, Swagger
├── inventory-frontend/        # React + Tailwind frontend
├── test_api.py                # API test script
├── FiMoney.postman_collection.json  # Postman collection
├── README.md                  # This file
└── seeds.js (optional)        # Optional DB seeder
🐳 Docker Usage
bash
Copy code
docker-compose up --build
Frontend: http://localhost:3000

Backend API: http://localhost:8080

MongoDB: mongodb://localhost:27017

Stop containers with:

bash
Copy code
docker-compose down
🛡️ Troubleshooting
Problem	Solution
Cannot connect to API	Ensure backend is running and correct port is used
MongoDB connection error	Check .env and confirm MongoDB service is up
CORS error in frontend	Backend includes proper CORS middleware
Test script fails	Check backend logs and confirm endpoints are functional
Postman 401 Unauthorized	Make sure JWT is correctly set in Authorization header

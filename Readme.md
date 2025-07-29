# 💰 FiMoney - Inventory Management Tool

A **full-stack Inventory Management Application** designed for small businesses.

---

## 🏗️ Tech Stack
- **Backend**: Node.js, Express, MongoDB (Mongoose)
- **Frontend**: React, Tailwind CSS
- **Auth**: JWT (JSON Web Token)
- **Docs**: Swagger/OpenAPI (`/api-docs`)
- **DevOps**: Docker, Docker Compose

---

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR-USERNAME/FiMoney.git
cd FiMoney
```

### 2. Backend Setup
```bash
cd inventory-backend
cp .env.example .env   # Edit .env with your own values
npm install
npm run dev            # Or: npm start
```

#### `.env.example`
```
MONGO_URI=mongodb://mongo:27017/inventory-db
JWT_SECRET=your-very-strong-secret
PORT=8080
```

### 3. Frontend Setup
```bash
cd ../inventory-frontend
npm install
npm start
```

### 4. Running Everything with Docker (Recommended)
At the project root:
```bash
docker-compose up --build
```

- **Frontend**: [http://localhost:3000](http://localhost:3000)  
- **Backend API**: [http://localhost:8080](http://localhost:8080)  
- **Swagger Docs**: [http://localhost:8080/api-docs](http://localhost:8080/api-docs)  

---

## ✉️ Environment Variables
Configure environment variables for backend and frontend using `.env.example` files in respective folders.  
Edit `.env` with your actual values before running.

---

## 🔑 API Authentication

- **Register**: `POST /register` (No auth required)  
- **Login**: `POST /login` (returns JWT as `access_token`)  

### Protected Requests:
Add header:
```
Authorization: Bearer <token>
```

---

## 📚 API Documentation
- **Swagger UI**: [http://localhost:8080/api-docs](http://localhost:8080/api-docs)  
- Interactive endpoint docs with "Try it out" / "Execute" support.  
- Includes request/response schemas, status codes, and JWT usage.

---

## 📬 Postman Collection
- **File**: `FiMoney.postman_collection.json` (at repo root)  

### Usage:
1. Import into Postman.  
2. Use `/login` to obtain a JWT.  
3. For protected endpoints, set `Authorization: Bearer <token>` in headers.  

---

## 📂 API Routes & Functions

### Auth Routes
| Method | Endpoint   | Description        | Auth Required |
|--------|------------|---------------------|---------------|
| POST   | `/register`| Register a new user| ❌ No          |
| POST   | `/login`   | Login and get JWT  | ❌ No          |

### Product Routes (JWT REQUIRED)
| Method | Endpoint            | Description                 |
|--------|----------------------|-----------------------------|
| GET    | `/products`         | Get paginated list of products |
| POST   | `/products`         | Create a new product        |
| PUT    | `/products/{id}`    | Update a product            |
| DELETE | `/products/{id}`    | Delete a product            |
| PATCH  | `/products/{id}/qty`| Update product quantity only|
| GET    | `/products/{id}`    | Get a single product by ID  |

---

## 🧪 Automated API Test Script
- **File**: `test_api.py`

### Requirements:
- Python 3.6+  
- `requests` library  

### How to Run:
```bash
pip install requests
python test_api.py
```

Tests include user registration, login, product creation, updating quantity, and product listing.  
> Ensure backend is running before executing the tests.

---

## 🛠️ Database Initialization
- **Default**: Collections auto-created on first run via Mongoose schemas.  
- **Optional**:
  - Add sample data by creating a `seeds.js` in `inventory-backend/` and run it with Node.
  - Or use API/Postman to add products/users.

---

## 🗂️ Project Structure
```
.
├── inventory-backend/             # Express API, models, routes, Swagger config
├── inventory-frontend/            # React + Tailwind frontend
├── test_api.py                    # API test script
├── FiMoney.postman_collection.json# Postman collection
├── README.md                      # This file
└── seeds.js (optional)            # Optional DB seeder (for dev/test)
```

---

## 🐳 Docker Usage

### Start Full Stack:
```bash
docker-compose up --build
```

- **Frontend**: [http://localhost:3000](http://localhost:3000)  
- **Backend**: [http://localhost:8080](http://localhost:8080)  
- **MongoDB**: `mongodb://localhost:27017`  

### Stop All Services:
```bash
docker-compose down
```

---

## 🛡️ Troubleshooting

| Problem                    | Solution                                         |
|----------------------------|--------------------------------------------------|
| Cannot connect to API      | Ensure backend is running and correct port is used|
| MongoDB connection error   | Check `.env` and confirm MongoDB service is up    |
| CORS error in frontend     | Ensure backend has proper CORS middleware         |
| Test script fails          | Check backend logs; confirm endpoints work        |
| Postman 401 Unauthorized   | Ensure JWT is set in Authorization header         |
| "Site can't be reached"    | Ensure containers are running and ports mapped    |


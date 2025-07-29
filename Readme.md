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

## 🛠️ Database Initialization
- Collections are **auto-created** on first run via Mongoose schemas.  
- You can add products/users manually using the API or Postman.

---

## 🗂️ Project Structure
```
FIMONAEY/
├── inventory-backend/             # Express API, models, routes, Swagger config
├── inventory-frontend/            # React + Tailwind frontend
├── docker-compose.yml             # Docker Compose configuration
├── Dockerfile                     # Root Dockerfile (multi-stage build)
├── FiMoney.postman_collection.json# Postman collection
└── Readme.md                      # This file
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

## 🐋 Dockerfile (at Project Root)

The root contains a **multi-stage Dockerfile** that builds the React frontend and bundles it with the backend in a single container:

```dockerfile
# ==============================
# Stage 1: Build Frontend
# ==============================
FROM node:18-alpine AS frontend-build

WORKDIR /app/frontend
COPY inventory-frontend/package*.json ./
RUN npm install
COPY inventory-frontend/ ./
RUN npm run build

# ==============================
# Stage 2: Build Backend
# ==============================
FROM node:18-alpine AS backend

WORKDIR /app
COPY inventory-backend/package*.json ./inventory-backend/
RUN cd inventory-backend && npm install

# Copy backend source
COPY inventory-backend ./inventory-backend

# Copy built frontend into backend's public directory
COPY --from=frontend-build /app/frontend/dist ./inventory-backend/public

WORKDIR /app/inventory-backend
EXPOSE 8080
CMD ["npm", "start"]
```

### Build & Run with Dockerfile:
```bash
docker build -t fimoney .
docker run -p 8080:8080 fimoney
```

---

## 🛡️ Troubleshooting

| Problem                    | Solution                                         |
|----------------------------|--------------------------------------------------|
| Cannot connect to API      | Ensure backend is running and correct port is used|
| MongoDB connection error   | Check `.env` and confirm MongoDB service is up    |
| CORS error in frontend     | Ensure backend has proper CORS middleware         |
| Postman 401 Unauthorized   | Ensure JWT is set in Authorization header         |
| "Site can't be reached"    | Ensure containers are running and ports mapped    |

---
✅ **FiMoney is ready to use!** 🚀

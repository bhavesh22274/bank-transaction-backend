# 🏦 Bank Transaction Backend

A backend system for handling **user authentication, bank accounts, transactions, and ledger-based balance management** using Node.js, Express.js, and MongoDB.

This project is being built as a learning-focused backend project to understand how real-world banking systems handle **authentication, transactions, idempotency, ledger entries, balance calculation, and transaction states**.

---

## 🚀 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **JWT (JSON Web Token)**
- **bcrypt**
- **Cookie-based Authentication**
- **Nodemailer**
- **Postman**
- **Git & GitHub**

---

## 📌 Current Features

### Authentication

- [x] User Registration
- [x] Email Validation
- [x] Password Hashing using bcrypt
- [x] Password Comparison
- [x] User Login
- [x] JWT Authentication
- [x] HTTP-only Cookies
- [x] Authentication Middleware

### Email

- [x] Registration Email
- [x] Transaction Notifications

### Bank Account

- [x] Account Model
- [x] Account APIs
- [x] Account Status Validation

### Transactions

- [x] Transaction Model
- [x] Transaction Controller
- [x] Create Transaction API
- [x] Pending Transaction State
- [x] Idempotency Validation

### Ledger & Balance

- [x] Ledger Model
- [x] Ledger Entries
- [x] Balance Calculation using MongoDB Aggregation Pipeline
- [x] Balance API

### Security

- [x] Blacklist Model
- [x] Logout API

### Deployment

- [x] Production Deployment

---

## 📂 Project Structure

```text
bank-transaction-backend/
│
├── controllers/
│
├── models/
│
├── routes/
│
├── middleware/
│
├── config/
│
├── utils/
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

> The project structure may evolve as development continues.

---

## 🔐 Authentication Flow

The authentication system follows this basic flow:

```text
User
 │
 ├── Register
 │      ↓
 │   Validate Data
 │      ↓
 │   Hash Password
 │      ↓
 │   Save User
 │
 └── Login
        ↓
    Verify Password
        ↓
    Generate JWT
        ↓
    Store JWT in Cookie
```

---

## 🏦 Banking System Flow

The planned transaction flow is:

```text
User
  ↓
Account
  ↓
Transaction Request
  ↓
Validation
  ↓
Idempotency Check
  ↓
Account Status Check
  ↓
Balance Check
  ↓
Pending Transaction
  ↓
Ledger Entry
  ↓
Transaction Completed
```

---

## 💰 Ledger-Based Balance

Instead of relying only on a manually stored balance, the project uses ledger entries to derive account balance.

Conceptually:

```text
Ledger Entries
      ↓
MongoDB Aggregation
      ↓
Calculate Balance
      ↓
Return Current Balance
```

This helps demonstrate how transaction records can be used as the source for calculating account balances.

---

## 🔁 Idempotency

The transaction system will use **idempotency validation** to prevent the same transaction request from being processed multiple times.

For example:

```text
Request #123
     ↓
Transaction created
     ↓
Same Request #123 again
     ↓
Already processed
     ↓
Do not create duplicate transaction
```

---

## 🛠️ Installation & Setup

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate into the project

```bash
cd bank-transaction-backend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create `.env`

Create a `.env` file in the root directory.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Add any additional environment variables required by the project.

### 5. Start the development server

```bash
npm run dev
```

---

## 🧪 API Testing

The APIs are tested using **Postman**.

Authentication APIs currently include:

```text
POST /api/register
POST /api/login
```

Additional account and transaction APIs will be added as development continues.

---

## 🔒 Environment Variables

Sensitive information such as:

- MongoDB credentials
- JWT secret
- Email credentials
- API keys

should be stored inside `.env` and **must not be committed to GitHub**.

The `.env` file is excluded using `.gitignore`.

---

## 📈 Project Progress

This project is being developed incrementally.

## 🎯 Learning Objectives

Through this project, I aim to understand and implement:

- REST API development
- Authentication & Authorization
- JWT and cookies
- Password security
- MongoDB schema design
- Banking account modeling
- Transaction processing
- Ledger systems
- Idempotency
- Transaction states
- MongoDB aggregation pipelines
- Middleware
- Email notifications
- API testing
- Backend deployment

---

## 🔮 Future Improvements

Possible future improvements include:

- Improved transaction validation
- Better error handling
- Request validation
- Rate limiting
- Transaction history APIs
- Pagination
- Role-based authorization
- Redis integration
- Event-driven transaction notifications
- Improved logging and monitoring
- Automated testing

---

## 👨‍💻 Author

**Bhavesh Singh**

B.Tech CSE (AIML)

---

## ⭐ Project Status

🚧 **Currently in development**

This project is being built step-by-step while learning advanced backend development concepts.

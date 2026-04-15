# 💼 Salary Management API (TDD + Sequelize)

A production-ready REST API for managing employees and salary insights, built using **Node.js, Express, Sequelize (SQLite)** with a strict **Test-Driven Development (TDD)** approach.

---

# 🚀 Features

### 👤 Employee Management

- Create employee
- Get all employees with server side pagination
- Get employee by ID
- Update employee
- Delete employee
- Enforced **unique fullName**

---

### 💰 Salary Calculation

- Calculate net salary based on country rules:
  - 🇮🇳 India → 10% deduction
  - 🇺🇸 United States → 12% deduction
  - 🌍 Others → No deduction

---

### 📊 Salary Metrics

- Country-based metrics:
  - Minimum salary
  - Maximum salary
  - Average salary

- Job title-based metrics:
  - Average salary

---

# 🏗️ Tech Stack

- Node.js
- Express.js
- Sequelize ORM
- SQLite
- Jest (Testing)
- Supertest (API Testing)
- Joi (Validation)

---

# 📁 Project Structure

```
src/
 ├── app.js
 ├── server.js
 ├── routes/
 │     └── employee.routes.js
 │     └── metrics.routes.js
 ├── controllers/
 │     └── employee.controller.js
 │     └── metrics.controller.js
 ├── services/
 │     └── employee.service.js
 │     └── metrics.service.js
 ├── repositories/
 │     └── employee.repository.js
 ├── models/
 │     └── employee.model.js
 ├── validations/
 │     └── employee.validation.js
 ├── database/
 │     └── db.js
tests/
```

---

# ⚙️ Setup Instructions

## 1. Install dependencies

```
npm install
```

## 2. Run tests

```
npm test
```

## 3. Start server

```
npm run dev
```

Server runs on:

```
http://localhost:3000
```

---

# 🧪 TDD Approach

This project follows strict **Test-Driven Development (TDD)**:

1. Write failing test ❌
2. Implement minimal code ✅
3. Refactor ♻️
4. Commit changes 🔁

### Commit Strategy

- Small, incremental commits
- Each feature follows:

  ```
  test → fail
  feat → pass
  refactor → improve
  ```

---

# 📡 API Endpoints

## 👤 Employee

### Create Employee

```
POST /employee
```

### Get All Employees

```
GET /employee
```

### Get Employee by ID

```
GET /employee/:id
```

### Update Employee

```
PUT /employee/:id
```

### Delete Employee

```
DELETE /employee/:id
```

---

## 💰 Salary

### Calculate Salary

```
GET /employee/:id/salary
```

### Response

```
{
  "gross": 50000,
  "deduction": 5000,
  "net": 45000
}
```

---

## 📊 Metrics

### Country Metrics

```
GET /metrics/country/:country
```

### Response

```
{
  "min": 100,
  "max": 300,
  "avg": 200
}
```

---

### Job Title Metrics

```
GET /metrics/job/:jobTitle
```

### Response

```
{
  "avg": 200
}
```

---

# ⚠️ Error Handling

- 400 → Validation errors (Joi)
- 404 → Resource not found
- 500 → Internal server errors

---

# 🧠 Design Decisions

- **Layered Architecture**
  - Controller → Service → Repository

- **Separation of concerns**
- **DB-level constraints (unique fullName)**
- **Joi validation for input safety**
- **Sequelize aggregation for metrics**

---

# 🏁 Final Notes

This project demonstrates:

- Strong TDD practices
- Clean architecture
- Real-world API design
- Proper error handling and validation

---

# 📬 Author

**Naeem A. Bobada**
Full Stack Developer
📧 [bobada.naeem@gmail.com](mailto:bobada.naeem@gmail.com)
📞 +91 9173291560

---

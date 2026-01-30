# Employee Management System  
Spring Boot + React.js

## 📌 Description
The **Employee Management System** is a **full-stack web application** developed using **Spring Boot** for the backend and **React.js** for the frontend.

The system allows complete employee management, providing full **CRUD operations (Create, Read, Update, Delete)** through a RESTful API integrated with a modern and responsive web interface.

This project was built focusing on **clean architecture, best practices, and frontend-backend integration**.

---

## 🛠️ Technologies Used

### Backend
- Java 17+
- Spring Boot
- Spring Data JPA
- Spring Web (REST API)
- Hibernate
- MySQL
- Maven

### Frontend
- React.js
- React Router DOM
- Axios
- Bootstrap
- JavaScript (ES6+)

---

## ⚙️ Features
- ✅ List all employees
- ✅ Add a new employee
- ✅ Update an existing employee
- ✅ Delete an employee
- ✅ Frontend form validation
- ✅ Backend exception handling
- ✅ REST API integration with React

---

## 🔗 API Endpoints (Backend)
| Method | Endpoint | Description |
|------|---------|------------|
| GET | `/api/employees` | Retrieve all employees |
| GET | `/api/employees/{id}` | Retrieve employee by ID |
| POST | `/api/employees` | Create a new employee |
| PUT | `/api/employees/{id}` | Update an employee |
| DELETE | `/api/employees/{id}` | Delete an employee |

---

## 🗄️ Database Configuration

Edit the `application.properties` file:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/employee_db
spring.datasource.username=your_username
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
```

---

### Backend (Spring Boot)
```
git clone https://github.com/brunowill-code/Employee-Management-System-Spring-Boot-ReactJS.git
cd backend
mvn spring-boot:run
```
### FrontEnd(ReactJS)
```
cd frontend
npm install
npm start
```

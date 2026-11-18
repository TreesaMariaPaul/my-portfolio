# My Digital Portfolio

## 1. Project Overview

Welcome to my personal digital portfolio.

This portfolio is a web application developed to showcase my academic background, professional knowledge, technical skills, projects, interests and learning experiences as a Software Engineering student.

The application uses React for the frontend and Django REST Framework for backend functionality. PostgreSQL is used to store blog posts and contact messages.

## 2. About Me

Hello! I am Treesa Maria Paul, a Software Engineering student at the University of Limerick, Ireland.

I am interested in software development, programming and emerging technologies. I enjoy learning new technologies and developing projects that improve my technical and problem-solving skills.

## 3. Education

**MSc Software Engineering**
- University of Limerick, Ireland
- 2026–2027

**Bachelor of Computer Applications (BCA)**
- SCMS School of Technology and Management, India
- 2022–2025

## 4. Professional Knowledge

The portfolio presents my knowledge and experience in areas including:

- C++
- HTML
- CSS
- JavaScript
- PHP
- MySQL
- Django
- React
- Node.js
- Java

I continue to develop my technical knowledge through academic work, projects and practical learning.

## 5. Portfolio Features

The application includes:

- Home page introducing the portfolio.
- About page presenting personal information and interests.
- Education page displaying academic qualifications.
- Professional Knowledge page highlighting technical skills.
- Picture Gallery displaying selected images.
- Video Gallery presenting multimedia content.
- Blog section retrieving posts from the backend API.
- Blog pagination for navigating between posts.
- Contact form allowing visitors to submit messages.
- Backend storage of contact messages.
- Token-based authentication for protected blog management operations.
- Reusable React components.
- Custom 404 Not Found page.
- Responsive layouts for different screen sizes.
- Readme page documenting the application.

## 6. Technologies Used

### Frontend
- React
- JavaScript
- HTML5
- CSS3
- Vite
- React Router

### Backend
- Python
- Django
- Django REST Framework
- Django REST Framework Token Authentication

### Database
- PostgreSQL

### Testing
- Vitest
- React Testing Library
- Jest DOM
- jsdom
- Thunder Client for manual API testing

## 7. Project Structure

The project is organised into separate frontend and backend directories.

```text
my-portfolio/
│
├── backend/
│   ├── blog/
│   ├── contact/
│   ├── config/
│   ├── manage.py
│   ├── requirements.txt
│   └── .env
│
├── public/
│   ├── images/
│   └── videos/
│
├── src/
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── Navbar.jsx
│   │   └── PageNavigation.jsx
│   │
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Home.jsx
│   │   ├── ProfessionalKnowledge.jsx
│   │   ├── Readme.jsx
│   │   ├── PictureGallery.jsx
│   │   ├── VideoGallery.jsx
│   │   └── NotFound.jsx
│   │
│   ├── test/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## 8. Backend Functionality

The Django backend provides REST API endpoints for communication with the React frontend.

### Blog API

The blog API retrieves published blog posts from the PostgreSQL database and provides blog management operations protected by authentication.

### Contact API

The contact API accepts visitor messages submitted through the portfolio contact form. Submitted messages are stored in PostgreSQL and can be viewed through Django Admin.

### Login API

The login API authenticates users and generates an authentication token. Token authentication is used to protect restricted blog management operations.

## 9. Database

PostgreSQL is used as the application's relational database.

The database stores:
- Blog posts.
- Contact messages.
- Authentication-related application data.

The Django backend communicates with PostgreSQL using its database configuration.

## 10. Installation and Setup

### Prerequisites

Install the following before running the project:

- Node.js and npm
- Python
- PostgreSQL

### Frontend Setup

Open a terminal in the main project directory.

Install the frontend dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal to access the portfolio.

### Backend Setup

Open another terminal and navigate to the backend directory:

```bash
cd backend
```

Create a Python virtual environment:

```bash
python -m venv venv
```

Activate the virtual environment in PowerShell:

```powershell
.\venv\Scripts\Activate.ps1
```

Install the backend dependencies:

```bash
pip install -r requirements.txt
```

Create a `.env` file in the backend directory and configure the PostgreSQL database connection using these variable names:

```text
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=localhost
DB_PORT=5432
```

Replace the example values with your own PostgreSQL database details. Do not commit real credentials to GitHub.

Run database migrations:

```bash
python manage.py migrate
```

Start the Django development server:

```bash
python manage.py runserver
```

The backend will be available at:

```text
http://127.0.0.1:8000/
```

## 11. Testing

### Frontend Testing

Vitest and React Testing Library were used to test frontend components and page functionality.

A total of **22 automated tests across 6 test files** passed.

The tests cover:
- Card component rendering.
- Navigation links.
- Page navigation.
- 404 Not Found page.
- Blog API retrieval and pagination.
- Contact form validation and submission behaviour.

To run the tests:

```bash
npm run test:run
```

### Backend API Testing

Thunder Client was used to perform manual API testing.

The following operations were tested successfully:

- Retrieving public blog posts.
- Submitting contact form messages.
- Confirming that contact messages are stored in the database.
- Authenticating users through the login API.
- Rejecting unauthenticated requests to protected blog management endpoints.
- Allowing authenticated requests using a valid token.

## 12. Future Improvements

Possible future enhancements include:

- Email notifications when a visitor submits a contact message.
- Additional automated backend tests.
- Improved security and deployment configuration.
- Further accessibility and usability improvements.
- Additional portfolio content and functionality.

## 13. Conclusion

This project demonstrates the development and evolution of a full-stack digital portfolio using React, Django REST Framework and PostgreSQL.

The application combines frontend development, backend API integration, database management, authentication and software testing. It also provides an opportunity to apply software engineering concepts and improve practical development skills.

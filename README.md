# My Portfolio

A React-based personal portfolio website created to present my academic background, professional knowledge, software engineering interests, learning experiences, and personal information.

## Portfolio Overview

This digital portfolio is developed using React and provides a structured way to showcase my academic journey, technical knowledge, software development interests, and learning experiences.

The portfolio uses a multi-page structure with consistent navigation, responsive layouts, reusable components, and custom styling.

The application was developed incrementally, allowing new pages, features, improvements, and design changes to be introduced throughout the development process.

---

## Portfolio Structure

The portfolio currently contains the following sections:

- **Home** – Introduction to the portfolio and an overview of my software engineering journey.
- **About** – Personal introduction, interests, goals, and areas of interest.
- **Education** – Academic background, BCA studies, and current postgraduate education.
- **Professional Knowledge** – Technical knowledge, programming skills, software development concepts, and technologies.
- **Blog** – A section for sharing learning experiences, technical topics, and software-related content.
- **Readme** – Project documentation describing the portfolio, technologies, development process, and software evolution.

---

## Technologies Used

- React
- JavaScript
- HTML
- CSS
- Vite
- React Router

### React

React is used to build the user interface through reusable components and individual pages.

### JavaScript

JavaScript provides the application functionality and interactive behaviour.

### HTML

HTML provides the structure of the application.

### CSS

CSS is used for styling, layouts, responsive design, hover effects, and visual presentation.

### Vite

Vite is used as the development and build tool for the React application.

### React Router

React Router is used to provide navigation between the different portfolio pages.

---

## Software Evolution

The portfolio was developed through an incremental software evolution process. The application was progressively modified, extended, reorganised, and improved as new requirements and ideas were introduced.

The development process can be represented through the following stages:

### 1. Initial Version

The initial portfolio structure and basic content were established as the starting point of the application.

### 2. Portfolio Pages

Individual sections such as Home, About, Education, Professional Knowledge, Blog, and Readme were introduced.

### 3. React Component Structure

The application was organised into React pages and reusable components to improve structure, readability, and maintainability.

### 4. React Router Navigation

React Router was introduced to provide structured navigation between the different portfolio pages.

### 5. Reusable Components

Common functionality such as the navigation bar and page navigation was separated into reusable React components.

### 6. Interactive Features

Interactive functionality was progressively introduced as new features were developed for the portfolio.

### 7. Visual and Responsive Improvements

The interface was progressively improved through responsive layouts, consistent styling, hover effects, navigation controls, and improved content presentation.

### 8. Current Portfolio

The current version combines multiple React pages, reusable components, structured navigation, responsive design, custom styling, and project documentation.

---

## Software Evolution Taxonomy

The changes made during the development of the portfolio can be related to common software evolution categories.

### Corrective Evolution

Corrective changes involve identifying and fixing problems in the existing software.

Layout issues, navigation problems, styling conflicts, and implementation errors were corrected during development.

### Adaptive Evolution

Adaptive evolution involves modifying software to meet changing requirements or environments.

New pages, navigation features, and functionality were introduced as requirements changed.

### Perfective Evolution

Perfective evolution focuses on improving existing functionality and user experience.

The portfolio was enhanced through better layouts, responsive design, visual consistency, navigation, and interactive elements.

### Preventive Evolution

Preventive evolution focuses on improving maintainability and reducing potential future problems.

Reusable components and separate page structures make the application easier to maintain and extend.

---

## Development Approach

The portfolio follows a component-based development approach.

Common functionality is separated into reusable components, while individual sections are implemented as separate React pages.

This structure makes the application easier to maintain and modify because changes to individual pages or reusable components can be made without unnecessarily affecting the rest of the application.

Responsive design techniques are also used so that the portfolio can adapt to different screen sizes, including desktop, tablet, and mobile devices.

---

## Project Structure

```text
my-portfolio/
│
├── public/
│   └── images/
│       └── home-bg.avif
│
├── src/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── PageNavigation.jsx
│   │
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Blog.jsx
│   │   ├── Education.jsx
│   │   ├── Home.jsx
│   │   ├── ProfessionalKnowledge.jsx
│   │   └── Readme.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js

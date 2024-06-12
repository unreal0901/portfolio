---
title: "Library Management System"
description: "A library management system built with React.js, Express.js, and MongoDB."
date: "05/14/2023"
demoURL: "https://librarymanagementsystem.com"
repoURL: "https://github.com/unreal0901/libraryManagementSystem"
---

![Library Management System](https://i.imgur.com/NVAuzzj.png)

This is a library management system developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The system is designed to facilitate the management of books, students, and library operations in an efficient manner.

## Project Overview

The library management system has the following key features:

- **User Roles**: The system currently supports two user roles: admin and student.
- **Admin Privileges**: Admins have privileges to add and remove students, add and remove books, and manage all library operations.
- **Student Registration**: Students cannot register themselves manually. Admins register students by providing an official email and student details, and an auto-generated password is sent to the student's email.
- **Book Management**: The system integrates with the Google Play Books API, allowing admins to directly add books from the Play Books catalog if available.
- **Book Issuance and Return**: Students can log in and issue or return books based on their access privileges.

## Authentication Flow

- **Admin Account**: The admin account is pre-configured in the database.
- **Login Process**: Upon login, an access token and refresh token are generated as JSON Web Tokens (JWT) using the user's ID as the payload and a private access token key stored in the `.env` file.
- **Session Management**: A session is created in Redis, a blazingly fast session store, with the user's ID as the key.
- **Token and Session Validation**: Access tokens, refresh tokens, and a login flag are sent as HTTP-only cookies to the frontend. Protected routes require a valid access token in the header (Bearer format) or cookie (`credentials: true`). The server verifies the access token with a public key, obtains the user ID from the payload, and checks the corresponding session in Redis.

## API Reference

There are four core routes:

- Authentication route: `/api/auth`
- Users route: `/api/users`
- Book route: `/api/book`
- Student route: `/api/student`

For detailed information on sub-routes and their respective HTTP methods, refer to the project's README file.

## Run Locally

1. Clone the project repository:

```bash
git clone https://github.com/unreal0901/libraryManagementSystem
```

2. Install dependencies and run the project:

```bash
# For the backend
cd backend
npm install
docker-compose up -d
npm run start

# For the frontend
cd ../frontend
npm install
npm run start
```

Note: Make sure to set the required environment variables for both the frontend and backend, as mentioned in the project's README file.

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

### Frontend:

- `REACT_APP_BASE_URL`: The URL of your backend (e.g., `http://localhost:8000`)
- `REACT_APP_GOOGLE_BOOKS_KEY`: Your Google Play Books API key

### Backend:

- `NODE_ENV`: Set to `development`
- `MONGODB_USERNAME`: Username for MongoDB
- `MONGODB_PASSWORD`: Password for MongoDB
- `MONGODB_DATABASE_NAME`: Name of the MongoDB database
- `ACCESS_TOKEN_PRIVATE_KEY`: Private key for access token generation
- `ACCESS_TOKEN_PUBLIC_KEY`: Public key for access token verification
- `REFRESH_TOKEN_PRIVATE_KEY`: Private key for refresh token generation
- `REFRESH_TOKEN_PUBLIC_KEY`: Public key for refresh token verification
- `EMAIL_USER`: Email address used for sending emails
- `EMAIL_PASS`: Email password
- `EMAIL_HOST`: Email host (e.g., `smtp.ethereal.email`)
- `EMAIL_PORT`: Email port

## Images

![Book Listing](https://i.imgur.com/QJrfhjz.png)
_List of available books in the library_

![Fine System](https://i.imgur.com/yjnFnBw.png)
_Fine System_

![Login Screen](https://i.imgur.com/vHW0BJR.png)
_Login Screen_

## Contact

If you have any questions or inquiries about this project, feel free to reach out to me at [rawatas0901@gmail.com](mailto:rawatas0901@gmail.com).

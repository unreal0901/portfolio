---

title: "CHIPT Smart Cup System"

description: "An IoT-based smart reusable cup system built with React.js, Express.js, MongoDB, and NFC technology."

date: "5/2/2024"

demoURL: "https://nfcfrontendcustomer.vercel.app/home"

repoURL: "private"

---

  

![Customer Portal](https://i.imgur.com/4MwPEwm.png)

CHIPT Smart Cup System is an innovative IoT-based platform that integrates reusable cups with NFC technology to promote sustainable practices. The system enables customers, vendors, and administrators to efficiently manage cup usage, track data, and reduce waste. The project includes a backend, frontend admin dashboard, vendor dashboard, and customer portal.
## Tech Stack

**Client:**

- React.js
- Redux
- axios
- React router v5

**Server:**

- Node.js (Express.js)

- MongoDB

- Cron Jobs

  
**IoT Technology:**

- NFC tags

  

## Project Overview

  

CHIPT Smart Cup System is designed to support reusable cup systems in cafes, restaurants, and other food service businesses. The system includes NFC-equipped smart cups to track usage and manage user data. It also allows customers to manage their accounts, vendors to monitor inventory and transactions, and administrators to oversee operations.

  




  

The application consists of the following components:

  

-  **Admin Dashboard:** Manage user accounts, vendor accounts, and monitor overall system activity.

-  **Vendor Dashboard:** Track reusable cup inventory, manage customer transactions, and view analytics.

-  **Customer Portal:** Register and manage accounts, view transaction history, and monitor cup usage.
- Other Features i have worked on:
	- Customer wallet integration
	- Fixing Cron jobs
	- Stripe integration
	- Package Management

  
  
  

## Authentication Flow

  

- Customers, vendors, and admins must register and log in to access their respective features.

- Passwords are hashed and securely stored.

- Sessions are managed using JWT (JSON Web Tokens).

  

## API Reference

  

The API provides endpoints for managing accounts, transactions, and reusable cup tracking. Key endpoints include:

  

-  **User Management:**

-  `POST /api/register` – Register a new account.

-  `POST /api/login` – Log in to an existing account.

-  `GET /api/profile` – Retrieve user profile information.

  

-  **Cup Tracking:**

-  `GET /api/cups` – Retrieve available reusable cups.

-  `POST /api/track` – Track a cup's transaction.

  

-  **Vendor Management:**

-  `GET /api/vendors` – List vendor accounts.

-  `POST /api/vendors` – Add a new vendor.

  

## Features

  

-  **NFC Integration:** Scan cups with NFC tags to track usage in real time.

-  **Inventory Management:** Vendors can monitor their reusable cup inventory.

-  **Sustainability Metrics:** Customers and vendors can track metrics like cups saved and CO2 reduction.

-  **Automated Reports:** Cron jobs generate and email sustainability reports to vendors and admins.

  

## Run Locally

  

1. Clone the project repository:

  

```bash

> Not available for cloning

```

  

2. Install dependencies and run the project:

  

```bash

# Backend

cd  backend

npm  install

npm  run  start

  

# Frontend (do for admin , vendor and customer)
cd  ../frontend

npm  install

npm  run  start

```

  

3. NFC Tag Testing:

To test NFC functionality, ensure your device supports NFC scanning and is configured properly.

  

## Environment Variables

  

To run this project, add the following environment variables to your `.env` file:

  

### Backend:

  

-  `MONGODB_URI`: MongoDB connection string

-  `JWT_SECRET`: Secret key for JWT authentication

-  `EMAIL_HOST`: SMTP server for sending emails

-  `EMAIL_USER`: Email account for sending automated reports

-  `EMAIL_PASS`: Password for the email account

  

### Frontend:

  

-  `REACT_APP_BASE_URL`: Backend API URL (e.g., `http://localhost:8000`)

  

## Images

  

![Add Cups](https://i.imgur.com/S3Caqio.png)

_Admin Dashboard_

  
  

## Contact
To Discuss more about this projects contact on rawats090@gmail.com
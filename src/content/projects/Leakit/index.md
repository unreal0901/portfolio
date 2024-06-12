---
title: "Leak It"
description: "An anonymous forum board built with React.js, Express.js, and MongoDB."
date: "06/21/2023"
demoURL: "https://leakit.netlify.app/"
repoURL: "https://github.com/your-username/leakit"
---

![Leak It](https://i.imgur.com/t96ckNd.png)

Leak It is an anonymous forum board that allows users to share and discuss topics without revealing their identities. Built with modern web technologies, this project aims to provide a secure and engaging platform for free expression and open discussions.

## Status

[![Netlify Status](https://api.netlify.com/api/v1/badges/7af3bb67-2e3f-4d2d-ad0c-a29c43b1a12b/deploy-status)](https://app.netlify.com/sites/leakit/deploys)

## Tech Stack

**Client:**

- React
- Redux with RTK Query
- tailwindcss

**Server:**

- Nodejs (Expressjs)
- mongodb (mongoose)

## Project Overview

Leak It is an anonymous forum application created using the MERN stack (MongoDB, Express.js, React.js, and Node.js). Inspired by the 4chan forum, it allows users to express themselves and engage in discussions without revealing their identities. Only IP addresses of users are stored, ensuring anonymity.

The application follows a specific flow:

- **Board**: There are boards that encapsulate all other objects like threads and replies.
- **Threads and Replies**: Users can create boards, reply to threads, or respond to other replies.

## Authentication Flow

- No authentication is required.
- A session is created for each user who visits the site, stored in the MongoDB database using the `mongodb-store` package.

## API Reference

There are three core routes:

- Board route: `/api/boards`
- Reply route: `/api/reply`
- Thread route: `/api/thread`

For detailed information on sub-routes and their respective HTTP methods, refer to the project's README file.

## Run Locally

1. Clone the project repository:

```bash
git clone https://github.com/unreal0901/anonymous_forum
```

2. Install dependencies and run the project:

```bash
# For the backend
cd backend
npm install
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

### Backend:

- `NODE_ENV`: Set to `development`
- `DEPLOY_STAGE`
- `MONGODB_USERNAME`: Username for MongoDB
- `MONGODB_PASSWORD`: Password for MongoDB
- `MONGODB_DATABASE_NAME`: Name of the MongoDB database
- `MONGODB_SESSION_DATABASE_NAME`
- `SESSION_SECRET`

## Images

![Boards Listing](https://i.imgur.com/qXzkV1z.png)
_All Boards listing_

![Nested Comments similar to youtube](https://i.imgur.com/nRrNRKY.png)
_Nested Comments similar to youtube old commenting system_

![Single Board](https://i.imgur.com/RHsjzZc.png)
_Single Board with all the threads information of that board listed below_

## Contact

If you have any questions or inquiries about this project, feel free to reach out to me at [rawatas0901@gmail.com](mailto:rawatas0901@gmail.com).

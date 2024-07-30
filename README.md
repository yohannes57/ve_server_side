# VisitEthiopia Backend

This project is my capstone project for the Per Scholas final assessment. The backend repository for the VisitEthiopia website provides the necessary APIs to manage and serve data about various destinations in Ethiopia. This backend service is built with Node.js and Express and uses MongoDB for data storage.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [File Structure](#file-structure)
- [Setup Enviromental Variable](#env)
- [Setup](#setup)
- [Usage](#usage)
- [Frontend Repository](#frontend-repository)
- [Contact](#contact)

## Project Overview

The VisitEthiopia website backend handles user authentication, destination data management, and provides APIs to support the frontend. This project integrates multiple technologies and follows best practices to ensure a robust and maintainable codebase.

## Features

- User Authentication (Sign Up and Sign In)
- CRUD operations for destinations
- Data fetching with case-insensitive search
- Protected routes for admin functionalities

## Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB specifically Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Environment Management**: dotenv

## File Structure

- visitE-server/
- ├── conn/
- │ ├── db.mjs

## ├── controllers/

- │ ├── accomodationController.mjs
- │ ├── basicInfoController.mjs
- │ ├── destController.mjs
- │ ├── factController.mjs
  ├── middleware/
- │ ├── authMiddleware.mjs

## ├── models/

- │ ├── accomodations.mjs
- │ ├── basicInfo.mjs
- │ ├── destination.mjs
- │ ├── facts.mjs
- │ ├── users.mjs

## ├── routes/

- │ ├── api/
- │ ├── accomodationRoutes.mjs
- │ ├── basicInfoRoutes.mjs
- │ ├── destRoutes.mjs
- │ ├── factRoutes.mjs
- ├── .env
- ├── server.js
- └── package.json

## Setup

1. Clone the repository
   ```bash
   git clone https://github.com/yohannes57/ve_server_side.git
   cd visitE-server
   ```

## Setup Enviromental Variable

- MONGO_URI=your_mongodb_connection_string
- JWT_SECRET=your_jwt_secret
- PORT=3000

## Usage

- Start the Server: Ensure MongoDB is running and accessible. Run npm start to start the server.
- Access the APIs: Use Postman or a similar tool to interact with the APIs.

## Dependencies

The following dependencies are used in this project:

- "dependencies":
- "bcryptjs": "^2.4.3",
- "cors": "^2.8.5",
- "dotenv": "^16.4.5",
- "express": "^4.19.2",
- "express-validator": "^7.1.0",
- "jsonwebtoken": "^9.0.2",
- "mongoose": "^8.5.1"

## Frontend Repository

The FrontEnd for this project can be found at: [VisitEthiopia FrontEnd](https://github.com/yohannes57/ve_client_side.git)

Make sure to set up the backend by following the instructions in its README file.

## Contact

- For any questions or feedback, please contact:

- Name: Yohannes M.
- Email: ytmderes@gmail.com
- LinkedIn: Your https://linkedin.com/in/yohannes-molla

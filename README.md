# VisitEthiopia Backend

## Overview

This project is the backend for the VisitEthiopia website, which provides comprehensive information for travelers to Ethiopia. It includes user registration, authentication, and CRUD operations for destinations,facts,basicinfos,and accommodations.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
  - [User Registration](#user-registration)
  - [User Login](#user-login)
  - [Protected Routes](#protected-routes)
  - [Destinations](#destinations)
  - [Accommodations](#accommodations)
- [Middleware](#middleware)
  - [Postman Test Collections](#postman-test-collections)
    - [User Registration Example](#user-registration-example)
    - [User Login Example](#user-login-example)
    - [Create Destination Example](#create-destination-example)
    - [Create Accommodation Example](#create-accommodation-example)
- [Dependencies](#dependencies)

# Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yohannes57/ve_server_side.git
   cd ve_server_side
   Install dependencies:
   bash
   npm install
   ```

API Endpoints

# User Registration

Endpoint: /api/users
Method: POST
Request Body:
json

Copy code
{
"name": "John Doe",
"email": "johndoe@example.com",
"password": "password123"
}

Response:
Success: 201 Created with a token in the response body.
Error: 400 Bad Request if validation fails or user already exists.

# User Login

Endpoint: /api/auth
Method: POST
Request Body:
json

Copy code
{
"email": "johndoe@example.com",
"password": "password123"
}
Response:
Success: 200 OK with a token in the response body.
Error: 400 Bad Request if credentials are invalid.
Protected Routes
To access protected routes, include the x-auth-token header with a valid JWT token.

Example:

Endpoint: /api/auth
Method: GET
Headers:
x-auth-token: 'token'

# Destinations

# Create Destination

Endpoint: /api/destinations
Method: POST
Request Body:json

Copy code
{
"name": "Lalibela",
"description": "Ancient rock-hewn churches",
"imageUrl": "http://example.com/image.jpg",
"highlights": ["Churches", "History"],
"thingsToDo": ["Explore churches", "Learn history"],
"location": {
"latitude": 12.0306,
"longitude": 39.0473
}
}

# Get All Destinations

Endpoint: /api/destinations
Method: GET

# Get Destination by ID

Endpoint: /api/destinations/:id
Method: GET

# Update Destination

Endpoint: /api/destinations/:id
Method: PUT
Request Body: (same as create)

# Delete Destination

Endpoint: /api/destinations/:id
Method: DELETE
Accommodations
Create Accommodation

# Middleware to verify JWT token

export default (req, res, next) => {
const token = req.header('x-auth-token');

    if (!token) {
        return res.status(401).json({ errors: [{ msg: 'No token, authorization denied' }] });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (err) {
        console.error(err);
        res.status(401).json({ errors: [{ msg: 'Token is not valid' }] });
    }

}

# Dependencies

The following dependencies are used in this project:

"dependencies": {
"bcryptjs": "^2.4.3",
"cors": "^2.8.5",
"dotenv": "^16.4.5",
"express": "^4.19.2",
"express-validator": "^7.1.0",
"jsonwebtoken": "^9.0.2",
"mongoose": "^8.5.1"
}

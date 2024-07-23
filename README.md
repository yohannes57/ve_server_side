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
- [Testing](#testing)
  - [Postman Test Collections](#postman-test-collections)
    - [User Registration Example](#user-registration-example)
    - [User Login Example](#user-login-example)
    - [Create Destination Example](#create-destination-example)
    - [Create Accommodation Example](#create-accommodation-example)
- [Dependencies](#dependencies)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yohannes57/ve_server_side.git
   cd ve_server_side
   Install dependencies:
   bash
   Copy code
   npm install
   ```

Running the Server
To start the server, run:

API Endpoints
User Registration
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
User Login
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

Endpoint: /api/protected-route
Method: GET
Headers:
x-auth-token: your.jwt.token.here
Destinations
Create Destination

Endpoint: /api/destinations
Method: POST
Request Body:
json
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
Get All Destinations

Endpoint: /api/destinations
Method: GET
Get Destination by ID

Endpoint: /api/destinations/:id
Method: GET
Update Destination

Endpoint: /api/destinations/:id
Method: PUT
Request Body: (same as create)
Delete Destination

Endpoint: /api/destinations/:id
Method: DELETE
Accommodations
Create Accommodation

Endpoint: /api/accommodations
Method: POST
Request Body:
json
Copy code
{
"name": "Hilton Hotel",
"description": "Luxury hotel",
"imageUrl": "http://example.com/image.jpg",
"address": "123 Main St",
"priceRange": "$$$",
"amenities": ["Pool", "Gym", "Spa"],
"contact": {
"phone": "123-456-7890",
"email": "contact@hilton.com",
"website": "http://hilton.com"
}
}
Get All Accommodations

Endpoint: /api/accommodations
Method: GET
Get Accommodation by ID

Endpoint: /api/accommodations/:id
Method: GET
Update Accommodation

Endpoint: /api/accommodations/:id
Method: PUT
Request Body: (same as create)
Delete Accommodation

Endpoint: /api/accommodations/:id
Method: DELETE
Middleware
Authentication Middleware
The authentication middleware verifies the JWT token included in the request header to protect routes.

javascript
Copy code
import jwt from 'jsonwebtoken';

// Middleware to verify JWT token
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
Testing
To test the API endpoints, you can use Postman or any other API testing tool. Here are the general steps:

Register a User: Send a POST request to /api/users with the required fields.
Login a User: Send a POST request to /api/auth with the email and password.
Access Protected Routes: Include the x-auth-token header with the token received during login or registration to access protected routes.
CRUD Operations: Use the provided endpoints for creating, reading, updating, and deleting destinations and accommodations.
Postman Test Collections
Here are some sample JSON data for testing:

User Registration Example
Endpoint: POST /api/users
Body:
json
Copy code
{
"name": "John Doe",
"email": "john.doe@example.com",
"password": "password123"
}
User Login Example
Endpoint: POST /api/auth
Body:
json
Copy code
{
"email": "john.doe@example.com",
"password": "password123"
}
Create Destination Example
Endpoint: POST /api/destinations
Headers: x-auth-token: your.jwt.token.here
Body:
json
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
Create Accommodation Example
Endpoint: POST /api/accommodations
Headers: x-auth-token: your.jwt.token.here
Body:
json
Copy code
{
"name": "Hilton Hotel",
"description": "Luxury hotel",
"imageUrl": "http://example.com/image.jpg",
"address": "123 Main St",
"priceRange": "$$$",
"amenities": ["Pool", "Gym", "Spa"],
"contact": {
"phone": "123-456-7890",
"email": "contact@hilton.com",
"website": "http://hilton.com"
}
}
Dependencies
The following dependencies are used in this project:

json
Copy code
"dependencies": {
"bcryptjs": "^2.4.3",
"cors": "^2.8.5",
"dotenv": "^16.4.5",
"express": "^4.19.2",
"express-validator": "^7.1.0",
"jsonwebtoken": "^9.0.2",
"mongoose": "^8.5.1"
}

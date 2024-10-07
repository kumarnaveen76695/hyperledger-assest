Hyperledger Fabric MySQL Integration API:

Overview:

This project is an integration of a Node.js backend with MySQL for managing assets. It replaces the default Hyperledger Fabric file-based connection with a relational database, allowing for the creation, retrieval, updating, and deletion of assets. The API supports basic CRUD (Create, Read, Update, Delete) operations on an asset management system.

Table of Contents
Project Setup
Database Setup
API Endpoints
Testing the API with Postman
Technologies Used
License
Project Setup
Prerequisites
Make sure you have the following installed:

Node.js//
MySQL
Postman (for API testing)
Installation Steps
Clone the repository:


my git hub url :
git clone :
Navigate to the project directory:

bash
Copy code
cd fabric-samples/asset-api
Install dependencies:

bash
Copy code
npm install
Create a .env file in the root of the project to store your environment variables:

makefile
Copy code
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=12345
DB_DATABASE=hyperledger_db
Run the server:

bash
Copy code
node index.js
Database Setup
Log into MySQL and create the hyperledger_db database:

sql
Copy code
CREATE DATABASE hyperledger_db;
Create a table for storing assets in the database:

sql

CREATE TABLE assets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    asset_name VARCHAR(255) NOT NULL,
    asset_value DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
API Endpoints
Base URL: http://localhost:3000
Method	Endpoint	Description

//creating the user

POST	/assets/create	Create a new asset

//deting all info

GET	/assets	Get all assets

//get the info by specific id

GET	/assets/:id	Get a specific asset by ID

//update the info specific id

PUT	/assets/:id	Update an asset by ID

//delete the specific id info

DELETE	/assets/:id	Delete an asset by ID

Sample Payloads
Create Asset (POST /assets/create)
json
Copy code
{
    "asset_name": "Laptop",
    "asset_value": 1500.00
}
Update Asset (PUT /assets/:id)
json
Copy code
{
    "asset_name": "Laptop",
    "asset_value": 1400.00
}
Testing the API with Postman
Open Postman and import the API collection.
Use the provided API endpoints for testing CRUD operations.
For POST and PUT requests, add the JSON payload in the body.
For GET and DELETE requests, pass the id parameter in the URL.


Technologies Used
Node.js: JavaScript runtime environment.
Express.js: Web framework for Node.js.
MySQL: Relational database management system.
Postman: API testing tool.

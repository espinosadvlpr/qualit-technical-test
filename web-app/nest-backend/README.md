# Products API
This NestJS application, built with TypeScript, serves an users authentication and products management system. It uses TypeORM to interact with a MySQL database to manage users and products information. 

## Features
* **Manage Users:** Users can be managed, including details like username, email and password.
* **Manage Products:** Products can be added and listed.

## Technologies Used
* **NestJS:** Runtime environment for server-side application.
* **TypeScript:** Typed superset of JavaScript for enhanced developer experience.
* **TypeORM:** ORM library to config the database data and manage the database requests.
* **MySQL:** Relational database management system used for storing users and products data.
* **Bcrypt:** Libary to encrypt the user's password before storing in the database.

## Installation
1. Install dependencies.
```bash
  npm install
```
2. Create a database schema in MySQL and save the name. After that, copy the .env.example file in a .env file and fill the data for the MySQL connection.
```bash
  DB_HOST=
  DB_PORT=
  DB_USERNAME=
  DB_PASSWORD=
  DB_NAME=
``` 
3. Run the server.
```bash
  npm run start:dev
```

## API Endpoints

- Users:
  ```
  GET /users/  --Get all users 

  POST /users/register/  --Register one user in the database
  {
    "email": "",
    "username": "",
    "password": ""
  }

  POST /users/login/  --Authentication method for log in to the app
  {
    "email": "",
    "password": ""
  }
  ```

- Products:
  ```
  GET /products/  --Get all products

  GET /products/:username  --Get all products owned by a user

  POST /products/create/  --Create a product in the database
  {
    "product_name": "",
    "description": "",
    "ownerId": 
  }
  ```
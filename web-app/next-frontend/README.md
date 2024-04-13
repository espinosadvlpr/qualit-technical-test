# Products APP
This React frontend application, built with TypeScript, serves as an users authentication and product management system. It utilizes the Next.js framework to list products information, and provides user authentication functionality with session management.

## Features
* **List Products:** Products can be listed, showing details such as id, product name, description and the user id of the owner of the product (an user can't see other user products).
* **User Authentication:** Users can log into the application using next-auth library.
* **Session Management:** User sessions are managed securely, providing a seamless experience across different parts of the application.

## Technologies Used
* **React:** JavaScript library for building user interfaces.
* **TypeScript:** Typed superset of JavaScript for enhanced developer experience.
* **Next.js:** React framework for building server-side rendered web applications.
* **NextAuth.js:** Authentication library for Next.js applications, providing user authentication and session management functionality.
* **Tailwind CSS:** Utility-first CSS framework for styling user interfaces.

## Installation
1. Install dependencies.
```bash
    npm install
```
2. Copy the .env.example in your own .env.local file with the key for next auth library.
   The token has to be generated in base64, so you can use openssl library with the command: `openssl rand -base64 32` . After copy the response for the command you can add it in your .env.local file.
   The nextauth_url can change with the deployment of the application but in dev environment you can add your localhost url that the nextjs application, for example: `http://localhost:4000/`.
```bash
    NEXTAUTH_SECRET=
    NEXTAUTH_URL=
```
3. Run the server.
```bash
    npm run dev
```

## Important
Before using the aplication you need to start the backend server and create at least one user and one product related, so the app is going to work in optimous way :)
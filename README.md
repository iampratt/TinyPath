# TinyPath

A simple and efficient URL shortener service built with **Node.js**, **Express.js**, and **MongoDB** that converts long URLs into short, easy-to-share links.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Endpoints](#api-endpoints)
  - [POST /api](#1-post-api)
  - [GET /:shortID](#2-get-shortid)
  - [GET /api/analytics/:shortID](#3-get-apianalyticsshortid)
  - [GET /api/getAll](#4-get-apigetall)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Contact](#contact)

## Features

- Shorten long URLs to concise, easy-to-share links.
- Redirect users to the original URLs using shortened links.
- Track usage statistics for each shortened URL.
- Support for custom URL aliases (optional).

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **ORM**: Mongoose
- **Environment Management**: dotenv

## Setup Instructions

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or higher)
- **MongoDB** (local or cloud instance)
- **Git** (for cloning the repository)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/iampratt/URL_Shortener.git
   cd URL_Shortener
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```plaintext
     PORT=<PORT>
     MONGO_URI=<your mongodb uri>
     ```

4. **Start the server:**
   ```bash
   npm run start
   ```
   The server will run on `http://localhost:<PORT>`.

## API Endpoints

### 1. **POST** `/api/`

- **Description**: Shorten a long URL.
- **Request Body**:
  ```json
  {
    "url": <Your URL>
  }
  ```
- **Response**:
  ```json
  {
    "shortID": "http://localhost:3000/myalias"
  }
  ```

### 2. **GET** `/:shortID`

- **Description**: Redirect to the original long URL.
- **Response**: HTTP 200 redirect to the long URL if the code is valid.
- **Error Response**:
  ```json
  {
    "err": "URL not found"
  }
  ```

### 3. **GET** `/api/analytics/:shortID`

- **Description**: Return analytics of shortID.
- **Response**: HTTP 200 redirect to the long URL if the code is valid.
- **Error Response**:
  ```json
  {
    "err": "URL not found"
  }
  ```

### 4. **GET** `/api/getAll`

- **Description**: Returns all registered URLs.
- **Response**: HTTP 200 redirect to the long URL if the code is valid.

## Project Structure

```
URL_Shortener/
├── controllers/    # API logic (shortening and redirection)
├── models/         # Mongoose schemas for URLs
├── routes/         # API routes
├── .env            # Environment variables
├── .gitignore      # Files to ignore in Git
├── package.json    # Project metadata and dependencies
└── server.js       # Main server entry point
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for improvements, bug fixes, or new features.

## Contact

- **GitHub**: [iampratt](https://github.com/iampratt)
- **Email**: [pratyush0705@gmail.com](mailto:pratyush0705@gmail.com)

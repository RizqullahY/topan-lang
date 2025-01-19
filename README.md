## Description
A simple API for testing features like **Satra PosEpie** and **Topan Lang**. This API is designed to facilitate testing through a straightforward endpoint.

---

## Requirements

### Prerequisites
Make sure you have installed:
- [Node.js](https://nodejs.org/) (latest version recommended)
- [npm](https://www.npmjs.com/)

### Installation


## Running the Server

To run the server, use the following command:
```bash
node index.js
```
The server will run on `localhost` at port `3000`.

---

## Endpoint

### 1. `/users`
#### Method: POST
- **Description**: This endpoint is used to add user data.
- **URL**: `http://localhost:3000/users`
- **Body (JSON)**:
  ```json
  {
    "name": "User Name",
    "email": "email@example.com"
  }
  ```
---

## Feature Testing
Features like **Satra PosEpie** and **Topan Lang** can be tested by modifying the logic in `index.js`. Feel free to develop this endpoint according to your project needs.

---


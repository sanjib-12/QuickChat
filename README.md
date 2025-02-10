<div align="center">

# 💬 QuickChat

[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)


### Real-time messaging solution built with MERN stack


[Report Bug](https://github.com/sanjib-12/QuickChat/issues) 

</div>

---

## 📋 Table of Contents
- [Overview](#-overview)
- [Key Features](#-key-features)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Usage](#-usage)
- [Contributing](#-contributing)
- [License](#-license)

## 📖 Overview

QuickChat is a modern real-time messaging application built using the MERN stack (MongoDB, Express.js, React, Node.js). It provides instant message delivery, user authentication, and responsive UI components.

### Why QuickChat?

- ⚡ **Real-time Communication**: Built with Socket.IO for instant messaging
- 🔒 **Secure Authentication**: JWT-based user authentication system
- 📱 **Responsive Design**: Works seamlessly across devices

## ✨ Key Features

- **User Management**
  - Registration with email validation
  - Secure login with JWT
  - Profile management

- **Chat Functionality**
  - Real-time message delivery
  - Chat history preservation
  - Online status indicators

- **Technical Features**
  - REST API backend
  - React frontend with state management
  - MongoDB database integration

## 💻 Prerequisites

- Node.js 16.x or higher
- MongoDB 5.0+
- npm 8.x or higher
- Socket.IO client

## 🚀 Installation
``` bash
git clone https://github.com/sanjib-12/QuickChat.git
```
### Frontend Setup
```bash
# Navigate to the Client folder
cd client

# Install dependencies
npm install

# Start the application
npm run start
```
### Backend Setup
```bash
# Navigate to the Server folder
cd Server

# INstall dependencies
npm install

# Create a file to store environment variable
touch config.env

# Add the following configuration in config file.
PORT_NUMBER=5000
CONN_STRING= < your mongodb connection string >
SECRET_KEY=quick-chat-server

# Start the server
npm run dev
```

## 📘 Usage
Simply open the application in your web browser.  Enter your username and start chatting with other users who are connected.  The interface is designed to be self-explanatory.

## 🤝 Contributing
We welcome contributions! Please see our Contributing Guidelines (CONTRIBUTING.md) for details.

- Fork the repository
- Create your feature branch (git checkout -b feature/amazing-feature)
- Commit your changes (git commit -m 'Add amazing feature')
- Push to the branch (git push origin feature/amazing-feature)
- Open a Pull Request

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

---

<div align="center">

**QuickChat** is maintained by [Sanjib](https://github.com/sanjib-12).  
Show your support by giving a ⭐️ to this repository!

</div>
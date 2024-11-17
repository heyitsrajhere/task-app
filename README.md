# Task Manager API

A simple Task Manager API built with NestJS and Prisma, designed to manage tasks. The application supports CRUD operations for tasks and is containerized using Docker for easy deployment.

---
This README file now reflects the use of Neon DB and includes clear instructions for setting up the `.env` file from the `.env.example` template.

## Features

- **Task Management:** Create, Read, Update, and Delete tasks.
- **Database Integration:** Uses PostgreSQL as the database.
- **Docker Support:** Fully containerized for hassle-free setup and deployment.
- **Validation:** Includes validation for input data.

---

## Prerequisites

Ensure you have the following installed:

1. [Docker](https://www.docker.com/) and Docker Compose.
2. [Node.js](https://nodejs.org/) (for local development without Docker).

---

## Getting Started


```bash
git clone https://github.com/heyitsrajhere/task-app.git
cd task-manager
set .env from .env.example
docker-compose up --build

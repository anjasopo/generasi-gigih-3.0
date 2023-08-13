# Tokopedia Play Clone

Tokopedia Play Clone is a video streaming platform inspired by Tokopedia's design. This project replicates key features of Tokopedia Play, including videos, products, comments, and more.

<div align="center">
  <img src="path/to/your/logo.png" alt="Tokopedia Play Clone Logo" width="200"/>
</div>

## Table of Contents
- [Tokopedia Play Clone](#tokopedia-play-clone)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
    - [Frontend](#frontend)
    - [Backend](#backend)
  - [Bonus Features](#bonus-features)
  - [Technical Stack](#technical-stack)
    - [Frontend](#frontend-1)
    - [Backend](#backend-1)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Application](#running-the-application)
  - [API](#api)
    - [Video API](#video-api)
    - [Product API](#product-api)
    - [Comment API](#comment-api)
    - [Submit Comment API](#submit-comment-api)
  - [Database Schema](#database-schema)
  - [Deployment](#deployment)
  - [Contributing](#contributing)
  - [License](#license)

## Introduction

Tokopedia Play Clone is a video streaming platform that brings the immersive experience of Tokopedia's video content to life. This project is designed to replicate the key features of Tokopedia Play, showcasing videos, products, comments, and more.

## Features

### Frontend

1. **Home Page:** Discover and explore a curated collection of videos with captivating thumbnail images from YouTube.
2. **Video Detail Page:** Immerse yourself in the world of a specific video with an embedded YouTube player, related products, comments, and an interactive comment submission form.
3. **Comment Submission:** Express your thoughts and opinions by submitting comments, complete with your name and comment content.
4. **Real-time Comments:** Stay engaged with real-time comment updates using WebSocket or server-side events.
5. **User Profile:** Personalize your experience with a user profile picture and username, displayed conveniently at the top right corner.
6. **Search Functionality:** Seamlessly discover content with an intuitive search bar in the Navbar.

### Backend

1. **Video API:** Access a wide range of videos, each with detailed information.
2. **Product API:** Explore a diverse collection of products, each with comprehensive details.
3. **Comment API:** Engage with comments for videos and contribute your insights.

## Bonus Features

1. **User Profile Picture and Username:** Elevate the user experience by displaying user profile pictures and usernames.
2. **Real-time Comment Updates:** Elevate the interactivity with real-time comment updates, offering an engaging and dynamic platform.
3. **Search Functionality:** Enhance content discoverability through a robust search functionality.

## Technical Stack

### Frontend

- React.js
- React Router
- Tailwind CSS
- DaisyUI (Tailwind CSS component library)
- React Query (for data fetching and caching)

### Backend

- Node.js
- Express.js
- MongoDB
- WebSocket or Server-Side Events (for real-time comment updates)
- Nodemon (for development server auto-restart)

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB database (local or MongoDB Atlas).

### Installation

1. Clone this repository to your local machine.
2. Navigate to the frontend folder and run `npm install`.
3. Navigate to the backend folder and run `npm install`.

### Running the Application

1. Start the frontend application:
   - Navigate to the frontend folder.
   - Run `npm start`.

2. Start the backend server:
   - Navigate to the backend folder.
   - Run `npm start` or `nodemon index.js` for automatic server restart during development.

## API

The backend provides the following API endpoints:

### Video API

- `/api/videos`: Fetch a list of videos with thumbnails.
- `/api/videos/:videoId`: Fetch details of a specific video.

### Product API

- `/api/products`: Fetch a list of products.
- `/api/products/:productId`: Fetch details of a specific product.

### Comment API

- `/api/comments`: Fetch comments for videos.
- `/api/comments?videoID=Video1`: Fetch comments related to "Video1".

### Submit Comment API

- `/api/submit-comment`: Submit a new comment.
- Payload Example:
  ```json
  {
    "username": "JohnDoe",
    "comment": "Video dan produknya keren!",
    "videoID": "Video1"
  }
  ```

## Database Schema

The MongoDB database used for this project has collections for videos, products, and comments.

## Deployment

Deploy the frontend on platforms like Vercel or Netlify, and the backend on platforms like Heroku or AWS.

## Contributing

Contributions are welcome! Feel free to create pull requests or open issues.

## License

This project is licensed under the [MIT License](LICENSE).

<div align="center">
  Made with ❤️ by [Your Name](https://github.com/your-username)
</div>
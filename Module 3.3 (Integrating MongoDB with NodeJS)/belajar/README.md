## Module 3.3: Integrating MongoDB with NodeJS

### Folder/File Structure

- `/belajar`: The root directory of the project.
- `/belajar/models/music.js`: Defines the Mongoose schema for the "music" collection.
- `/belajar/node_modules`: Node.js modules installed for the project.
- `/belajar/routes/routes.js`: Defines the routes and handlers for the CRUD operations using Express.js.
- `/belajar/.env`: Configuration file that contains the MongoDB connection string.
- `/belajar/index.js`: The main file that initializes the Express.js app and connects to the MongoDB database.

### Example Program Explanation

1. **`/belajar/models/music.js`**: Defines the Mongoose schema for the "music" collection with fields `title`, `artist`, and `album`. This schema is exported as a Mongoose model.

2. **`/belajar/routes/routes.js`**: Defines the routes and handlers for the CRUD operations using Express.js. It includes the following routes:
   - POST `/api/post`: Saves a new music document to the database.
   - GET `/api/get/:id`: Fetches a specific music document by its ID.
   - PATCH `/api/update/:id`: Updates a music document by its ID.
   - DELETE `/api/delete/:id`: Deletes a music document by its ID.

3. **`.env`**: Contains the MongoDB connection URL (`DATABASE_URL`) that will be used in the project.

4. **`/belajar/index.js`**: The main file that sets up the Express.js app, connects to the MongoDB database using the connection URL from `.env`, and initializes the routes defined in `routes.js`.

### Example Usage

The provided example program demonstrates how to build a basic Express.js app that interacts with a MongoDB database using Mongoose for CRUD operations on a "music" collection. The app listens on port 3000, and it provides RESTful API endpoints for creating, reading, updating, and deleting music documents.

The application allows you to perform the following operations:

1. **Create a New Music Document**: Send a POST request to `/api/post` with the necessary data (title, artist, album) in the request body to add a new music document to the database.

2. **Fetch a Specific Music Document**: Send a GET request to `/api/get/:id` with the music document ID to retrieve a specific music document from the database.

3. **Update a Music Document**: Send a PATCH request to `/api/update/:id` with the music document ID and the updated data in the request body to modify an existing music document.

4. **Delete a Music Document**: Send a DELETE request to `/api/delete/:id` with the music document ID to remove a specific music document from the database.

Note: Make sure to install the required packages, set up a local MongoDB database, and update the `.env` file with the appropriate connection URL before running the application.
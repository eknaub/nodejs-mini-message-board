# Node.js Mini Message Board

This project is a simple message board application built using Node.js and Express. It allows users to post, view, and delete messages.

## Project Structure

```
nodejs-mini-message-board
├── src
│   ├── app.js                # Entry point of the application
│   ├── db
│   │   ├── controllers
│   │   │   └── messageController.js  # Controller for message-related logic
│   │   └── models
│   │       └── messages.js           # Database operations for messages
│   ├── errors
│   │   └── CustomNotFoundError.js    # Custom error class for 404 errors
│   ├── public
│   │   └── styles.css                # Static CSS file
│   ├── routes
│   │   ├── indexRouter.js            # Router for the home page
│   │   └── messageRouter.js          # Router for message-related routes
│   ├── utils
│   │   └── links.js                  # Navigation links for the navbar
│   └── views
│       ├── index.ejs                 # Main page template
│       ├── navbar.ejs                # Navbar partial template
│       ├── message
│       │   ├── form.ejs              # Form for adding new messages
│       │   └── message.ejs           # Template for displaying messages
├── package.json                      # NPM configuration file
├── .gitignore                        # Git ignore file
├── .gitattributes                    # Git attributes file
└── README.md                         # Documentation for the project
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd nodejs-mini-message-board
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Set up the PostgreSQL database:
   - Create a PostgreSQL database (e.g., `Messages`).
   - Update the `.env` file with your database credentials:
     ```env
     DATABASE_URL=postgresql://<username>:<password>@<host>:<port>/<database>
     ```
5. Create the `messages` table in your PostgreSQL database:
   ```sql
   CREATE TABLE IF NOT EXISTS public.messages
   (
       author text NOT NULL,
       text text NOT NULL,
       added timestamp with time zone NOT NULL,
       id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 )
   );
   ```

## Usage

To start the application, run the following command:

```bash
npm run dev
```

The application will be running on `http://localhost:3000`.

## API Endpoints

### Messages

- `GET /message` - Retrieve all messages as JSON.
- `GET /message/new` - Render the form for creating a new message.
- `POST /message/new` - Submit a new message and redirect to the home page.
- `DELETE /message` - Delete all messages and return the updated list of messages.
- `DELETE /message/:id` - Delete a specific message by its ID and return the updated list of messages.

### Home

- `GET /` - Render the home page with a list of messages.

## License

This project is licensed under the MIT License.

# Movie Library Web Application Frontend

## Introduction

This repository contains the frontend code for the Movie Library Web Application. The frontend is built using React and Material-UI for the user interface components. The application allows users to search for movies, view details, and manage their watchlists.

## Features

1. **User Authentication**: Users can sign up and sign in.
2. **Movie Search**: Users can search for movies and view their details.
3. **Watchlists**: Users can create and manage watchlists of movies. Watchlists can be public or private.
4. **Home Screen**: Displays the user's watchlists and allows for interaction with movies.

## Working Link
([[(https://miwa-client.onrender.com)](https://miwa-client.onrender.com))

## Prerequisites

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd movie-library-frontend
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Running the Application

1. Start the application:
   ```bash
   npm start
   ```
2. The application will be running on `http://localhost:3000`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

## Project Structure

```
.
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── Auth
│   │   │   ├── SignIn.js
│   │   │   ├── SignUp.js
│   │   │   └── ...
│   │   ├── Movie
│   │   │   ├── MovieDetail.js
│   │   │   ├── MovieList.js
│   │   │   └── ...
│   │   ├── Watchlist
│   │   │   ├── WatchlistItem.js
│   │   │   ├── WatchlistList.js
│   │   │   └── ...
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
└── package.json
```

## Dependencies

- `@emotion/react`, `@emotion/styled`: For styling with Emotion.
- `@fontsource/roboto`: For Roboto font integration.
- `@mui/material`, `@mui/icons-material`: For Material-UI components and icons.
- `react`, `react-dom`: For building the user interface.
- `react-router-dom`: For routing.
- `react-scripts`: For Create React App scripts.
- `web-vitals`: For measuring performance.

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License.

---

This README provides a comprehensive overview of the Movie Library Web Application frontend, including its features, installation steps, available scripts, project structure, and more. It should help you get started quickly and understand the project's organization and capabilities.

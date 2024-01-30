# Game of Thrones Encyclopedia

Welcome to the Game of Thrones Encyclopedia, a React application that serves as a comprehensive guide to the famous TV series Game of Thrones. This application allows you to explore information about the various houses in the GOT universe, with features to view details and mark favorites. Data is downloaded using [An API of Ice And Fire](https://anapioficeandfire.com/).

## Features

- Explore information about different houses in Game of Thrones.
- View houses in a grid layout.
- Mark your favorite houses with a star button.
- Persistent storage for favorite houses in the "Favorites" page.
- Utilizes Mobx for state management.
- Styled using Material-UI.
- Data fetched from the An API of Ice and Fire.
  
## Technologies

- **[React](https://react.dev/)**: A popular JavaScript library for building user interfaces.
- **[TypeScript](https://www.typescriptlang.org/)**: A statically typed superset of JavaScript for improved code quality and tooling.
- **[Vite](https://vitejs.dev/)**: A fast build tool and development environment for modern web apps.
- **[Mobx](https://mobx.js.org/)**: A state management library for handling application state.
- **[Axios](https://axios-http.com/)**: A library for making HTTP requests to the API.
- **[Material-UI](https://mui.com/)**: A React component library for designing modern and responsive UIs.
  
## Getting Started

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/LTimur/test_plarin.git
2. Change into the project directory:
   ```bash
   cd test_plarin
3. Install the project dependencies:
   ```bash
   npm install
4. Start the development server:
   ```bash
   npm run dev
5. Open your web browser and visit http://localhost:5173 to view the application.

## Usage

- Explore the grid of house cards.
- Use the star button to add a house to your favorites.
- Navigate to the "Favorites" page to view your saved favorite houses.

## Project Folder Structure

- `src/`: The main source code directory.

  - `app/`: Сontains core application-specific code and configurations.
  
  - `assets/`: Contains project assets.

  - `components/`: Houses reusable React components.

  - `entities/`: Defines TypeScript models.

  - `stores/`: MobX state management stores.

## Deployment 

Game of Thrones Encyclopedia application is live and hosted on [Netlify](https://www.netlify.com/). You can access it by visiting https://testplaringot.netlify.app/.
 
# FlowrSpot Web Application

## Project Description

FlowrSpot is a modern web application designed for flower enthusiasts. It allows users to spot different flowers, learn about their details, share sightings, and engage with a community of fellow nature lovers. Built with React and TypeScript, the application offers a responsive design, a user-friendly interface, and seamless interaction.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before running the project, ensure you have the following installed on your system:

- Node.js (14.x or higher)
- npm (7.x or higher)

### Installation

1. **Clone the Repository**

   ```bash
   git clone [repository URL]
   cd flowrspot
   ```

2. **Install Dependencies**

   Navigate to the project directory and install the necessary dependencies:

   ```bash
   npm install
   ```

3. **Husky Setup**

   To set up Git hooks with Husky, run:

   ```bash
   npm run prepare
   ```

   This will install Husky and enable the pre-commit hooks.

### Running the Application

- **Development Mode**

  To run the application in development mode with hot-reload:

  ```bash
  npm run dev
  ```

  The application will be available at `http://localhost:3000`.

- **Production Build**

  To create a production build:

  ```bash
  npm run build
  ```

  The build artifacts will be stored in the `dist/` directory.

- **Preview Production Build**

  To preview the production build locally:

  ```bash
  npm run preview
  ```

### Linting

To run ESLint for code quality checks:

```bash
npm run lint
```

This will check for any linting errors across `.ts` and `.tsx` files.

## Project Structure

The FlowrSpot project is organized into several key directories for efficient development and easy maintenance:

```
flowrspot-web/
├── src/
│   ├── components/        # Shared components
│   │   ├── Button/
│   │   ├── Modal/
│   │   ├── Navbar/
│   │   └── ...
│   ├── features/          # Feature-specific components
│   │   ├── Auth/          # Authentication related components
│   │   │   ├── Login/
│   │   │   ├── Signup/
│   │   │   └── Profile/
│   │   ├── FlowersList/   # Component to list flowers
│   │   └── ...
│   ├── hooks/             # Custom hooks
│   ├── pages/             # Page components
│   │   ├── Home/
│   │   ├── About/
│   │   └── ...
│   ├── utils/             # Utility functions
│   ├── app/               # Root component and setup
│   │   ├── App.tsx
│   │   └── ...
│   ├── styles/            # Global and shared styles
│   ├── types/             # TypeScript types and interfaces
│   └── main.tsx           # Entry point
├── public/                # Public assets
├── tests/                 # Test files
├── .eslintrc.js           # ESLint configuration
├── .prettierrc            # Prettier configuration
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
├── package.json
└── README.md
```

This structure helps in organizing the code into logical segments, making it easier to manage and understand.

## Authors

- **Alem Tatarević** - _Initial work_ - [mrbosco](https://github.com/mrbosco)

## License

This assignment is protected with Povio Inc.’s copyright. The Candidate may upload the assignment on his closed profile on GitHub (or other platform), but any other reproduction and distribution of the assignment itself or the assignment’s solutions without written permission of Povio Inc. is prohibited.

# FlowrSpot Web Application

## Project Description

FlowrSpot is a modern web application designed for flower enthusiasts. It allows users to spot different flowers, learn about their details, share sightings, and engage with a community of fellow nature lovers. Built with React and TypeScript, the application offers a responsive design, a user-friendly interface, and seamless interaction.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before running the project, ensure you have the following installed on your system:

- Node.js (14.x or higher)
- npm (7.x or higher)

You can check your Node.js and npm versions with `node -v` and `npm -v` commands, respectively.

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

## Testing

- Run `npm run test` to execute tests using Jest.
- Test files are located in the `__tests__` directory.

## Husky Configuration and Process

Husky is a tool used to manage Git hooks in your project. It ensures that certain quality checks and standards are met before code is committed or pushed to the repository. This helps in maintaining code quality and consistency across the project.

### Configuration:

- Husky is configured in your project via the `.husky/` directory, which contains the hook scripts.
- The `prepare` script in `package.json` is used to set up Husky when you run `npm install`.

### Process:

- When you try to commit your changes, Husky triggers pre-commit hooks defined in the project. These hooks can run linters, formatters, or any other scripts as configured.
- If these scripts pass, the commit is successful. If they fail, the commit is aborted, and you need to fix the issues before proceeding.
- Commonly used hooks are `pre-commit` for running lint checks and `pre-push` for running tests.

To use Husky effectively, ensure that you have it installed and configured correctly. The hooks will help maintain code quality and prevent problematic code from entering your codebase.

## Project Structure

The FlowrSpot project is organized into several key directories for efficient development and easy maintenance:

```
.
├── .gitignore                # Git ignore file
├── index.html                # Entry HTML file
├── jest.config.ts            # Configuration for Jest testing framework
├── package.json              # Project metadata and dependency list
├── README.md                 # Project overview and documentation
├── tsconfig.json             # TypeScript configuration
├── tsconfig.node.json        # TypeScript configuration for Node.js
├── vite.config.ts            # Vite configuration for build and development
├── package-lock.json         # Locked versions of npm dependencies
├── public/                   # Public assets like images and favicons
│   ├── avatars/              # Avatar images
│   └── favicon.svg           # Favicon file
└── src/                      # Source files
    ├── __mocks__/            # Mock files for Jest tests
    ├── app/                  # App-level components and setup
    ├── assets/               # Static assets like images and icons
    ├── components/           # Reusable UI components
    │   ├── Button/
    │   ├── Modal/
    │   └── Navigation/
    ├── features/             # Feature-specific components
    ├── hooks/                # Custom React hooks
    ├── modals/               # Modal components for the application
    ├── pages/                # Components representing pages
    ├── services/             # Service functions for API calls and data management
    ├── stores/               # State management using stores
    ├── styles/               # Global styles and styling utilities
    ├── __tests__/            # Test files for unit and integration tests
    ├── main.tsx              # Entry point for React components
    ├── setupTests.ts         # Setup file for Jest tests
    └── vite-env.d.ts         # TypeScript declarations for Vite environment variables
```

This structure helps in organizing the code into logical segments, making it easier to manage and understand.

## Authors

- **Alem Tatarević** - _Initial work_ - [mrbosco](https://github.com/mrbosco)

## License

This assignment is protected with Povio Inc.’s copyright. The Candidate may upload the assignment on his closed profile on GitHub (or other platform), but any other reproduction and distribution of the assignment itself or the assignment’s solutions without written permission of Povio Inc. is prohibited.

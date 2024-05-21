# React-Typescript-Eslint-Webpack Template

This is a template for a React application built with TypeScript and Webpack.

## Features

- **TypeScript**: The project is written in TypeScript, which provides static type checking and improved developer experience.
- **Webpack**: The project uses Webpack as the bundler, allowing for easy configuration and optimization.
- **Linting and Formatting**: The project uses ESLint and Prettier to enforce code style and quality.
- **Husky and Lint-Staged**: Git hooks are set up to run linting and formatting on staged files before committing.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/my-app.git
   ```

2. Install dependencies:

   ```bash
   cd my-app
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

   This will start the Webpack development server and open the application in your default browser.

## Scripts

- `npm start`: Starts the Webpack development server.
- `npm build`: Builds the production-ready bundle.
- `npm lint`: Runs ESLint on the `src` directory.
- `npm lint:fix`: Runs ESLint with the `--fix` option to automatically fix linting issues.
- `npm prettify`: Runs Prettier to format the code in the `src` directory.
- `npm check`: Runs the TypeScript compiler to check for type errors.

## Dependencies

- `react`: ^17.0.1
- `react-dom`: ^17.0.1

## Development Dependencies

- `@babel/core`: ^7.24.5
- `@babel/plugin-transform-runtime`: ^7.24.3
- `@babel/preset-env`: ^7.24.5
- `@babel/preset-react`: ^7.24.1
- `@babel/preset-typescript`: ^7.24.1
- `@babel/runtime`: ^7.24.5
- `@types/node`: ^20.12.12
- `@types/react`: ^18.3.2
- `@types/react-dom`: ^18.3.0
- `@types/webpack`: ^5.28.5
- `@typescript-eslint/eslint-plugin`: ^7.9.0
- `@typescript-eslint/parser`: ^7.9.0
- `babel-loader`: ^9.1.3
- `clean-webpack-plugin`: ^4.0.0
- `css-loader`: ^7.1.1
- `eslint`: 8.57.0
- `eslint-config-prettier`: ^9.1.0
- `eslint-plugin-prettier`: ^5.1.3
- `eslint-plugin-react`: ^7.34.1
- `eslint-plugin-react-hooks`: ^4.6.2
- `eslint-plugin-sonarjs`: ^1.0.3
- `eslint-webpack-plugin`: ^4.1.0
- `fork-ts-checker-webpack-plugin`: ^9.0.2
- `html-webpack-plugin`: ^5.6.0
- `husky`: ^9.0.11
- `lint-staged`: ^15.2.2
- `prettier`: ^3.2.5
- `style-loader`: ^4.0.0
- `ts-node`: ^10.9.2
- `typescript`: ^5.4.5
- `webpack`: ^5.91.0
- `webpack-cli`: ^5.1.4
- `webpack-dev-server`: ^5.0.4

## License

This project is licensed under the [MIT License](LICENSE).

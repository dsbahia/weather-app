# Weather App

A simple weather application built using React that allows users to retrieve weather forecasts by city.

## Features

- Users can search for a weather forecast by city.
- Detailed weather information is displayed when a city is selected.
- An error message is shown on the screen if an invalid city name is entered.

## Installation

1. Clone the repository:

`git clone https://github.com/dsbahia/weather-app.git`

2. Install the dependencies:

`npm install`

3. Start the application:

`npm start`

4. Open your web browser and go to http://localhost:3000 to use the Weather App.

## Tools and Technologies Used

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [Axios](https://axios-http.com/): A promise-based HTTP client for making API requests.
- [Testing Library](https://testing-library.com/): A set of utilities for testing React components.
  - [@testing-library/jest-dom](https://github.com/testing-library/jest-dom): Custom jest matchers for easier testing.
  - [@testing-library/react](https://github.com/testing-library/react-testing-library): Testing utilities for React components.
  - [@testing-library/user-event](https://github.com/testing-library/user-event): Simulate user events for testing.
- [ESLint](https://eslint.org/): A tool for identifying and reporting code quality issues.
  - [eslint-config-airbnb](https://github.com/airbnb/javascript): Airbnb's JavaScript style guide.
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import): ESLint plugin for linting import/export syntax.
  - [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y): ESLint plugin for accessibility rules.
  - [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier): ESLint plugin for Prettier integration.
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react): ESLint plugin for React-specific linting rules.
  - [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks): ESLint plugin for React Hooks linting.
- [Prettier](https://prettier.io/): Code formatter for consistent code style.

## API Reference

The Weather App utilizes the Command Shift Weather API to retrieve 5-day weather forecasts for different cities. The instructions for this API can be found by clicking the link below.

- **Endpoint**: `https://cmd-shift-weather-app.onrender.com/forecast`

## Contributing

Contributions are welcome! If you have suggestions for improvements, found any issues, or want to add new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License.](https://opensource.org/license/mit/)

## Acknowledgments

To follow.

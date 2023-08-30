# Chandrayaan 3 Lunar Craft: Galactic Space Craft Control
Problem statement: [Chandrayaan 3 Spacecraft Control Program using TDD](https://blog.incubyte.co/blog/chandrayaan-3-tdd-assessment)

Welcome to the Chandrayaan 3 Lunar Spacecraft Command Translator project!
This program is designed to help you control the latest lunar spacecraft, Chandrayaan 3, by translating commands sent from Earth into instructions understood by the spacecraft.
The spacecraft navigates through the galaxy using galactic coordinates (x for east or west location, y for north or south location, and z for distance above or below the galactic plane).

## Table of Contents
1. [Features](#features)
2. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
3. [Testing](#testing)
4. [Contributing](#contributing)
5. [License](#License)
6. [Author](#Author)

## Features
- Move the spacecraft forward or backwards (f, b): The spacecraft moves one step forward or backwards based on its current direction.
- Turn the spacecraft left or right (l, r): The spacecraft rotates 90 degrees to the left or right, changing its facing direction.
- Turn the spacecraft up or down (u, d): The spacecraft changes its angle, rotating upwards or downwards.

## Getting Started
Follow these instructions to get the program up and running.

### Prerequisites
- [Node.js](https://nodejs.org/)
- A code editor of your choice.

### Installation
1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/tusharVerma14/Incubyte_Chandrayan_Assessment.git
    ```
2. Navigate to the project directory:
   ```bash
   cd chandrayaan-3-command-translator-tdd
   ```
3. Install the required dependencies:
   ```bash
   npm ci
   ```
   Please use `npm ci` to avoid unnecessary changes in `package-lock.json`.

## Testing
This project uses [Jest](https://jestjs.io/) for testing. To run the tests, execute the following command:
```bash
npm test
```
The test suite will ensure the spacecraft's navigation and orientation functions work correctly.

## Contributing
Contributions to this project are welcome! If you have any suggestions, or bug reports, or would like to add new features, please follow these steps:

1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine.
3. Create a new branch for your feature or bug fix:
    ```bash
    git checkout -b ＜new-branch-name＞
    ```
4. Make your changes and commit them with clear, concise commit messages.
5. Push your changes to your fork on GitHub:
   ```bash
   git push origin ＜new-branch-name＞
   ```
6. Create a pull request from your fork to the main repository on GitHub.

## License
This project is licensed under the [MIT License](LICENSE).

## Author
- [Tushar Verma](https://github.com/tusharVerma14)

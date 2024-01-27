# Optiver assesment practice tools

A limited collection of tools to practice for the optiver assessments

## 80 in 8
This web application allows users to practice math by taking a timed test consisting of various math questions. The application is designed to run locally and provides a straightforward and interactive way for users to enhance their math skills.

### Features

- Timed math tests with a total of 80 questions displayed one at a time.
- Input (auto generated or self made) formulas in the questions_gen list of questions, and the answers and alternatives will be generated automatically to form complete questions.
- Tracking of correct and incorrect answers with a simple and playful user interface.
- A final dashboard that shows user performance upon test completion.

### Getting Started

To get started with this application, you'll need to have Python installed on your system. The application uses Flask, a micro web framework written in Python.

#### Prerequisites

- Python 3
- Flask

You can install Flask using pip:

```bash
pip install flask
```

### Running the Application
Clone the repository to your local machine.
Navigate to the cloned directory.
Run the following command to start the Flask server:

```bash
python app.py
```

Open your web browser and go to http://127.0.0.1:5000/ to start the test.

### Contributing
We welcome contributions to this project! There's a lot to improve, and with your help, we can make this application even better. Here are some areas where you can help:

- OpenAI API Integration: Currently, the application does not auto-generate new questions. Integrating with OpenAI's API could allow for dynamic question generation.
- Styling Improvements: The UI is basic and functional. If you have a knack for design, your styling improvements would be much appreciated.
- Final Dashboard Enhancements: We'd like to offer more detailed feedback to users in the final dashboard, such as showing which questions were answered correctly or incorrectly.
If you're interested in contributing, please feel free to fork the repository and submit a pull request with your changes.


## NumberBoxGame

NumberBoxGame is a Python-based mathematical puzzle game designed to help users practice arithmetic operations and problem-solving skills. It is inspired by the challenges presented in Optiver assessments and provides a platform for users to enhance their numerical reasoning abilities.

### Features

- Dynamically generated puzzles with user-defined complexity.
- A brute-force solution algorithm to ensure puzzles are solvable.
- Interactive gameplay through the command line, allowing users to enter their solutions and get instant feedback.
- Detailed explanation of the solution if the user is unable to solve the puzzle.

### Getting Started

To play the NumberBoxGame, you will need Python installed on your computer. The game is run entirely through the command line and does not require any external libraries.

#### Prerequisites

- Python 3.x

#### Installation

No additional installation is required. Clone the repository to your local machine, and you're ready to play.

### Running the Game
Open the notebook and run the cells to play the game. The game will prompt you to come up with a solution for the given puzzle.

#### How to Play
Once the game starts, you will be presented with a set of numbers and a target number. Your goal is to use all the given numbers exactly once, applying arithmetic operations (+, -, *, /) between them to reach the target number.

For example, if the numbers are 2, 3, 4 and the target is 14, a valid solution could be 4 * 3 + 2.

If incorrect, it will show you how your approach does not lead to the target number, and gives you another chance (3 total). Thereafter, (or when typing "-q"), it will show you the solution.


## License
All projects here are open-source and available for anyone to use and modify.

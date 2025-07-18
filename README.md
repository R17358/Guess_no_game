# Guess Number Game

A simple and fun command-line game where you try to guess a randomly generated number within a limited number of attempts. This project is great for beginners learning basic programming concepts such as loops, conditionals, and user input.

## Features

- Random number generation for each game session
- Configurable range for guessing (default: 1-100)
- Limited number of attempts (default: 10)
- Feedback after each guess: "Too high", "Too low", or "Correct!"
- Option to play again after a game ends

## Getting Started

### Prerequisites

- [Python 3.x](https://www.python.org/downloads/) installed on your machine

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/guess-number-game.git
   cd guess-number-game
   ```

2. (Optional) Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

### Running the Game

```bash
python guess_number.py
```

Follow the on-screen instructions to play.

## Example Gameplay

```
Welcome to the Guess Number Game!
I have selected a number between 1 and 100.
You have 10 attempts to guess it.

Enter your guess: 50
Too low!

Enter your guess: 75
Too high!

Enter your guess: 63
Correct! You guessed the number in 3 attempts!
```

## Customization

You can change the guessing range or number of attempts by editing the variables at the top of `guess_number.py`:

```python
MIN_NUMBER = 1
MAX_NUMBER = 100
MAX_ATTEMPTS = 10
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## Author

[Ritesh Pandit](https://github.com/yourusername)

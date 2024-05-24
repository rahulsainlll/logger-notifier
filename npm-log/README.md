# Logger-Notifier (Soon)

Logger-Notifier is a versatile npm package designed primarily for debugging purposes. It provides a straightforward way to log messages to the console and display notifications. This package enhances the traditional logging experience by allowing developers to categorize messages into different types (e.g., informational, error) and customize the display of notifications accordingly.

## Installation

To install Logger-Notifier, simply use npm:

```bash
npm install logger-notifier
```

## Usage

Logger-Notifier can be utilized in various scenarios where debugging is required. It offers flexibility in logging messages and displaying notifications based on the logged data. Below is an example of how you can use Logger-Notifier:

```javascript
const logger = require('logger-notifier');

// Log an informational message
logger.log("Info", "This is an informational message");

// Log an error message
logger.err("Oops! Something went wrong", "Error");
```

In the above example, we first import the logger module and then use it to log messages. The `log` function is employed for logging informational messages, while the `err` function is used for logging error messages. Both functions accept two parameters: `title` and `body`. Additionally, you can specify the `type` of the log message, which defaults to 'log' if not explicitly provided.

## Debugging

Logger-Notifier shines as a debugging tool, aiding developers in identifying issues during development. It allows you to log variables, objects, or any data you want to inspect. Consider the following example demonstrating how Logger-Notifier can be used for debugging:

```javascript
import React, { useState } from "react";
import logger from "logger-notifier";

function Counter() {
  const [count, setCount] = useState(0);

  // Log the initial state
  logger.log("Initial count:", count);

  // Function to increment the count
  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    logger.log("Count incremented to", newCount);
  };

  // Function to decrement the count
  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    logger.log("Count decremented to", newCount);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
```

In this example, the `Counter` component maintains a count state using the useState hook. The initial count state is logged when the component mounts using Logger-Notifier. Each button click triggers a corresponding function (`increment` or `decrement`), updating the count state and logging the new count using Logger-Notifier.

## Features

- Log messages to the console with different types (e.g., informational, error).
- Display notifications based on the logged messages.
- Convenient debugging tool for identifying issues during development.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

Feel free to customize this README to suit your preferences or add more details!
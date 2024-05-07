# Logger-Notifier (Soon)

Logger-Notifier is a simple npm package that provides a convenient way to log messages to the console and display notifications. It enhances the traditional logging experience by also sending notifications to users, ensuring that important messages are not missed.


## Installation

To install logger-notifier, use npm:

```bash
npm install logger-notifier
```

## Usage

```bash
const Logger = require('logger-notifier');

// Log a message with default type 'log'
Logger('Info', 'This is an informational message');

// Log an error message
Logger('Error', 'This is an error message', 'error');
```

## Parameters

title: Title or tag for the log message.
body: Content of the log message.
type (optional): Type of the log message, default is 'log'. Can be 'log' or 'error'.

## Example

```bash
const Logger = require('logger-notifier');

Logger('Info', 'This is an informational message');

Logger('Error', 'This is an error message', 'error');
```

## Notifications

Logger Notifier utilizes the browser's Notification API to display notifications. If the user has granted permission, notifications will be shown. If permission is not granted, the browser will request it.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

Feel free to modify this README to suit your preferences or add more details!

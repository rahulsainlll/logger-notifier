function Logger(title, body, type = "log") {
  switch (type) {
    case "log":
      console.log(title + ": " + body);
      break;
    case "error":
      console.error(title + ": " + body);
      break;
    default:
      console.log(title + ": " + body);
  }

  // Display notification
  if (Notification.permission === "granted") {
    new Notification(title, { body: body });
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        new Notification(title, { body: body });
      }
    });
  }
}

module.exports = Logger;

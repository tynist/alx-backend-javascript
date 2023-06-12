const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  // Set the response header to plain text
  res.setHeader('Content-Type', 'text/plain');

  // Handle requests based on the URL path
  if (req.url === '/') {
    // Display "Hello Holberton School!"
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    // use countStudents function with the database file
    const databaseFile = process.argv[2];

    // Call the countStudents function to get the list of students
    countStudents(databaseFile)
      .then((result) => {
        // Display the result (list of students)
        res.statusCode = 200;
        res.end(`This is the list of our students\n${result}`);
      })
      .catch((error) => {
        // Display an error message
        res.statusCode = 500;
        res.end(`${error.message}\n`);
      });
  }
});

// Listen on port 1245
app.listen(1245);

// Export the app variable
module.exports = app;

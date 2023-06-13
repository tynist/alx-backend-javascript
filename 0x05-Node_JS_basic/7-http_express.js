const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

// Define a route for the endpoint '/students'
app.get('/students', (req, res) => {
  // Set the response header to plain text
  res.set('Content-Type', 'text/plain');

  // Retrieve the database file path from command-line arguments
  const databaseFile = process.argv[2];

  // Call the countStudents function to get the list of students
  countStudents(databaseFile)
    .then((studentData) => {
      // Display the studentData (list of students)
      const resp = `This is the list of our students\n${studentData}`;
      res.send(resp);
    })
    .catch(() => {
      // If error occurs during function call, display error message
      res.statusCode = 500; // Internal Server Error
      res.write('This is the list of our students\n');
      res.write('Cannot load the database');
      res.end();
    });
});

// Define a route for the endpoint '/' URL
app.get('/students', async (req, res) => {
  // Handle the root URL
  res.send('Hello Holberton School');
});

// Listen on port 1245
app.listen(1245);

// Export the app variable
module.exports = app;

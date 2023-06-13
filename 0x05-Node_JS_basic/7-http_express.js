const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;
const databaseFile = process.argv[2];

// Define a route for the endpoint '/students'
app.get('/students', async (req, res) => {
  countStudents(databaseFile) // Call function to get d list of students
    .then((studentData) => {
      // Display the studentData (list of students)
      const response = `This is the list of our students\n${studentData}`;
      res.send(response);
    })
    .catch(() => {
      // If error occurs during function call, display error message
      const resp = 'This is the list of our students\nCannot load the database';
      res.status(500).send(resp);
    });
});

// Define a route for the endpoint '/' URL
app.get('/', (req, res) => {
  // Handle the root URL
  res.send('Hello Holberton School');
});

// Listen on port 1245
app.listen(port);

// Export the app variable
module.exports = app;

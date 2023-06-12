const fs = require('fs');

function countStudents(path) {
  try {
    // Read the database file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the data into lines
    const lines = data.split('\n');

    // Initialize counters for each field
    const fieldCount = {};
    const fieldStudents = {};

    // Iterate over the lines and count the number of students in each field
    lines.forEach((line) => {
      // Skip empty lines
      if (line.trim() === '') {
        return;
      }

      const [, , , field] = line.split(',');

      if (fieldCount[field] === undefined) {
        fieldCount[field] = 1;
        fieldStudents[field] = [];
      } else {
        fieldCount[field]++;
      }

      const firstName = line.split(',')[0];
      fieldStudents[field].push(firstName);
    });

    // Log the total number of students
    const totalStudents = Object.values(fieldCount).reduce((sum, count) => sum + count, 0);
    console.log(`Number of students: ${totalStudents}`);

	// Log the number of students in each field and the list of first names
    Object.entries(fieldCount).forEach(([field, count]) => {
      const studentList = fieldStudents[field].join(', ');
      console.log(`${count}. List: ${studentList}`);
    });

  } catch (error) {
    // Throw an error if the database is not available
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

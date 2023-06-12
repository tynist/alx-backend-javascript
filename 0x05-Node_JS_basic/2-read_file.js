const fs = require('fs');

function countStudents(path) {
  try {
    // Read the database file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the data into lines
    const lines = data.split('\n');

    // Initialize counters and lists for each field
    const fieldCount = {};
    const fieldList = {};

    // Iterate over the lines and count the number of students in each field
    lines.forEach((line) => {
      // Skip empty lines
      if (line.trim() === '') {
        return;
      }

      const [, , , field] = line.split(',');

      if (fieldCount[field] === undefined) {
        fieldCount[field] = 1;
        fieldList[field] = [];
      } else {
        fieldCount[field]++;
      }

      const firstName = line.split(',')[0];
      fieldList[field].push(firstName);
    });

    // Log the number of students and list of first names for each field
    Object.entries(fieldCount).forEach(([field, count]) => {
      const list = fieldList[field].join(', ');
      console.log(`Number of students in ${field}: ${count}. List: ${list}`);
    });

    // Log the total number of students
    const totalStudents = Object.values(fieldCount).reduce((sum, count) => sum + count, 0);
    console.log(`Number of students: ${totalStudents}`);

  } catch (error) {
    // Throw an error if the database is not available
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

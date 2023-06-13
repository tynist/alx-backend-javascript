import { readDatabase } from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase('database.csv')
      .then((fields) => {
        let response = 'This is the list of our students\n';
        Object.entries(fields).forEach(([field, students]) => {
          response += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
        });
        res.status(200).send(response);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase('database.csv')
      .then((fields) => {
        const students = fields[major] || [];
        const response = `List: ${students.join(', ')}`;
        res.status(200).send(response);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;

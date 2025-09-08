import readDatabase from '../utils.js';

class StudentsController {
  static async getAllStudents(request, response) {
    const databaseFile = process.argv[2];

    try {
      const fields = await readDatabase(databaseFile);
      let output = 'This is the list of our students\n';

      // Sort fields alphabetically (case insensitive)
      const sortedFields = Object.keys(fields).sort((a, b) =>
        a.toLowerCase().localeCompare(b.toLowerCase())
      );

      sortedFields.forEach((field) => {
        const students = fields[field];
        output += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      });

      response.status(200).send(output.trim());
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    const databaseFile = process.argv[2];

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const fields = await readDatabase(databaseFile);
      const students = fields[major] || [];
      response.status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;

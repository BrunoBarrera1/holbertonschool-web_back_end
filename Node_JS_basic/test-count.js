const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data
        .trim()
        .split('\n')
        .filter((line) => line.trim() !== '');

      if (lines.length <= 1) {
        resolve('Number of students: 0');
        return;
      }

      const header = lines[0].split(',');
      const fieldIndex = header.length - 1;
      const students = lines.slice(1);

      let output = `Number of students: ${students.length}\n`;

      const fields = {};
      for (const line of students) {
        const parts = line.split(',');
        const firstName = parts[0];
        const field = parts[fieldIndex];

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      }

      for (const [field, names] of Object.entries(fields)) {
        output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }

      resolve(output.trim());
    });
  });
}

// Test with non-existent file
countStudents('nonexistent.csv')
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((err) => {
    console.log('Error:', err.message);
  });

import fs from 'fs';

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    if (!filePath) {
      reject(new Error('Cannot load the database'));
      return;
    }

    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        if (lines.length <= 1) {
          resolve({});
          return;
        }

        const students = lines.slice(1);
        const fields = {};

        students.forEach((student) => {
          const [firstname, , , field] = student.split(',');
          if (field && firstname) {
            if (!fields[field]) {
              fields[field] = [];
            }
            fields[field].push(firstname);
          }
        });

        resolve(fields);
      } catch (err) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

export default readDatabase;

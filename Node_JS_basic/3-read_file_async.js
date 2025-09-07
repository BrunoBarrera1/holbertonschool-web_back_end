#!/usr/bin/env node

const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        try {
          // Split into lines and filter out empty lines
          const lines = data.split('\n').filter((line) => line.trim() !== '');

          // Remove the header line
          const students = lines.slice(1);

          // Count total students
          console.log(`Number of students: ${students.length}`);

          // Group students by field
          const fields = {};

          students.forEach((student) => {
            const [firstname, , , field] = student.split(',');
            if (field) {
              if (!fields[field]) {
                fields[field] = [];
              }
              fields[field].push(firstname);
            }
          });

          // Display students by field
          Object.keys(fields).forEach((field) => {
            const studentList = fields[field];
            console.log(`Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}`);
          });

          resolve();
        } catch (err) {
          reject(new Error('Cannot load the database'));
        }
      }
    });
  });
}

module.exports = countStudents;

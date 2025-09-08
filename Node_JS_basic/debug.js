const fs = require('fs');

function countStudents(path) {
  console.log('countStudents called with path:', path);
  return new Promise((resolve, reject) => {
    if (!path) {
      console.log('No path provided, rejecting');
      reject(new Error('Cannot load the database'));
      return;
    }
    
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        console.log('Error reading file:', err.message);
        reject(new Error('Cannot load the database'));
        return;
      }
      console.log('File read successfully');
      resolve('Data processed');
    });
  });
}

// Test the function
console.log('Testing with nonexistent file...');
countStudents('nonexistent.csv')
  .then((data) => {
    console.log('Promise resolved:', data);
  })
  .catch((err) => {
    console.log('Promise rejected:', err.message);
  });

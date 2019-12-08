const fs = require('fs');

// Create new file
let teks = 'This is my new file'
fs.writeFileSync('newfile.txt', teks, (err) => {
    console.log('write file');
    if (err) throw err;
    console.log('Successfully created new file');
});

// Read file
fs.readFile(__dirname + '/newfile.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// Create directory
// Create file in directory


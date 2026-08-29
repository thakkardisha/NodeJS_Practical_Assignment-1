const fs = require("fs");

// Create and write a file
fs.writeFileSync("sample.txt", "Hello NodeJS!");
console.log("File created.");

// Read the file
let data = fs.readFileSync("sample.txt", "utf8");
console.log("File content:", data);

// Add more data
fs.appendFileSync("sample.txt", "\nWelcome to NodeJS.");
console.log("Data appended.");

// Check if file exists
console.log("File exists:", fs.existsSync("sample.txt"));

// Get file information
let info = fs.statSync("sample.txt");
console.log("File size:", info.size, "bytes");

// Rename the file
fs.renameSync("sample.txt", "newfile.txt");
console.log("File renamed.");
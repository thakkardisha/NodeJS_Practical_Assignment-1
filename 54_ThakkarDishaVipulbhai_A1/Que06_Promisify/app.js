const fs = require("fs");
const util = require("util");

const deleteFile = util.promisify(fs.unlink);

deleteFile("sample.txt")
    .then(() => {
        console.log("File deleted successfully.");
    })
    .catch((error) => {
        console.log("Error:", error.message);
    });
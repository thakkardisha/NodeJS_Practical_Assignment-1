const fs = require("fs");
const archiver = require("archiver");

const output = fs.createWriteStream("sample.zip");

const archive = archiver("zip");

archive.pipe(output);

archive.directory("sample", false);

archive.finalize();

output.on("close", () => {
    console.log("Folder compressed successfully.");
});
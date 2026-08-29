const readline = require("readline");
const getResponse = require("./chatbot");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("College Chatbot");
console.log("Type 'exit' to stop.");

rl.question("You: ", (message) => {

    if (message.toLowerCase() === "exit") {
        rl.close();
    } else {
        console.log("Chatbot:", getResponse(message));
        rl.close();
    }

});
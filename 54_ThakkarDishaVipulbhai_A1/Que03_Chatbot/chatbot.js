function getResponse(message) {

    message = message.toLowerCase();

    if (message === "hello") {
        return "Hello! How can I help you?";
    }

    if (message === "courses") {
        return "We offer Msc IT and Msc ICT courses.";
    }

    if (message === "fees") {
        return "Please contact the college office for fee details.";
    }

    if (message === "library") {
        return "The library is open from 8 AM to 6 PM.";
    }

    return "Sorry, I don't understand.";
}

module.exports = getResponse;
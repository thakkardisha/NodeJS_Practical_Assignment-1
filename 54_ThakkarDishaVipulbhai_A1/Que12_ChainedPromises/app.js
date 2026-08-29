function task1() {
    return new Promise((resolve) => {

        setTimeout(() => {
            console.log("Task 1 completed.");
            resolve("Data from Task 1");
        }, 1000);

    });
}

function task2(data) {
    return new Promise((resolve) => {

        setTimeout(() => {
            console.log("Task 2 completed using:", data);
            resolve("Data from Task 2");
        }, 1000);

    });
}

function task3(data) {
    return new Promise((resolve) => {

        setTimeout(() => {
            console.log("Task 3 completed using:", data);
            resolve("All tasks completed.");
        }, 1000);

    });
}

task1()
    .then((data) => task2(data))
    .then((data) => task3(data))
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log("Error:", error);
    });
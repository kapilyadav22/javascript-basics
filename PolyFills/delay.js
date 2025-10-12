function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Resolved after ${ms} ms`);
        }, ms);
    });
}

delay(2000).then((msg) => console.log(msg));
// Output after 2 seconds: "Resolved after 2000 ms"


async function runDelay() {
    console.log("Start");
    const result = await delay(1500);
    console.log(result);
    console.log("End");
}

runDelay();

// Output after 1.5 seconds:
// Start
// Resolved after 1500 ms
// End


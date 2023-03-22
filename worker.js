onmessage = (e) => {
    console.log("Message received from main script");
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    let o = 0;
    for (let i = 0; i < 10000 * 10000; i++) {
        o += 1;
    }
    setTimeout(() => { console.log(o); }, 5000);
    console.log("Posting message back to main script");
    postMessage(workerResult);
};

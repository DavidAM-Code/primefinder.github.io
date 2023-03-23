function workWithWorker() {
    const myWorker = new Worker("worker.js");
    myWorker.postMessage([1, 1]);
    console.log("Message posted to worker");
    myWorker.onmessage = () => {
        console.log('received');
    };
}
function primesTo(n) {
    let removed = new Array(n).map(_ => false);
    const bound = n * n;
    for (let i = 2; i <= bound; i++) {
        if (!removed[i]) {
            for (let j = i * i; j <= n; j += i) {
                removed[j] = true;
            }
        }
    }
    let primes = [];
    for (let i = 0; i < removed.length; i++) {
        if (!removed[i]) {
            primes.push(i);
        }
    }
    return primes;
}
document.getElementById("submitButton").onclick = function () {
    workWithWorker();
    const primliste = document.getElementById("primliste");
    let array = [];
    const inputElement = document.getElementById('inputText');
    const input = inputElement.value;
    console.log(input);
    const num = parseInt(input);
    console.log(num);
    let res = primesTo(num).map(x => x.toString());
    console.log(res);
    while (primliste.firstChild) {
        primliste.removeChild(primliste.firstChild);
    }
    for (const elem of res) {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(elem));
        li.appendChild(document.createElement("br"));
        primliste.appendChild(li);
    }
    window.scrollTo(0, document.body.scrollHeight);
};

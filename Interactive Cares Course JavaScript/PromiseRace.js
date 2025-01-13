const promise1 = Promise.resolve("I am Promise 1");

const promise2 = new Promise((res, rej) => {
    let a  = true;

    setTimeout(() => {
        if(!a) {
            res("I am promise 2");
        } else {
            rej(new Error("I am error from promise 2"));
        }
    }, 2000);
});

Promise.race([promise1, promise2])
    .then((res) => console.log(res))
    .catch((err) => console.log(err.message));
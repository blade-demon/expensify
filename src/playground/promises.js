const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is resolved data.");
    console.log("during settimeout");
  }, 3000);
});

console.log("before");

promise.then(data => {
  console.log("1:" + data);
});

promise.then(data => {
  console.log("2:" + data);
});

console.log("after");

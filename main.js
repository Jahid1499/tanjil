const promise1 = Promise.resolve("this is a resolved promise 1");
const promise2 = new Promise((resolve, _reject) => {
  setTimeout(() => {
    resolve("this is a rejected promise 2");
  }, 5000);
});
const promise3 = Promise.resolve("this is a resolved promise 3");

Promise.allSettled([promise1, promise2, promise3])
  .then((values) => {
    console.log("All promises resolved:");
    console.log(values);
  })
  .catch((error) => {
    console.log("At least one promise rejected:");
    console.log(error);
  });


  console.log("Hello world! This is a test of Promise.allSettled.");
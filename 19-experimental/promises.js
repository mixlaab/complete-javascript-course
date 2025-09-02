const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(10), 10000);
});

myPromise
  .then((result) => {
      console.log(result); // 10
      return result * 2;
  })
  .then((result) => {
      console.log(result); // 20
      return result * 3;
  })
  .then((result) => {
      console.log(result); // 60
  })
  .catch((error) => {
      console.error(error);
  });

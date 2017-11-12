var prom = new Promise((resolve, reject) => {
  
  setTimeout(() => {
    // resolve('it worked!');
    reject('fatal error!');
  }, 2500);
});



prom.then((data) => {
  console.log(data);
}, (msg) => {
  console.log(msg);
});
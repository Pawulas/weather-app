console.log("start up");

setTimeout(() => {
  console.log('inside callback');
}, 2000);

setTimeout(() => {
  console.log('inside callback 2');
}, 0);










console.log('finishing up');
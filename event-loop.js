const fs = require('fs'); // THIS CODE WILL EXECUTE FIRST. BECAUSE IT IS A TOP LEVEL CODE
const crypto = require('crypto');

// THIS CODE WILL EXECUTE AFTER 0 SECOND, BUT NOT BEFORE TOP LEVEL CODE. BECAUSE IT HAS A CALLBACK FUNCTION
setTimeout(() => console.log('Timer 1 Finished'), 0);

// THIS CODE WILL EXECUTE IMMEDIATELY, BUT NOT BEFORE TOP LEVEL CODE. BECAUSE IT HAS A CALLBACK FUNCTION
setImmediate(() => console.log('Immediate 1 Finished'));

/////////////////////////////////////////////////////////
fs.readFile('test-file.txt', () => {
  console.log('I/O finished');

  setTimeout(() => console.log('Timer 2 Finished'), 0);
  setTimeout(() => console.log('Timer 3 Finished'), 3000);
  setImmediate(() => console.log('Immediate 2 Finished'));

  process.nextTick(() => {
    console.log('process.nextTick');
  });
}); // FILE READ USES THE THREAD POOL. IT HAS THE LESS PRIORITY OF ALL CODE

// THIS CODE WILL ALSO EXECUTE FIRST. BECAUSE THIS IS A TOP LEVEL CODE. OUTSIDE OF ANY CALLBACK FUNCTION
console.log('Hello from the top level code');

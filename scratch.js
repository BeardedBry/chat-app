/* Input */

// const args = require('minimist');

// const arg = args(process.argv.slice(2));

// console.log('my name is %s', arg['name']);

// const oranges = ['orange', 'orange', 'orange'];

// console.time('counting');

// oranges.forEach(fruit => console.count(fruit));

// console.timeEnd('counting');

// const doSomething = () => console.log('test')
// const measureDoingSomething = () => {
//   console.time('doSomething()')
//   //do something, and measure the time it takes
//   doSomething()
//   console.timeEnd('doSomething()')
// }
// measureDoingSomething()

/* CLI */

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question(`What's your name? `, name => {
//     console.log(`Hi ${name}!`);
// });

// rl.prompt();

// rl.on('line', (line) => {
//     switch (line.trim()) {
//         case 'hello':
//             console.log('world');
//             break;
//         default:
//             console.log('Invalid Command');
//             break;
//     }
//     rl.prompt();
// }).on('close', () => {
//     console.log('Have a great day!');
//     process.exit(0);
// });

/*
    'inquirer' looks like a great npm package for handeling input and quiz like questions.
*/


/* Read File Stream */

// const fs = require('fs');
// const readline = require('readline');


// const rl = readline.createInterface({ 
//     input: fs.createReadStream('input.txt'),
//     crlfDelay: Infinity
// });

// rl.on('line', (line) => {
//     console.log(`Line from file: ${line}`);
// });


/* Promises :( */

// let done;

// const isItDoneYet = new Promise((resolve,reject) => {
//     if(done){
//         const workDone = 'Here it is, its done.';
//         resolve(workDone);
//     }else {
//         const why = 'Still not done yet.';
//         reject(why);
//     }
// });



// console.log(isItDoneYet.then(done => console.log(done)).catch(er => console.log(er)));
const fs = require('fs');


// Sync
console.log(1);
const data = fs.readFileSync('data.txt', {encoding:'utf8'});
console.log(data)

// Async
console.log(2);
fs.readFile('data.txt', {encoding:'utf8'}, function(err, data) {
  console.log(3);
  console.log(data);
})

console.log(4);

// 실행결과
// 1
// Hello Sync And Async
// 2
// 4
// 3
// Hello Sync And Async
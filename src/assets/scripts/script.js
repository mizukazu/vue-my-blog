const fs = require('fs');
const marked = require('marked');
const post = '../data/post/test.md';

// const md = marked(test);

const data = await readFile(post);

console.log(data);

async function readFile(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, {encoding: 'utf8'}, (err, data) => {
      if (err) {

        
        reject(err);
      }
      resolve(data);
    });
  }
)};

// fs.readFile(post, {encoding: 'utf8'}, (err, data) => {
//   if (err) {
//     console.error(err.message);
//     return;
//   }
//   console.log(data);
// })

// const readFile = (file) => {
//   fs.readFile(file, {encoding: 'utf8'}, (err, data) => {
//     if (err) {
//       console.error(err.message);
//       return;
//     }
//     return data;
//   })
// }

// const html = readFile(post);

// console.log(html);
// let post = {
//   title: 'a',
//   body: 'b',
//   author: 'c',
//   views: 10,
//   comment: [
//     { author: 'a', body: 'b' },
//     { author: 'c', body: 'd' },
//   ],
//   isLive: true,
// };

let post = new Post('a', 'b', 'c');
console.log(post);

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comment = [];
  this.isLive = false;
}

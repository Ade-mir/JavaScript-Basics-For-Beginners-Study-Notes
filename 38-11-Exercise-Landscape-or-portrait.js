// How I wrote the function to return true if the image is landscape and false if the image is portrait.

// function isLandscape(width, height) {
//   return width > height ? true : false;
// }

// let image = isLandscape(1920, 1080);
// console.log(image);

// How Mosh wrote it.

// function isLandscape(width, height) {
//   if (width > height) return true;
//   return false;
// }

// How Mosh wrote it with conditional operator. Just like I wrote it. However i goes on to explain that it is amateurish because the return 'true : false' return on the end is not needed. The expression will evaluate the expression as either true if the condition is met, and return true, and false if it is not met.

// function isLandscape(width, height) {
//   return width > height ? true : false;
// }

// How Mosh re-wrote it to be cleaner and not amateurish.

function isLandscape(width, height) {
  return width > height;
}

console.log(isLandscape(3000, 1000));

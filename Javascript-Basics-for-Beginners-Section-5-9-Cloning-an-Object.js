const circle = {
  radius: 1,
  draw() {
    console.log('draw');
  },
};

// const another = {};
// for (let key in circle) another[key] = circle[key];

// const another = Object.assign({}, circle);

const another = { ...circle };

console.log(another);

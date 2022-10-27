// method -> obj
// function -> global (window, global)

const video = {
  title: 'a',
  play() {
    console.log(this);
  },
};

video.play();

// Daniel Shiffman
// http://youtube.com/thecodingtrain
// https://thecodingtrain.com/CodingChallenges/111-animated-sprite.html

// Horse Spritesheet from
// https://opengameart.org/content/2d-platformer-art-assets-from-horse-of-spring

// Animated Sprite
// https://youtu.be/3noMeuufLZY

let spritesheet;
let spritedata;

let animation = [];

// let abstract;
let onions = [];

function preload() {
  spritedata = loadJSON('onion/onion.json');
  spritesheet = loadImage('onion/onion.png');
}

function setup() {
  createCanvas(500, 500);
  
  //this is the array from our JSON file
  let frames = spritedata.frames;

//now we loop over the array data and load each image into an array called animation
  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  }

  //make an instance of the Sprite class
  // abstract = new Sprite(animation, 100, 100, 320, 0.25);

  for (let i = 0; i < 5; i++) {
    onions[i] = new Sprite(animation, i * 100, 200, 100, random(0.1, 0.2));
  }
}

function draw() {
  background(0);

  //use the sprite class to show and animate the spritesheet
  // abstract.show();
  // abstract.animate();


  for (let onion of onions) {
    onion.show();
    onion.animate();
  }

  // image(animation[frameCount % animation.length], 0, 0);
}

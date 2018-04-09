
var slider;
var pattern = [];
var fullPattern = [];
var gridsize;
var counter;
function setup() {
    createCanvas(300,300);
    gridsize = width/9
    fullPattern = [
    [2,1], [6,1],[1,2], [3,2], [5,2], [7,2],
    [1,3], [4,3], [7,3],[1,4], [7,4],
    [1,5], [7,5],[2,6], [6,6],[3,7], [5,7],[4,8]];
    pattern = [];
    counter = 0;
    frameRate(2);
    slider = createSlider(0.01,1.0, 0.9,0);
    //curveTightness(0.9);
   // slider.position(10, 200);
   // slider.style('height', '80px');

}

function draw() {
      var val = slider.value();
      background(255, 0, 0);
      for(s = 0; s < pattern.length; s++){
        stroke(255);//.....threadcolor
        noFill();
        curve(width/2, mouseY, pattern[s][0]*gridsize, pattern[s][1]*gridsize, pattern[s][0]*gridsize + gridsize, pattern[s][1]*gridsize, width/2, height);
        // stroke(0);//....backcolor
        // curve(mouseY, height, pattern[s][0]*gridsize + (3/4*gridsize), pattern[s][1]*gridsize, pattern[s][0]*gridsize + gridsize, pattern[s][1]*gridsize, width/2, height);
      }
      arrayCopy(fullPattern, counter, pattern, counter, 1);
      counter += 1;
      constrain(counter, 0, fullPattern.length);
      curveTightness(val);

}


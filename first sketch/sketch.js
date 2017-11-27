var img1v2;
var img1;
// var img2;
var button;


function preload() {
//  img2 = loadImage("kitchen.png");
  img1v2 = loadImage ("room.jpg");

}


function setup() {

  createCanvas(1000, 500);

  // img2=loadImage("kitchen.png");
  // img2 = createImg(img2,0,0,img2.width*3, img2.height*3);
  //       img2.position (0, 0);
  //       img2.style ("z-index","-1");



   FaceRoom();

  button = createButton('Go get some food');
  button.position(900, 300);
  button.mousePressed(Kitchen);



}

function draw() {
NoFaceInRoom();


}

function FaceRoom() {
img1 = createImg("room.jpg");
       img1.position (0, 0);
       img1.style ("z-index","-1");



     }

function Kitchen() {
// noCanvas();
// img2=
loadImage("kitchen.png");
// img2 =
createImg("kitchen.png", 0,0,kitchen.png.width*3, kitchen.png.height*3);
      // img2.position (0, 0);
      // img2.style ("z-index","-1");


    }



function NoFaceInRoom(){
 image(img1v2, 0, 0);



  Face.MakeFace();
  Face.moveFace();
}

var Face = {
       x:100,
       y:360,


         MakeFace: function(){
           noFill();
           strokeWeight(15);
           ellipse(this.x+100, this.y-95, 45, 45);
           line(this.x+100, this.y, this.x+100, this.y-70);
           line(this.x+100, this.y, this.x+150, this.y+75);
           line(this.x+100, this.y, this.x+75, this.y+75);
           line(this.x+100, this.y-25, this.x+50, this.y-75);
           line(this.x+100, this.y-25, this.x+140, this.y-75);
         },


         moveFace: function(){ //moves the stick figure to follow the mouse position
           this.x =mouseX;
         }
       };

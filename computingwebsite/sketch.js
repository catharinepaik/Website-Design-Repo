

var img; //img variables
var img1;
var img2;
var img3;
var img4;
var img5;

var kitchenpic;//picture variables
var outsidepic;

var button1; //variables for buttons
var button1z;
var button2;
var button3;
var button4;

var texton = false; //variables for true and false texts
var texton1 = false;
var texton2 = false;
var texton3 = false;
var texton4 = false;
var man = false;

var myFont;

var flag = "nothing"; //variable flag for laying background over animation each time




function preload() {
  kitchenpic = loadImage ("kitchen2.png");
  outsidepic = loadImage("outside2.jpg");
  finalstepspic = loadImage("finalsteps.png");
  myFont=loadFont("Times New Roman Bold.ttf");
}

function setup() { //home page and moving man animation and some text statements
  createCanvas(windowWidth, windowHeight);
  button1 = createButton('Explorable Explanation');
  button1.position(300, 300);
  button1.mousePressed(FaceRoom);
  texton1 = true;
  img = createImg('https://r.hswstatic.com/w_907/gif/computer-addiction-sysk.jpg');
  img.position (515, -4);
  button1z = createButton('Facts');
  button1z.position(100, 300);
  button1z.mousePressed(facts);

  if(man==true){
    NoFaceInRoom();
    Face.MakeFace();
    Face.moveFace();
  }
  if (texton1==true){
    textFont(myFont, 32);
    fill(0);
    text("Computer Addiction",0, 100);
  }
}

function draw() { //has text true statements
  if(texton===true){
    textFont(myFont, 17);
    fill(0);
    text("Facts about computer addiction:", 0, 150);
    textAlign(RIGHT);
    text("-Nomophobia is the irrational fear of being unable to use your phone", 508, 200);
    textAlign(RIGHT);
    text("-Addiction is classified by how much it distracts from your daily life ", 503, 250);
    textAlign(RIGHT);
    text("-Computer addiction can be caused by a need to escape from daily life", 512, 300);
    textAlign(RIGHT);
    text("-Computer addiction is more likely to affect men", 358, 350);
    textAlign(RIGHT);
    text("-Addiction affects ages 20-30 but is becoming prevalent in children", 492, 400);
    text("Reload page to access explorable explanation", 500,450);
  }
  if(man==true){
    NoFaceInRoom();
    Face.MakeFace();
    Face.moveFace();
  }
  if (texton2==true){
    textFont(myFont, 18);
    fill(244, 66, 66);
    text("More than a third of American students spend more than 5 hours a day online",300, 550);
  }
  if (texton3==true){
    textFont(myFont, 18);
    fill(244, 229, 66);
    text("At least 6% of people feel that their relationships suffer from internet/computer addiction",100, 350);
  }
  if (texton4==true){
    textFont(myFont, 18);
    fill(0);
    text("Internet addicts can experience 10-20% of brain surface area loss. Fresh air improves effectiveness and concentration", 0, 350);}

}

function FaceRoom() { //fuction for the room page of the explorable explanation
  img.remove();
  flag = "room";
  button1.remove();
  button1z.remove();
  img1 = createImg("room.jpg");
  img1.position (0, 0);
  img1.style ("z-index","-1");
  button = createButton('1) Go get some food and water!');
  button.position(850, 300);
  button.mousePressed(FaceKitchen);
  man=true;
  texton1=false;
  texton2=true;

}

function FaceKitchen() { //function for the kitchen page of the explorable explanation
  flag = "kitchen";
  button.remove();
  img2=createImg("kitchen2.png");
  img2.position (0,0);
  img2.size(1024, 576);
  img2.style ("z-index","-1");
  button2 = createButton('3) Get some fresh air!');
  button2.position(900, 300);
  button2.mousePressed(FaceOutside);
  button3 = createButton('2) Call and talk to a friend!');
  button3.position(300, 300);
  button3.mousePressed(phone);
  texton1=false;
  texton2=false;
  texton3=true;
}

function phone(){ //phone function, shows the phone image
  img3=createImg("phone.png");
  img3.position (350,225);
  img3.size(100, 100);
  img3.style ("z-index","1");
  texton1=false;
  texton2=false;
}

function FaceOutside(){ //fuction for the outside page of explorable explanation
  flag = "outside";
  print(flag);
  img3.remove();
  button2.remove();
  button3.remove();
  texton4=true;
  img4=createImg("outside2.jpg");
  img4.position (0,0);
  img4.size(img4.width*1.7, img4.height);
  img4.style ("z-index","-1");
  button4 = createButton('I feel better!');
  button4.position(400, 300);
  button4.mousePressed(finalsteps);
  texton1=false;
  texton2=false;
  texton3=false;
}

function finalsteps(){ //last page of explorable explanation, lists what can help computer addiciton
  button4.remove();
  img5=createImg("finalsteps.png");
  img5.position (300,150);
  img5.size(300, 300);
  texton4=false;
}

function facts() { //facts about computer addiction
  button1z.remove();
  button1.remove();
  texton = true;
}

function NoFaceInRoom(){ //uses flag to make sure that the background is beng layed over person animation
  background(255);
  if (flag=="room") {
    image(img1, 0, 0);
  }
  if(flag=="kitchen") {
    image(kitchenpic, 0, 0, img2.width, img2.height);
  }
  if (flag=="outside") {
    image(outsidepic, 0, 0, 1000, 600);
  }
  else {
  }
}

var Face = { //cotrols and defines person animation
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

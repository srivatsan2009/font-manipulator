nosex=0;
nosey=0;
leftwristx=0;
rightwristx=0;
difference=0;
name="SRIVATSAN";
function setup() {
video=createCapture(VIDEO);
video.size(500,500);
canvas=createCanvas(500,400);
canvas.position(650,170);
posenet=ml5.poseNet(video,modeloaded);
posenet.on('pose',getPoses);
}
function modeloaded() {
console.log("poseNet is initialised");
}

function getPoses(results) {
if (results.length>0) {
console.log(results);
nosex=results[0].pose.nose.x;
nosey=results[0].pose.nose.y;
console.log(nosex,nosey);
leftwristx=results[0].pose.leftWrist.x;
rightwristx=results[0].pose.rightWrist.x;
console.log(leftwristx,rightwristx);
difference=floor(leftwristx-rightwristx);
console.log(difference);
}
}

function draw() {
background("red");
fill("yellowgreen");
stroke("black");
textSize(difference);
text(name,nosey,nosex);
document.getElementById("font_size").innerHTML="size of font="+difference;
} 
    
nosex=0;
nosey=0;
leftwristx=0;
rightwristx=0;
difference=0;
name=SRIVATSAN;
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
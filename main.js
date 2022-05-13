function setup() 
{

    canvas = Capturecanvas(VIDEO);
    video.size(550,500)

    canvas = CreateCanvas(550,500);
    canvas.position(550,150);

    poseNet = ml5.poseNet(VIDEO,modelLoaded);
    poseNet.on('pose',gotPoses)
}

function modelLoaded() {

    console.log("Pose Net is Activated");
}

function gotPoses(results) {
  if(result.length > 0) {
     console.log(results);
  }

}

let capture;
let posenet;
let noseX,noseY;
let elx,ely,erx,ery;
let singlePose,skeleton;

function setup(){
    //runs only once
    createCanvas(700,500);
    capture = createCapture(VIDEO)
    capture.hide()
    posenet = ml5.poseNet(capture,modelLoaded);
    posenet.on('pose',receivedPoses);
}

function receivedPoses(poses)
{
    //console.log(poses);

    if(poses.length > 0)
    {
        singlePose = poses[0].pose;
        skeleton = poses[0].skeleton;
        // noseX = singlePose.pose.nose.x;
        // noseY = singlePose.pose.nose.y;
        // erx= singlePose.pose.rightEye.x;
        // ery= singlePose.pose.rightEye.y;
        // elx= singlePose.pose.leftEye.x;
        // ely= singlePose.pose.leftEye.y;
    }
    //console.log("postion of nose" + noseX +" "+ noseY)
}
function modelLoaded()
{
    console.log('model has loaded');
}
//infinite loop

// function getRandomArbitarary(min,max)
// {
//   return Math.random()*(max-min)+min;
// }

function draw()
{
    image(capture,0,0);
// image and videos(webcam)
    fill(255,0,0);
//   ellipse(noseX,noseY,10);
//   ellipse(erx,ery,10);
//   line(erx,ery,elx,ely);
//   line(erx,ery,noseX,noseY);
//   line(elx,ely,noseX,noseY);
//   ellipse(elx,ely,10);
if(singlePose)

  {
   for(let i=0;i<singlePose.keypoints.length;i++)
   ellipse(singlePose.keypoints[i].position.x,singlePose.keypoints[i].position.y,5);
  stroke(255,255,255);
  for(let j=0;j<skeleton.length;j++)
  {
     console.log("value of j is:", skeleton.length);
    line(skeleton[j][0].position.x,skeleton[j][0].position.y,skeleton[j][1].position.x,skeleton[j][1].position.y);
  }
}
}







// function draw()
// {
//     image(shahrukh_img,mouseX,mouseY,100,100);
//     // r = getRandomArbitarary(0,255);
//     // g = getRandomArbitarary(0,255);
//     // b = getRandomArbitarary(0,255);
//     // fill(r,g,b);
//     // ellipse(mouseX,mouseY,50,50);
// //     background(200); 
// //     //1. point
// //     //Point(500,500);
// //     //2. line
// //    // line(200,200,300,300)
// //     //3. triangle
// //     triangle(100,100,200,500,300,50)
// //     //4. recatanle
// //     rect(500,200,100,100);
//     //5.circle

//     //stroke and colors
//     // fill(250,101,134,100);
//     // stroke(255,0,1,200);
//     // strokeWeight(2);
//     // ellipse(100,300,100,100);
//     // stroke(0,255,1);
//     // ellipse(210,300,100,100);
//     // stroke(0,0,255);
//     // ellipse(320,300,100,100);
//     // stroke(0,0,0);
//     // ellipse(430,300,100,100);
//     // stroke(100,100,200);
//     // ellipse(540,300,100,100);

//     //stroke and colors





// }
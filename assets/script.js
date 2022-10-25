var pose = [
    {
        joint: "leftEye",
        x: 200,
        y: 55 
    },
    {
        joint: "rightEye",
        x: 218,
        y:57
    },
    {
        joint: "leftShoulder",
        x: 164,
        y: 99
    },
    {
        joint: "rightShoulder",
        x: 228,
        y: 96
    }
];

var operations = ['+', '-']

var selectPoseX = document.getElementById('selectPoseX');

for(var i = 0; i < pose.length; i++) {
    var opt = pose[i].joint;
    var el = document.createElement("option");
    el.text = opt;
    el.value = pose[i].x;
    selectPoseX.appendChild(el);
}

var selectPoseY = document.getElementById('selectPoseY');

for(var i = 0; i < pose.length; i++) {
    var opt = pose[i].joint;
    var el = document.createElement("option");
    el.text = opt;
    el.value = pose[i].y;
    selectPoseY.appendChild(el);
}


var selectOperation = document.getElementById('selectOperationX');

for(var i = 0; i < operations.length; i++) {
    var opt = operations[i];
    var el = document.createElement("option");
    el.text = opt;
    el.valus = opt;
    selectOperationX.appendChild(el);
}

var selectOperation = document.getElementById('selectOperationY');

for(var i = 0; i < operations.length; i++) {
    var opt = operations[i];
    var el = document.createElement("option");
    el.text = opt;
    el.valus = opt;
    selectOperationY.appendChild(el);
}
var prediction1 = "";
Webcam.set({
    width: 350,
    height: 300,
    img_format: "jpeg",
    jpeg_quality: 90
});
camera + document.getElementById("camera");
Webcam.attach(camera);
function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='snapshot'src='"+data_uri+"'>";
    })
}
console.log('ml5 version:',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/zETJFx0d3/model.json',modelLoaded)
function modelLoaded() {
    console.log("Model Loaded!")
}
function speak() {
    var synth = window.speechSynthesis;
    speak1 = "Your prediction is "+prediction1;
    var UtterThis = new SpeechSynthesisUtterance(speak1);
    synth.speak(UtterThis);
}
function check() {
    img = document.getElementById("snapshot");
    classifier.classify(img, getResult);
}
function getResult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML = results[0].label;
        prediction1 = results[0].label;
        speak()
        if (results[0].label == "Victory") {
            document.getElementById("update_emoji").innerHTML = "✌️";
        }
        if (results[0].label == "Thumbs Up") {
            document.getElementById("update_emoji").innerHTML = "👍";
        }
        if (results[0].label == "Thumbs Down") {
            document.getElementById("update_emoji").innerHTML = "👎";
        }
        if (results[0].label == "Wow") {
            document.getElementById("update_emoji").innerHTML = "👌";
        }
    }
}
Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

  camera = document.getElementById("camera");

Webcam.attach( '#camera' );

      
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/IzXvkf1K_/model.json',modelLoaded);

function modelLoaded()
{
    console.log('Model Loaded!');
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function speak()
{
    var synth = window.speachSynthesis;
    speak_data_1 = "The first pridiction is " + pridiction_1
    speak_data_2 = "And the second pridiction is " + pridiction_2;
    var utterThis = new SpeechSynthisisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function gotResult(error, results)
{
    if (error)
    {
        console.error(error);
    }
    else
    {
        console.log(result);
        document.getElementById("result_hand_name").innerHTML = results[0].label;
        document.getElementById("result_hand_name2").innerHTML = results[1].label;
        prediction_1 = result[0].label;
        prediction_2 = result[1].label;
        speak()
        if(result[0].label == "👌")
        {
            document.getElementById("updated_emoji").innerHTML = "👌"
        }
        if(result[0].label == "👍")
        {
            document.getElementById("updated_emoji").innerHTML = "👍"
        }
        if(result[0].label == "✌")
        {
            document.getElementById("updated_emoji").innerHTML = "✌"
        }

        if(result[0].label == "👌")
        {
            document.getElementById("updated_emoji2").innerHTML = "👌"
        }
        if(result[0].label == "👍")
        {
            document.getElementById("updated_emoj2i").innerHTML = "👍"
        }
        if(result[0].label == "✌")
        {
            document.getElementById("updated_emoji2").innerHTML = "✌"
        }
    }
}
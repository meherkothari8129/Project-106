function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/WWxrmfOLL/', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
    console.log("model loaded")
}

function gotResults(error,results)
{
    if (error)
    {
        console.error(error);
    }
    else 
    {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+results[0].label;
        document.getElementById("result_accuracy").innerHTML = 'Accuracy - '+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_accuracy").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('dog');
        img1 = document.getElementById('cat');
        img2 = document.getElementById('horse');

        if (results[0].label == "Barking")
        {
            img.src = 'dog-dribble.gif';
            img1.src = 'newFile-4.jpg';
            img2.src = '19-horse-png-image.png';
        }

        else if (results[0].label == "Meowing")
        {
            img.src = 'German-shepherd.jpg';
            img1.src = 'cat-meow.gif';
            img2.src = '19-horse-png-image.png';   
        }
        else (results[0].label == "Neighing")
        {
            img.src = 'German-shepherd.jpg';
            img1.src = 'newFile-4.jpg';
            img2.src = 'neigh-horse.gif';
        }
    }
}


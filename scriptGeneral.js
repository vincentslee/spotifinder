
// Create function when searchButton is clicked

$("#searchButton").on("click", function () {
  var feelingEntered = $('#feelingEntered').val();
  wordSearchText(feelingEntered);
});

// function search (response) {} = Vincent Youtube search

function wordSearchText(feelingEntered) {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/",
    "method": "POST",
    "headers": {
      "x-rapidapi-host": "twinword-emotion-analysis-v1.p.rapidapi.com",
      "x-rapidapi-key": "7941464a45mshe78270a58ac1160p1b1d94jsnf26ae33902b5",
      "content-type": "application/x-www-form-urlencoded"
    },
    "data": {
      "text": '"' + feelingEntered + '"'
    }
  }
  $.ajax(settings).done(function (response) {
console.log(response)
    var youTubeCreation = [];

    if (response.emotion_scores.anger > 0.01) {
      youTubeCreation.push("anger");
    }
    if (response.emotion_scores.disgust > 0.01) {
      youTubeCreation.push("disgust");
    }
    if (response.emotion_scores.fear > 0.01) {
      youTubeCreation.push("fear");
    }
    if (response.emotion_scores.joy > 0.01) {
      youTubeCreation.push("joy");
    }
    if (response.emotion_scores.sadness > 0.01) {
      youTubeCreation.push("sadness");
    }
    if (response.emotion_scores.surprise > 0.01) {
      youTubeCreation.push("surprise");
    }
    console.log(youTubeCreation)
    // Create sort function that lists array from highest to lowest

    var youTubeURL = 'https://www.youtube.com/results?search_query=' + youTubeCreation[0] + '+' + youTubeCreation[1] + '+songs+Official+Music+Video&sp=CAMSBBABIAE%253D';

    console.log(youTubeURL)
  });
};

$("#happy").on("click", function () {
  youTubeURL = 'https://www.youtube.com/results?search_query=happy+songs+Official+Music+Video&sp=CAMSBBABIAE%253D';
});


$("#sad").on("click", function () {
  youTubeURL = 'https://www.youtube.com/results?search_query=sad+songs+Official+Music+Video&sp=CAMSBBABIAE%253D';
});


$("#mad").on("click", function () {
  youTubeURL = 'https://www.youtube.com/results?search_query=angry+songs+Official+Music+Video&sp=CAMSBBABIAE%253D';
});

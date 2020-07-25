
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
    //console.log(response);

    var emotions = Object.keys(response.emotion_scores); // [anger, disgust, fear, joy, sadness, surprise]
    var scores = Object.values(response.emotion_scores); // 

    scores = scores.filter(score => score > 0.001);

    for (i = 0; i <= scores.length - 1; i++){
      var bob = Object.keys(response.emotion_scores).find(scores[i]);
    }

    console.log(scores);
    console.log(bob);

    // var youTubeURLSearch = "https://www.youtube.com/results?search_query=" + 
    

    // Push everything to an array that is above 0 so that youtube can just search one thing

  });
};

$("#happy").on("click", function () {
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
      "text": "happy"
    }
  };
  $.ajax(settings).done(function (response) {
    console.log(response)
  });
});


$("#sad").on("click", function () {
  var settingsOne = {
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
      "text": "sad"
    }
  };
  $.ajax(settingsOne).done(function (responseOne) {
    console.log(responseOne)
  });
});

$("#mad").on("click", function () {
  var settingsTwo = {
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
      "text": "mad"
    }
  };
  $.ajax(settingsTwo).done(function (responseTwo) {
    console.log(responseTwo)
  });
});
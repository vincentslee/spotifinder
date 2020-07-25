 
// Create function when searchButton is clicked



$("#searchButton").on("click", function () {
  // feelingArray.push(____SEARCH HISTORY DIV ID___).val();
  var feelingEntered = $('#feelingEntered').val();  
  wordSearchText(feelingEntered);
  previousSongs();

});



// function search (response) {} = Vincent Youtube search
function youtubeVid(emotions) {
  // JSON.stringify(['joy', 'anger', 'sadness'])
  //'["joy", "anger", "sadness"]'
  $.ajax({
    url: queryURL,
    method: "GET",
    data: {
        key: APIKey,
        q: search,
        part: 'snippet',
        maxResults: resultsamount,
        type: 'video',
        videoEmbeddable: true,
        videoCategoryId: 10,
    },
    success: function(response) {
        console.log("success");
        return response;
    }
  });
}

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
    // Why is this returning the same value each time?
    "data": {
      "text": '"' + feelingEntered + '"'
    }
  }
  $.ajax(settings).done(function (response) {
    console.log(response);
    //for(i=0; i < response.length - 1; i++){
      // Why is this not working?
       // if(response.emotion_scores > 0){
      $("#feelingSearch").append("<p>" + response.emotion_scores.anger + "</p>");

      var emotions = Object.keys(response.emotion_scores); // [anger, disgust, fear, joy, sadness, surprise]
      var scores = Object.values(response.emotion_scores); // 

      for (var i = 0; i < emotions.length; i++) {
        if (scores[i] === 0) {
          emotions.splice(i, 1);
        }
      }

      youTubeVid(emotions);
      // Push everything to an array that is above 0 so that youtube can just search one thing
      // }
   // }
  });/* .then (wordRetrieval(response) {
// Create a function that will use emoticons if search comes back empty

if (response.emotion_scores === 0); {
      //return a group of emotional icons for user to pick a specific - https://emojipedia.org/people/
      $(".videoClass").append("<p> Looks like we could not match your search in our playlist.Therefore, we will try something else. </p> <p>Choose an emoticon below that best describes how you will feel about this task emotionally.</p>");
      $(".videoClassEmoticons").append('<a href="response.emotion_scores.anger">Angry</a>');
      $(".videoClassEmoticons").append('<a href="response.emotion_scores.disgust">Disgust</a>');
      $(".videoClassEmoticons").append('<a href="response.emotion_scores.fear">Fear</a>');
      $(".videoClassEmoticons").append('<a href="response.emotion_scores.joy">Joy</a>');
      $(".videoClassEmoticons").append('<a href="response.emotion_scores.sadness">Sadness</a>');
      $(".videoClassEmoticons").append('<a href="response.emotion_scores.surprise">Surprise</a>');
    }
}});

  wordRetrieval(response); */
}

  //Use Moment.JS for Time Stampe of Songs Retrieved
  
  function previousSongs() {
    var feelingForm = JSON.parse(localStorage.getItem('feelingEntered')) || [];
      localStorage.setItem('feelingEntered', JSON.stringify(feelingForm));
      var prevSongs = feelingForm.reverse();
      $('#u01').html('<a href="' + queryURL.response[i] + '">' + prevSongs[0] + '</a>');
      $('#u02').html('<a href="' + queryURL.response[i] + '">' + prevSongs[1] + '</a>');
      $('#u03').html('<a href="' + queryURL.response[i] + '">' + prevSongs[2] + '</a>');
      $('#u04').html('<a href="' + queryURL.response[i] + '">' + prevSongs[3] + '</a>');
      $('#u05').html('<a href="' + queryURL.response[i] + '">' + prevSongs[4] + '</a>');
  }
  

  //Shows title, artist and lyrics of current song playing
  /*
  function currentSong() {
      $.ajax({
          url: queryURL,
          method: "GET"
      }).then(function (response) {
          $("___SONG DIV___").html("<h1>" + response.name + "</h1>");
          $('___ARTIST DIV___').text("");
      });
  */

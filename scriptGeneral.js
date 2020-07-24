 
// Global variables

var feelingForm = JSON.parse(localStorage.getItem('feelingEntered')) || [];

// Create function when searchButton is clicked

$("#searchButton").on("click", function () {
  // feelingArray.push(____SEARCH HISTORY DIV ID___).val();
  var feelingEntered = $('#feelingEntered').val();
  wordSearchText(feelingEntered);
});

// search () = Vincent Youtube search

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
    for(i=0; i < response.length - 1; i++){
      // Why is this not working?
        if(response.emotion_scores > 0){
      $("#feelingSearch").append("<p>" + response.emotion_scores[i] + "</p>");
       }
    }
  });
}

  /* 
// Create a function that will use emoticons if search comes back empty

function wordRetrieval(responseOne) {

    if (responseOne.associations_array.search(feelingWords) === true) {
      // return youtube videos that correspond to similar word
    }
    elseif(responseOne.associations_array.search(feelingWords) === false); {
      //return a group of emotional icons for user to pick a specific - https://emojipedia.org/people/
    };
  }
 */



  /*
  //Use Moment.JS for Time Stampe of Songs Retrieved
  
  function previousSongs() {
      localStorage.setItem('feelingEntered', JSON.stringify(feelingForm));
      var prevSongs = feelingForm.reverse();
      $('#u01').html('<a href="___YOUTUBE URL___">' + prevSongs[0] + '</a>');
      $('#u02').html('<a href="___YOUTUBE URL___">' + prevSongs[1] + '</a>');
      $('#u03').html('<a href="___YOUTUBE URL___">' + prevSongs[2] + '</a>');
      $('#u04').html('<a href="___YOUTUBE URL___">' + prevSongs[3] + '</a>');
      $('#u05').html('<a href="___YOUTUBE URL___">' + prevSongs[4] + '</a>');
  }
  */

  //Shows title, artist and lyrics of current song playing
  /*
  function currentSong() {
      $.ajax({
          url: "___YOUTUBE URL___",
          method: "GET"
      }).then(function (response) {
          $("___SONG DIV___").html("<h1>" + response.name + "</h1>");
          $('___ARTIST DIV___').text("");
      });
  */
  //Randomize video results

  /* function wordSearch() {
    if (feelingEntered.includes(feelingAssociations[i])) {
      $("#songsList").append(search[i]);
      $("#videoArea").append(youTubeVideos);
    }
  } */

// Global variables
var feelingEntered = $('#feelingEntered').val();  
var feelingForm = JSON.parse(localStorage.getItem('feelingEntered')) || [];

// Create function when searchButton is clicked

  $(#SearchButton).submit("click", function (){
    preventDefault();
    var feeling = $('#feelingEntered').val();
    feelingArray.push(____SEARCH HISTORY DIV ID___).val();
    wordSearchText()
    
});

//Create Array of YouTube Videos

var youTubeVideos = [
  {"Admiration": ___YOUTUBE VIDEOS HERE ___},
  {"Adoration": ___YOUTUBE VIDEOS HERE ___},
  {"Aesthetic":  ___YOUTUBE VIDEOS HERE ___},
  {"Appreciation": ___YOUTUBE VIDEOS HERE ___},
  {"Amusement": ___YOUTUBE VIDEOS HERE ___},
  {"Anger": ___YOUTUBE VIDEOS HERE ___},
  {"Anxiety": ___YOUTUBE VIDEOS HERE ___},
  {"Awe": ___YOUTUBE VIDEOS HERE ___},
  {"Awkwardness": ___YOUTUBE VIDEOS HERE ___},
  {"Boredom": ___YOUTUBE VIDEOS HERE ___},
  {"Calmness": ___YOUTUBE VIDEOS HERE ___},
  {"Confusion": ___YOUTUBE VIDEOS HERE ___},
  {"Craving": ___YOUTUBE VIDEOS HERE ___},
  {"Disgust": ___YOUTUBE VIDEOS HERE ___},
  {"Empathy": ___YOUTUBE VIDEOS HERE ___},
  {"Entrancement": ___YOUTUBE VIDEOS HERE ___},
  {"Excitement": ___YOUTUBE VIDEOS HERE ___},
  {"Fear": ___YOUTUBE VIDEOS HERE ___},
  {"Horror": ___YOUTUBE VIDEOS HERE ___},
  {"Interest": ___YOUTUBE VIDEOS HERE ___},
  {"Joy": ___YOUTUBE VIDEOS HERE ___},
  {"Nostalgia": ___YOUTUBE VIDEOS HERE ___},
  {"Relief": ___YOUTUBE VIDEOS HERE ___},
  {"Romance": ___YOUTUBE VIDEOS HERE ___},
  {"Sadness": ___YOUTUBE VIDEOS HERE ___},
  {"Satisfaction": ___YOUTUBE VIDEOS HERE ___},
  {"Pain": ___YOUTUBE VIDEOS HERE ___},
  {"Desire": ___YOUTUBE VIDEOS HERE ___},
  {"Surprise": ___YOUTUBE VIDEOS HERE ___},
];

//Search within wordRetrieval to find specific words in the list within the search results to create video playlist
// note: go to https://rapidapi.com/twinword/api/word-associations/endpoints to find original script

function wordSearchText(){
$.ajax({
  "async": true,
	"crossDomain": true,
	"url": "https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry=" + feelingEntered,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "twinword-word-associations-v1.p.rapidapi.com",
    "x-rapidapi-key": "7941464a45mshe78270a58ac1160p1b1d94jsnf26ae33902b5"
  }}).then function wordRetrieval (response) {
    var feelingWords = ["Admiration", "Aesthetic", "Appreciation", "Amusement", "Anger", "Anxiety", "Awe", "Awkwardness", "Boredom", "Calmness", "Confusion", "Craving", 
      "Disgust", "Empathy", "Entrancement", "Excitement", "Fear", "Horror", "Interest", "Joy", "Nostalgia", "Relief", "Romance", "Sadness", 
      "Satisfaction", "Pain", "Desire", "Surprise"]
      if (response.associations_array.search(feelingWords) === true){
        // return youtube videos that correspond to similar word
      }
      elseif (response.associations_array.search(feelingWords) === false){
        //return a group of emotional icons for user to pick a specific - https://emojipedia.org/people/
    });
  }


//Use Moment.JS for Time Stampe of Songs Retrieved
function previousSongs() {
    localStorage.setItem('___FEELING INPUT FORM___', JSON.stringify(feelingForm));
    var prevSongs = feelingForm.reverse();
    $('#u01').html('<a href="___YOUTUBE URL___">' + prevSongs[0] + '</a>');
    $('#u02').html('<a href="___YOUTUBE URL___">' + prevSongs[1] + '</a>');
    $('#u03').html('<a href="___YOUTUBE URL___">' + prevSongs[2] + '</a>');
    $('#u04').html('<a href="___YOUTUBE URL___">' + prevSongs[3] + '</a>');
    $('#u05').html('<a href="___YOUTUBE URL___">' + prevSongs[4] + '</a>');
}

function currentSong() {
    $.ajax({
        url: "___YOUTUBE URL___",
        method: "GET"
    }).then(function (response) {
        $("___SONG DIV___").html("<h1>" + response.name + "</h1>");
        $('___ARTIST DIV___').text("");
        $("___LYRIC LINK DIV___").text("");
    });

// feelingAssociations is a group of feelings with URL to the APIs that we can search to find word from feelingEntered input
//
    var feelingAssociations = [
      {"Admiration": "https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry=Admiration"},
        {"Adoration": "https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry=Adoration"},
        {"Aesthetic": "https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry=Aesthetic"}, 
        {"Appreciation": "https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry=Appreciation"},
        {"Amusement": "https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry=Amusement"},
        {"Anger": "https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry=Anger"},
        {"Anxiety": "https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry=Anxiety"},
        {"Awe": "https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry=Awe"},
        {"Awkwardness": "https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry=Awkwardness"},
        {"Boredom": "https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry=Boredom"},
        {"Calmness": "https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry=Calmness"},
        {"Confusion": "https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry=Confusion"},
        {"Craving": "https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry=Craving"},
        {"Disgust": "https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry=Disgust"},
        {"Empathy": "https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry=Empathy"},
        {"Entrancement": "https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry=Entrancement"},
        {"Excitement": "https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry=Excitement"},
        {"Fear": "https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry=Fear"},
        {"Horror": "https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry=Horror"},
        {"Interest": "https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry=Interest"},
        {"Joy": "https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry=Joy"},
        {"Nostalgia": "https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry=Nostalgia"},
        {"Relief": "https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry=Relief"},
        {"Romance": "https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry=Romance"},
        {"Sadness": "https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry=Sadness"},
        {"Satisfaction": "https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry=Satisfaction"},
        {"Pain": "https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry=Pain"},}
        {"Sexual desire": "https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry=Desire"},
        {"Surprise": "https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry=Surprise"},
}];

// Create a function that will show if a phrase for video is boolean so that videos will know what to play
//Randomize video results
//Using iframe?

    function wordSearch() {
      if (feelingEntered.includes(feelingAssociations[i]){
        $("#songsList").append(feelingVideo[i]);
        $("#videoArea").append(youTubeVideos);
      }
    }
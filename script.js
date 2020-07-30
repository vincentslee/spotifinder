//Charlene, this is the variable that the web page's results display option will be input to
var howmany = 5;
//////////////////////

console.log("test");
// Create function when searchButton is clicked
$("#searchbutton").on("click", function () {
    event.preventDefault();
    var feelingEntered = $('#searchbar').val();
    wordSearchText(feelingEntered);
});

$("#clearhbutton").on("click", function () {
    event.preventDefault();
    $("#viddisplay").append("");
});


// Uses search input to find appropriate emotion
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
        },
    }
    $.ajax(settings).done(function (response) {
        var youTubeCreation;

        //Assigns value according to reasonable scores
        if (response.emotion_scores.surprise > 0.01) {
            youTubeCreation = "surprise";
        }       
        if (response.emotion_scores.disgust > 0.01) {
            youTubeCreation = "disgust";
        }
        if (response.emotion_scores.fear > 0.01) {
            youTubeCreation = "fear";
        }     
        if (response.emotion_scores.anger > 0.01) {
            youTubeCreation = "anger";
        }
        if (response.emotion_scores.sadness > 0.01) {
            youTubeCreation = "sadness";
        }
        if (response.emotion_scores.joy > 0.01) {
            youTubeCreation = "joy";
        }

        var searchterm = youTubeCreation;
        youtubesearch(searchterm, howmany);
    });
};

function youtubesearch(searchterm, howmany) {
    var displayedvideos = [];
    var resultsamount = howmany;
    var search = searchterm;
    //Here is the youtube search functionality

    //youtube api search request
    function repeatedSearch(limit) {
        var searchLimit;
        var APIKey = "AIzaSyBQdkGkM_-6Q2wnGL5gicxnJmI4aA9r98U";
        var queryURL = "https://www.googleapis.com/youtube/v3/search";
        if (limit !== resultsamount) {
            searchLimit = limit;
        } else {
            searchLimit = resultsamount;
        }

        $.ajax({
            url: queryURL,
            method: "GET",
            data: {
                key: APIKey,
                q: search,
                part: 'snippet',
                maxResults: searchLimit,
                type: 'video',
                videoEmbeddable: true,
                videoCategoryId: 10
            }
        }).then(function (response) {
       
            videoarray(response);
            
            deleteduplicates(response, displayedvideos);
         });
    }

    //initial run of youtube search
    repeatedSearch(resultsamount);
    //creates array of youtube videos
    function videoarray(response) {
        for (var i = 0; i < response.items.length; i++) {
            displayedvideos.push(response.items[i].id.videoId);
        }
    }

    //deltes duplicate videos from list
     function deleteduplicates(response, displayedvideos) {
        //checks similarities between videos
        /* for (var i = 0; i < displayedvideos.length; i++) {
            for (var k = i + 1; k < displayedvideos.length; k++) {

                if ($(stringSimilarity).compareTwoStrings(response.items[i].snippet.title, response.items[k].snippet.title) > 0.5) {
                    var displayedvideos = displayedvideos.filter((displayedVideo, index) => index !== i);
               }
            }
        } */

        //ends loop if enough unique videos have been put in displayedvideos array
        if (displayedvideos.length < resultsamount) {
            console.log("searching again");
            repeatedSearch((resultsamount - displayedvideos.length) + resultsamount);
        } else {
            console.log("displaying videos");
            videodisplay(displayedvideos);
        }

    }

    //displays videos to page
    function videodisplay(displayedvideos) {
        //console.log("displaying videos");
        for (var i = 0; i < resultsamount; i++) {
            var vidlink = "https://www.youtube.com/watch?v=" + displayedvideos[i];
            //console.log(i,": ", vidlink);

            $("#viddisplay").append('<div class="video-responsive pure-u-1-3"><iframe src="https://www.youtube.com/embed/' + displayedvideos[i] + '"></iframe></div>');

            //This is a temporary solution
            //$("#results").append("<p>"+vidlink+"</p>");
            //$(".frame").attr("src", "https://www.youtube.com/embed/"+displayedvideos[i]);
            //$("#vid"+(i+1)).attr("src", "https://www.youtube.com/embed/"+displayedvideos[i]);

        }
    }

}

$("#happy").on("click", function () {
    searchterm = "happy";
    youtubesearch(searchterm, howmany);
  });
  
  $("#love").on("click", function () {
    searchterm = "in love";
    youtubesearch(searchterm, howmany);
  });
  
  $("#tired").on("click", function () {
    searchterm = "tired";
    youtubesearch(searchterm, howmany);
  });
  
  $("#social").on("click", function () {
    searchterm = "social";
    youtubesearch(searchterm, howmany);
  });
  
  $("#sad").on("click", function () {
    searchterm = "sad";
    youtubesearch(searchterm, howmany);
  });
  
  $("#mad").on("click", function () {
    searchterm = "mad";
    youtubesearch(searchterm, howmany);
  });
  
  $("#strong").on("click", function () {
    searchterm = "strong";
    youtubesearch(searchterm, howmany);
  });
  
  $("#relaxed").on("click", function () {
    searchterm = "relaxed";
    youtubesearch(searchterm, howmany);
  });
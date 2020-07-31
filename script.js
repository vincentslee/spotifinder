//Charlene, this is the variable that the web page's results display option will be input to
var howmany = 5;
//////////////////////
$("#happy").on("click", function () {
    event.preventDefault();
    $("#viddisplay").empty();
    var searchterm = "happy";
    youtubesearch(searchterm, howmany);
});
$("#love").on("click", function () {
    event.preventDefault();
    $("#viddisplay").empty();
    var searchterm = "love";
    youtubesearch(searchterm, howmany);
});
$("#tired").on("click", function () {
    event.preventDefault();
    $("#viddisplay").empty();
    var searchterm = "tired";
    youtubesearch(searchterm, howmany);
});
$("#party").on("click", function () {
    event.preventDefault();
    $("#viddisplay").empty();
    var searchterm = "party";
    youtubesearch(searchterm, howmany);
});
$("#sad").on("click", function () {
    event.preventDefault();
    $("#viddisplay").empty();
    var searchterm = "sad";
    youtubesearch(searchterm, howmany);
});
$("#angry").on("click", function () {
    event.preventDefault();
    $("#viddisplay").empty();
    var searchterm = "angry";
    youtubesearch(searchterm, howmany);
});
$("#workout").on("click", function () {
    event.preventDefault();
    $("#viddisplay").empty();
    var searchterm = "workout";
    youtubesearch(searchterm, howmany);
});
$("#country").on("click", function () {
    event.preventDefault();
    $("#viddisplay").empty();
    var searchterm = "country";
    youtubesearch(searchterm, howmany);
});

console.log("test");
// Create function when searchButton is clicked
$("#searchbutton").on("click", function () {
    event.preventDefault();
    $("#viddisplay").empty();
    console.log("test");
    var feelingEntered = $('#searchbar').val();

    console.log(feelingEntered);
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
        var youTubeCreation;
        
        if (response.emotion_scores.anger > 0.01) {
            youTubeCreation = "anger";
        }
        if (response.emotion_scores.disgust > response.emotion_scores.anger) {
            youTubeCreation = "disgust";
        }
        if (response.emotion_scores.fear > response.emotion_scores.disgust) {
            youTubeCreation = "fear";
        }
        if (response.emotion_scores.joy > response.emotion_scores.fear) {
            youTubeCreation = "joy";
        }
        if (response.emotion_scores.sadness > response.emotion_scores.joy) {
            youTubeCreation = "sadness";
        }
        if (response.emotion_scores.surprise > response.emotion_scores.sadness) {
            youTubeCreation = "surprise";
        }
        console.log(youTubeCreation+" youtubecreation");
        // Create sort function that lists array from highest to lowest
        
        var searchterm = youTubeCreation;
        console.log("youtubesearch");
        youtubesearch(searchterm, howmany);
      
    });
  };


function youtubesearch(searchterm, howmany){
    
    var displayedvideos = [];
    var resultsamount = howmany;
    var search = searchterm;
    console.log(search+" working");
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
                videoCategoryId: 10}
        }).then(function(response) {
            console.log("Got data from Youtube", response);
            
            videoarray(response);
            console.log("displayedvideos", displayedvideos);
            
            deleteduplicates(response, displayedvideos);

        });
    }

    //initial run of youtube search
    repeatedSearch(resultsamount);
    //creates array of youtube videos
    function videoarray(response){
        for(var i = 0; i<response.items.length; i++){
        displayedvideos.push(response.items[i].id.videoId);
    }}

    //deltes duplicate videos from list
    function deleteduplicates(response, displayedvideos) {
        //checks similarities between videos
        for (var i = 0; i < displayedvideos.length; i++) {
            for (var k = i + 1; k < displayedvideos.length; k++) {

                if ( stringSimilarity.compareTwoStrings(response.items[i].snippet.title, response.items[k].snippet.title) > 0.5 ) {
                    console.log("deleted"+i+displayedvideos[i]);
                    var displayedvideos = displayedvideos.filter((displayedVideo, index) => index !== i);
                    
                    console.log("filtered array", displayedvideos);
                }

            }
        }
        
        //ends loop if enough unique videos have been put in displayedvideos array
        if (displayedvideos.length<resultsamount){
            console.log("searching again");
            repeatedSearch((resultsamount-displayedvideos.length)+resultsamount);
        }else{
            console.log("displaying videos");
            videodisplay(displayedvideos);
        }
        
    }

    //displays videos to page
    function videodisplay(displayedvideos){
        console.log("displaying videos");
        for(var i = 0; i<resultsamount; i++){
            var vidlink = "https://www.youtube.com/watch?v="+displayedvideos[i];
            console.log(i,": ", vidlink);

            $("#viddisplay").append('<div class="is-center pure-u-md-1-4"><iframe src="https://www.youtube.com/embed/'+displayedvideos[i]+'"></iframe></div>');


            //This is a temporary solution
            //$("#results").append("<p>"+vidlink+"</p>");
            //$(".frame").attr("src", "https://www.youtube.com/embed/"+displayedvideos[i]);
            //$("#vid"+(i+1)).attr("src", "https://www.youtube.com/embed/"+displayedvideos[i]);
            
        }
    }

}
















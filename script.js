//Here are the input variables
//search term to be entered into search api, happy as placeholder
var search = "happy";
//amount of results to be displayed, 5 as placeholder
var resultsamount = 3;

//Here is the youtube search functionality
var APIKey = "AIzaSyBrb73a647DrHK7GEs3rD1z9MsXgJewZtU";
var queryURL = "https://www.googleapis.com/youtube/v3/search";

//global variables
var displayedvideos = [];
var searchLimit;

//youtube api search request
function repeatedSearch(limit) {
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
        repeatedSearch((resultsamount-displayedvideos.length)+resultsamount);
    } else{
        videodisplay(displayedvideos);
    }
    
}

//displays videos to page
function videodisplay(displayedvideos){
    for(var i = 0; i<resultsamount; i++){
        var vidlink = "https://www.youtube.com/watch?v="+displayedvideos[i];

        //These are subject to change based on html structure/layout/design
        console.log(i,": ", vidlink);
        $("#results").append("<p>"+vidlink+"</p>");
        $(".frame").attr("src", "https://www.youtube.com/embed/"+displayedvideos[i]);
        $("#vid"+(i+1)).attr("src", "https://www.youtube.com/embed/"+displayedvideos[i]);
        
    }
}





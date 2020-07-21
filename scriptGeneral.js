<script src="https://MomentJS.com/downloads/moment.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

  var feelingForm = JSON.parse(localStorage.getItem('____FEELING INPUT FORM____')) || [];

  $(#SearchButton).submit("click", songGo);

  function songGo{
    preventDefault();
    var feeling = $('#____FEELING INPUT FORM____').val();
    feelingArray.push(____SEARCH HISTORY DIV ID___).val();
    ____NAME OF FEELING FUNCTION___();
    
});

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

    //Are we able to search Youtube close captioning?  If we cannot, should I create a lyric search query for the videos we choose?

    //Should we create a playlist so that we know our videos will be relevant?
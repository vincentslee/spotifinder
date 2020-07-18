// https://rapidapi.com/twinword/api/twinword-text-analysis-bundle/endpoints

// Word Associations methods will be very useful:
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://twinword-twinword-bundle-v1.p.rapidapi.com/word_associations/",
    "method": "POST",
    "headers": {
        "x-rapidapi-host": "twinword-twinword-bundle-v1.p.rapidapi.com",
        "x-rapidapi-key": "be431becd7msh22b37ea4f51041ap1dc34ejsnbd66ac6ddf77",
        "content-type": "application/x-www-form-urlencoded"
    },
    "data": {
        "entry": "sound"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://twinword-twinword-bundle-v1.p.rapidapi.com/word_associations/?entry=sound",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "twinword-twinword-bundle-v1.p.rapidapi.com",
        "x-rapidapi-key": "be431becd7msh22b37ea4f51041ap1dc34ejsnbd66ac6ddf77"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
// for user input: Computer science is the scientific and practical approach to computation and its applications. It is the systematic study of the feasibility, structure, expression, and mechanization of the methodical procedures that underlie the acquisition, representation, processing, storage, communication of, and access to information.
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://twinword-twinword-bundle-v1.p.rapidapi.com/topic_generate/",
    "method": "POST",
    "headers": {
        "x-rapidapi-host": "twinword-twinword-bundle-v1.p.rapidapi.com",
        "x-rapidapi-key": "be431becd7msh22b37ea4f51041ap1dc34ejsnbd66ac6ddf77",
        "content-type": "application/x-www-form-urlencoded"
    },
    "data": {
        "text": "Computer science is the scientific and practical approach to computation and its applications. It is the systematic study of the feasibility, structure, expression, and mechanization of the methodical procedures that underlie the acquisition, representation, processing, storage, communication of, and access to information."
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://twinword-twinword-bundle-v1.p.rapidapi.com/topic_generate/?text=Computer%20science%20is%20the%20scientific%20and%20practical%20approach%20to%20computation%20and%20its%20applications.%20It%20is%20the%20systematic%20study%20of%20the%20feasibility%252C%20structure%252C%20expression%252C%20and%20mechanization%20of%20the%20methodical%20procedures%20(or%20algorithms)%20that%20underlie%20the%20acquisition%252C%20representation%252C%20processing%252C%20storage%252C%20communication%20of%252C%20and%20access%20to%20information%252C%20whether%20such%20information%20is%20encoded%20as%20bits%20in%20a%20computer%20memory%20or%20transcribed%20in%20genes%20and%20protein%20structures%20in%20a%20biological%20cell.%20An%20alternate%252C%20more%20succinct%20definition%20of%20computer%20science%20is%20the%20study%20of%20automating%20algorithmic%20processes%20that%20scale.%20A%20computer%20scientist%20specializes%20in%20the%20theory%20of%20computation%20and%20the%20design%20of%20computational%20systems.",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "twinword-twinword-bundle-v1.p.rapidapi.com",
		"x-rapidapi-key": "be431becd7msh22b37ea4f51041ap1dc34ejsnbd66ac6ddf77"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://twinword-twinword-bundle-v1.p.rapidapi.com/text_classify/?text=Protect%20your%20back%20with%20these%20ergonomic%20office%20chairs.%20These%20adjustable%20chairs%20are%20cushioned%20and%20molded%20to%20ensure%20comfort%20over%20long%20hours.%20Some%20options%20feature%20breathable%20backs%20that%20let%20air%20flow%20through%20to%20keep%20you%20cool%20and%20add%20to%20your%20comfort%20level%20on%20hot%20days.",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "twinword-twinword-bundle-v1.p.rapidapi.com",
		"x-rapidapi-key": "be431becd7msh22b37ea4f51041ap1dc34ejsnbd66ac6ddf77"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://twinword-twinword-bundle-v1.p.rapidapi.com/text_classify/",
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "twinword-twinword-bundle-v1.p.rapidapi.com",
		"x-rapidapi-key": "be431becd7msh22b37ea4f51041ap1dc34ejsnbd66ac6ddf77",
		"content-type": "application/x-www-form-urlencoded"
	},
	"data": {
		"text": "Protect your back with these ergonomic office chairs. These adjustable chairs are cushioned and molded to ensure comfort over long hours. Some options feature breathable backs that let air flow through to keep you cool and add to your comfort level on hot days."
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});
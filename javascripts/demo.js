jQuery(document).ready(function ($) {
    var getElem, intentType, mimeType, mimeSubtype, dataType, userCode;
    intentType = "edit";
    mimeType = "application";
    dataType = "http://news.bbc.co.uk";
    $('.slide-out-div').removeAttr("style");
    mimeType = "application";
    mimeSubtype = "*";
    $("#invokeButton").click(function() {
	getElem = document.getElementById("intentDropdown");
	intentType = getElem.options[getElem.selectedIndex].text.toLowerCase();
	getElem = document.getElementById("mimeSubtypeDropdown").value.toLowerCase();
	mimeSubtype = getElem;
	getElem = document.getElementById("mimeDropdown");
	mimeType = getElem.options[getElem.selectedIndex].text.toLowerCase();
	getElem = document.getElementById("dataDropdown").value.toLowerCase();
	dataType = getElem;
	userCode = generateInvokeIntentCode(intentType, mimeType, mimeSubtype, dataType);
	document.getElementById("userInvokedCode").innerHTML=userCode;
;    	document.getElementById("codeSample").innerHTML="Your code:";
	document.getElementById("shareBtn").innerHTML=firstUpperCase(intentType);
	document.getElementById("invokeCode").innerHTML=userCode;
    });
    
    var update = function() {
	userCode = generateInvokeIntentCode(intentType, mimeType, mimeSubtype, dataType);
	$('#userInvokedCode').html(userCode);
	$('#invokeCode').html(userCode);
    }

    $('#intentDropdownlist').on('click', 'li', function() {
	getElem = document.getElementById("intentDropdown");
	intentType = $(this).text().toLowerCase();
	if (!(intentType == "choose an intent")) {
	    document.getElementById("shareBtn").innerHTML=firstUpperCase(intentType);
	    update();
	}
    });
    
    $('#mimeDropdownlist').on('click', 'li', function() {
	getElem = document.getElementById("mimeDropdown");
	mimeType = $(this).text().toLowerCase();
	if (!(mimeType == "choose a mime type")) {
	    $("#mimeSubtypeDropdown").autocomplete({
		source: determineAutocomplete()
	    });
	    update();
	}
    });

    $('#mimeSubtypeDropdown').keyup(function() {
	mimeSubtype = document.getElementById("mimeSubtypeDropdown").value.toLowerCase();
	update();
    });
    
    /** Function that takes the current state of the Try it Now button, and fires that
     *  intent accordingly. */
    $('#shareBtn').click(function() {
	var intent = new WebKitIntent("http://webintents.org/" + intentType,
				      mimeType + "/*",
				      dataType);
	window.navigator.webkitStartActivity(intent);
    });
    
    var applicationSubtype = [
	"atom+xml",
	"ecmascript",
	"EDI-X12",
	"EDIFACT",
	"json",
	"javascript",
	"octet-stream",
	"ogg",
	"pdf",
	"postscript",
	"rdf+xml",
	"rss+xml",
	"soap+xml",
	"font-woff",
	"xhtml+xml",
	"xml-dtd",
	"xop+xml",
	"zip",
	"x-gzip"
    ];
    
    var audioSubtype = [
	"basic",
	"L24",
	"mp4",
	"mpeg",
	"ogg",
	"vorbis",
	"x-ms-wma",
	"x-ms-wax",
	"vnd.rn-realaudio",
	"vnd.wave",
	"webm",
    ];

    var exampleSubtype = [
	"all"
    ];
    
    var imageSubtype = [
	"gif",
	"jpeg",
	"pjpeg",
	"png",
	"svq+xml",
	"tiff",
	"vnd.microsoft.icon"
    ];
    
    var messageSubtype = [
	"http",
	"imdn+xml",
	"partial",
	"rfc822"
    ];
    
    var modelSubtype = [
	"example",
	"iges",
	"mesh",
	"vrml",
	"x3d+binary",
	"x3d+vral",
	"x3d+xml"
    ];

    var multipartSubtype = [
	"mixed",
	"alternative",
	"related",
	"form-data",
	"signed",
	"encrpyted"
    ];
    
    var textSubtype = [
	"cmd",
	"css",
	"csv",
	"html",
	"javascript",
	"plain",
	"vcard",
	"xml"
    ];
    
    var videoSubtype = [
	"mpeg",
	"mp4",
	"ogg",
	"quicktime",
	"webm",
	"x-matroska",
	"x-ms-wmv",
	"x-flv"
    ];

    var availableTags = [
	"ActionScript",
	"AppleScript",
	"Asp",
	"BASIC",
	"C",
	"C++",
	"Clojure",
	"COBOL",
	"ColdFusion",
	"Erlang",
	"Fortran",
	"Groovy",
	"Haskell",
	"Java",
	"JavaScript",
	"Lisp",
	"Perl",
	"PHP",
	"Python",
	"Ruby",
	"Scala",
	"Scheme"
    ];
    

    var determineAutocomplete = function() {
	switch(mimeType)
	{
	case "application":
	    return applicationSubtype;
	case "audio":
	    return audioSubtype;
	case "example":
	    return exampleSubtype;
	case "image":
	    return imageSubtype;
	case "message":
	    return messageSubtype;
	case "model":
	    return modelSubtype;
	case "multipart":
	    return multipartSubtype;
        case "text":
	    return textSubtype;
	case "video":
	    return videoSubtype;
	}
    }
    
    /** Autocomplete function. */
    $("#mimeSubtypeDropdown").autocomplete({
	source: determineAutocomplete()
    });
    
    
    /** Takes a string that is fully lowercased and returns it with the first letter uppercased. */
    var firstUpperCase = function(str) {
	str = str.substring(0, 1).toUpperCase() + str.substring(1, str.length);
	return str;
    }

    /** Generates the HTML code based on the user input */
    var generateInvokeIntentCode = function(intent, mime, subtype, data) {
	return ('var intent = new Intent("http://webintents.org/' + intent + ", <br/>"
		+ "   " + '"' + mime + '/' + subtype + '", <br/>'
		+ "   " + '"' + data + '");<br/>'
		+ "window.navigator.startActivity(intent);<br/"
	       );
    };
    
    $('.slide-out-div').tabSlideOut({
            tabHandle: '.handle',                     
            pathToTabImage: 'images/feedback.png', 
            imageHeight: '122px',                    
            imageWidth: '40px',                       
            tabLocation: 'left',                      
            speed: 300,                              
            action: 'click',                         
            topPos: '200px',                          
            leftPos: '20px',                          
            fixedPosition: false                      
        });
    
});

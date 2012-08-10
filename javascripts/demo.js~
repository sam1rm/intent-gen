jQuery(document).ready(function ($) {
    var getElem, intentType, mimeType, mimeSubtype, dataType, userCode;
    intentType = "share";
    dataType = "http://news.bbc.co.uk";
    $('.slide-out-div').removeAttr("style");
    mimeType = "text";
    mimeSubtype = "uri-list";
    
    /** Javascript Callback function for each time one of the input fields are changed. */
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
	var temp = $(this).text().toLowerCase();
	if (!(temp == "choose a mime type")) {
	    mimeType = temp;
	    $("#mimeSubtypeDropdown").autocomplete({
		source: determineAutocomplete()
	    });
	    update();
	}
    });


    /** For the MIME Subtype input field, this function updates the Sample Code for each letter typed. */
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
    
    /** List of all most commonly used subtypes for the Application MIMEtype. */
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
    
    /** List of all most commonly used subtypes for the Audio MIMEtype. */
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

    /** List of all most commonly used subtypes for the example MIMEtype. 
     *  NOTE: This should be eventually removed. */
    var exampleSubtype = [
	"all"
    ];
    
    /** List of all most commonly used subtypes for the Image MIMEtype. */
    var imageSubtype = [
	"gif",
	"jpeg",
	"pjpeg",
	"png",
	"svq+xml",
	"tiff",
	"vnd.microsoft.icon"
    ];
    
    /** List of all most commonly used subtypes for the Message MIMEtype. */
    var messageSubtype = [
	"http",
	"imdn+xml",
	"partial",
	"rfc822"
    ];
    
    /** List of all most commonly used subtypes for the Model MIMEtype. */
    var modelSubtype = [
	"example",
	"iges",
	"mesh",
	"vrml",
	"x3d+binary",
	"x3d+vral",
	"x3d+xml"
    ];

    /** List of all most commonly used subtypes for the Multipart MIMEtype. */
    var multipartSubtype = [
	"mixed",
	"alternative",
	"related",
	"form-data",
	"signed",
	"encrpyted"
    ];
    
    /** List of all most commonly used subtypes for the Text MIMEtype. */
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
    

    /** List of all most commonly used subtypes for the Video MIMEtype. */
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

    
    /** Determines which Array to Autocomplete the dropdown suggestions based on what the
     *  current mimeType value function is. */
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
    
    /** This was initially part of the feedback tab. I took it out because it wasn't all-browser friendly. */
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

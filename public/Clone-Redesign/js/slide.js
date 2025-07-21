theimage = new Array();

// The dimensions of ALL the images should be the same 
// Format: theimage[...]=[image URL, link URL, name/description]



theimage[0]=["http://web.senate.gov.ph/photo_release/2025/0610_15.jpg", "http://web.senate.gov.ph/photo_release/2025/0610_15.asp", "Impeachment Court votes to return complaint to HoR"];
theimage[1]=["http://web.senate.gov.ph/photo_release/2025/0610_14.jpg", "http://web.senate.gov.ph/photo_release/2025/0610_14.asp", "SP Chiz convenes Impeachment Court"];
theimage[2]=["http://web.senate.gov.ph/photo_release/2025/0610_13.jpg", "http://web.senate.gov.ph/photo_release/2025/0610_13.asp", "Claiming impeach complaint infirm premature"];
theimage[3]=["http://web.senate.gov.ph/photo_release/2025/0610_12.jpg", "http://web.senate.gov.ph/photo_release/2025/0610_12.asp", "A. Cayetano amends Dela Rosa motion"];
theimage[4]=["http://web.senate.gov.ph/photo_release/2025/0610_11.jpg", "http://web.senate.gov.ph/photo_release/2025/0610_11.asp", "Sen. Padilla: Prioritize Key Legislation, Not Impeachment"];
theimage[5]=["http://web.senate.gov.ph/photo_release/2025/0610_10.jpg", "http://web.senate.gov.ph/photo_release/2025/0610_10.asp", "Outright dismissal of impeachment complaint unconstitutional"];
theimage[6]=["http://web.senate.gov.ph/photo_release/2025/0610_09.jpg", "http://web.senate.gov.ph/photo_release/2025/0610_09.asp", "Senators don hats as judges in impeachment court"];
theimage[7]=["http://web.senate.gov.ph/photo_release/2025/0610_08.jpg", "http://web.senate.gov.ph/photo_release/2025/0610_08.asp", "Dismiss impeachment complaint vs VP"];
theimage[8]=["http://web.senate.gov.ph/photo_release/2025/0610_07.jpg", "http://web.senate.gov.ph/photo_release/2025/0610_07.asp", "Convene impeach court first"];
theimage[9]=["http://web.senate.gov.ph/photo_release/2025/0610_06.jpg", "http://web.senate.gov.ph/photo_release/2025/0610_06.asp", "Discarding six million ballots"];


playspeed=5000;// The playspeed determines the delay for the slideshow in milliseconds. 1000 = 1 second
dotrans=1; // if value = 1 then there are transitions played in I
transtype='blendTrans';// 'blendTrans' or 'revealtrans'
transattributes='23';// duration=seconds,transition=#<24


//key that holds where in the array currently are
i=0;


window.onload=function(){

	//preload images into browser
	preloadSlide();

	//set transitions
	GetTrans();

	//autoplay
	PlaySlide();
}

function SetSlide(num) {
    //too big
    i = num % theimage.length;
    //too small
    if (i < 0) i = theimage.length - 1;

    //switch the image
    if (document.all && !window.opera && dotrans == 1) eval('document.images.imgslide.filters.' + transtype + '.Apply()')
    document.images.imgslide.src = theimage[i][0];
    if (document.all && !window.opera && dotrans == 1) eval('document.images.imgslide.filters.' + transtype + '.Play()')

    //name of current slide
    document.getElementById('slidebox').innerHTML = theimage[i][2];

    //slide number and total
    document.getElementById('slidecount').innerHTML = "" + (i + 1) + " of " + theimage.length;

    // update the link
    document.getElementById('slide-link').href = theimage[i][1];
}


//###########################################
function PlaySlide() {
	if (!window.playing) {
		PlayingSlide(i+1);
		if(document.slideshow.play){
			document.slideshow.play.value="  ||   ";
		}
	}
	else {
		playing=clearTimeout(playing);
		if(document.slideshow.play){
			document.slideshow.play.value="  >   ";
		}
	}
	// if you have to change the image for the "playing" slide
	if(document.images.imgPlay){
		setTimeout('document.images.imgPlay.src="'+imgStop+'"',1);
		imgStop=document.images.imgPlay.src
	}
}


//###########################################
function PlayingSlide(num) {
	playing=setTimeout('PlayingSlide(i+1);SetSlide(i+1);', playspeed);
}


//###########################################
//desc: picks the transition to apply to the images
function GetTrans() {
    if (dotrans == 0) {
        dotrans = 0;
    } else if (transtype == 'blendTrans') {
        dotrans = 1;
        transtype = 'blendTrans';
        if (document.imgslide) {
            document.imgslide.style.filter = "blendTrans(duration=1,transition=1)";
        }
    } else {
        dotrans = 1;
        transtype = 'revealtrans';
        if (document.imgslide) {
            document.imgslide.style.filter = "revealTrans(duration=1,transition=" + transattributes + ")";
        }
    }
}
//###########################################
function preloadSlide() {
	for(k=0;k<theimage.length;k++) {
		theimage[k][0]=new Image().src=theimage[k][0];
	}
}






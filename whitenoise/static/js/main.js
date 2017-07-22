var audio;
var audio2;

function addEventHandlers(){
    $("button.start").click(startAudio);
    $("button.fade").click(fadeAudio);
    $("button.forward").click(forwardAudio);
    $("button.back").click(backAudio);
    $("button.pause").click(pauseAudio);
    $("button.stop").click(stopAudio);
    $("button.volume-up").click(volumeUp);
    $("button.volume-down").click(volumeDown);
    $("button.mute").click(toggleMuteAudio);
    $("button.bgchangeNight").click(bgChangeNight);
    $("button.bgchangeDay").click(bgChangeDay);
    $("button.timeupdate").click(fader);
}

//seamlessly loops via animated volume
//POC for looping audio between two samples
function fader(){
    audio.trigger('play');
    audio.animate({volume: 0.0}, 10000);
    audio2.prop("volume", 0.00);
    audio2.prop("currentTime",10);
    audio2.trigger('play');
    audio2.animate({volume: 1.0}, 10000);
}

function bgChangeNight(){
    //alert("bgchange activated");
    $('body').css('background-color', 'black').css('color', '#fff');
}

function bgChangeDay(){
    //alert("bgchange activated");
    //changes body colour and text
    $('body').css('background-color', 'white').css('color', 'black');
}

function startAudio(){
    audio.trigger('play');
}

function fadeAudio(){
    //play the audio, set vol to 0, fade (anim) audio volume
    audio.prop("volume",0.0);
    audio.trigger('play');
    audio.animate({volume: 1.0}, 10000);
}

function pauseAudio(){
    audio.trigger('pause');
    audio2.trigger('pause');
}

function stopAudio(){
    pauseAudio();
    audio.prop("currentTime",0);
    audio2.prop("currentTime",0);
}

function forwardAudio(){
    pauseAudio();
    audio.prop("currentTime",audio.prop("currentTime")+5);
    startAudio();
}

function backAudio(){
    pauseAudio();
    audio.prop("currentTime",audio.prop("currentTime")-5);
    startAudio();
}

function volumeUp(){
    var volume = audio.prop("volume")+0.2;
    if(volume >1){
        volume = 1;
    }
    audio.prop("volume",volume);
}

function volumeDown(){
    var volume = audio.prop("volume")-0.2;
    if(volume <0){
        volume = 0;
    }
    audio.prop("volume",volume);
}

function toggleMuteAudio(){
    audio.prop("muted",!audio.prop("muted"));
}

function timeUpdate() {
    alert("timeupdate");
    var progress = audio.prop("currentTime") / audio.prop("duration");
    if (progress < 0.5 && !fadeOut) {
        fadeOut = true;
        audio.animate({volume: 0.0}, 10000, function () {
            alert("fade out completed" + " " + progress);
        });
    }
    if (progress > 0.5 && !fadeIn) {
        fadeIn = true;
        audio.animate({volume: 1.0}, 10000, function() {
            alert("fade in completed" + " " + progress);
            var audio2 = new Audio("static/music/Rain-storm.mp3");
            audio2.trigger('play');
            audio2.animate({volume: 1.0}, 10000);
        });
    }
}

var fadeIn = false;
var fadeOut = false;

$(document).ready(function(){
    audio = $(".audioDemo");
    audio2 = $(".audio2");
    addEventHandlers();
    
    //loop audio
    audio.on('ended', function(){
          //alert('playing file ended')
            startAudio();
       });

});//be careful with these tokens
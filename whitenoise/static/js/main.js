var audio;

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
}

function stopAudio(){
    pauseAudio();
    audio.prop("currentTime",0);
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

$(document).ready(function(){
    audio = $(".audioDemo");
    addEventHandlers();
    
    //loop audio
    audio.on('ended', function(){
          //alert('playing file ended')
            startAudio();
       });
});//be careful with these tokens
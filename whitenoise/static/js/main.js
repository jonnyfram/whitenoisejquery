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
}

function startAudio(){
    
    audio.trigger('play');
    
    //audio.controls = true;
    //audio.loop = true;
    //audio.autoplay = true;
    //document.body.appendChild(audio);
    
    //audio.addEventListener('ended', function(){
    //$("button.start").html("Play");
    //});
    
    // fade over 20 secs:
    //audio.animate({volume: 0.0}, 20000);
    
    //var song = audio;
    //song.loop = true;
    //document.body.appendChild(song);
    
}

//test fade
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

$(document).ready(function() {
    audio = $(".audioDemo");
    addEventHandlers();
    
    //loop the audio (working)
    audio.on('ended', function() {
          alert('playing file ended')
            startAudio();
       });
       
    var audio2 = new Audio("static/music/Rain-storm.mp3");
    audio2.startAudio();
    alert("should have started audio2")
    // attempt to get curr time create new audio element for looping
    
    // the length number could be changed and argumentalised for setting the fade
    audio.on("timeupdate", function() {
        if (audio.currentTime > 10) {
            alert("audio longer than 10!")
            audio.animate({volume: 0.0}, 10000);
        } else if (audio.currentTime < 10) {
            audio.animate({volume: 1.0}, 1000);
        }
    });

});

///test
//$(document).on('click', '.fade', function() {
//    audio.prop("muted",!audio.prop("muted"));
//});



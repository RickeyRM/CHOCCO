let player;

const playerContainer = $('.player__start');
const playerBg = $('.player__splach');

let eventInit = () =>{
    $('.player__start').click(e =>{
        e.preventDefault();

        const btn = $(e.currentTarget);
        if(playerContainer.hasClass('paused')){
            player.pauseVideo();
        } else {
            player.playVideo();
        }
    });
    $('.player__splach').click(e =>{
        e.preventDefault();

        const bg = $(e.currentTarget);
        if(playerContainer.hasClass('paused')){
            player.pauseVideo();
        } else {
            player.playVideo();
        }
    });

    $('.player__playback').click(e =>{
        const bar = $(e.currentTarget);
        const clickedPosition = e.originalEvent.layerX;
        const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;

        const newButtonPosition = (player.getDuration() / 100) * newButtonPositionPercent;

        $('.player__playback-button').css('left', `${newButtonPositionPercent}%`);

        player.seekTo(newButtonPosition);
    });
};

const formatTime = timeSec =>{
    const roundTime = Math.round(timeSec);

    const minutes = addZero(Math.floor(roundTime / 60));
    const seconds = addZero(roundTime - minutes * 60);

    function addZero(num){
        return num < 10 ? `0${num}` : num;
    }

    return `${minutes}:${seconds}`;
};

const onPlayerReady = () =>{
    let interval;
    const durationSec = player.getDuration();

    $('.player__duration-estimate').text(formatTime(durationSec));

    if(typeof interval !== 'undefined'){
        clearInterval(interval);
    };

    interval = setInterval(() =>{
        const complededSec = player.getCurrentTime();
        
        const complededPercent = (complededSec / durationSec) * 100;

        $('.player__playback-button').css('left', `${complededPercent}%`)

        $('.player__duration-completed').text(formatTime(complededSec));
    }, 1000);
}

const onPlayerStateChange = (e) =>{

switch(e.data){
    case 1:
        playerContainer.addClass('paused');
        playerBg.addClass('active');
        break;
    case 2:
        playerBg.removeClass('active');
        playerContainer.removeClass('paused');
        break;
}

};

function onYouTubeIframeAPIReady() {
 player = new YT.Player("yt-player", {
   height: '100%',
   width: '100%',
   videoId: "LXb3EKWsInQ",
   events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange
   },
   playerVars: {
       controls: 0,
       disablekb: 0,
       showinfo: 0,
       rel: 0,
       autoplay: 0,
       modestbranding: 0
   }
 });
}

eventInit();
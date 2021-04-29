let player;

const playerContainer = $('.player__start');

let eventInit = () =>{
    $('.player__start').click(e =>{
        e.preventDefault();

        const btn = $(e.currentTarget);
        if(playerContainer.hasClass('paused')){
            playerContainer.removeClass('paused');
            player.pauseVideo();
        } else {
            playerContainer.addClass('paused');
            player.playVideo();
        }
    });
}

const formatTime = timeSec =>{
    const roundTime = Math.round(timeSec);

    const minutes = Math.floor(roundTime / 60);
    const seconds = roundTime - minutes * 60;

    return `${minutes}:${seconds}`;
};

const onPlayerReady = () =>{

    const durationSec = player.getDuration();

    $('.player__duration-estimate').text(formatTime(durationSec));

}

function onYouTubeIframeAPIReady() {
 player = new YT.Player("yt-player", {
   height: "372",
   width: "661",
   videoId: "LXb3EKWsInQ",
   events: {
        onReady: onPlayerReady,
     // onStateChange: onPlayerStateChange
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
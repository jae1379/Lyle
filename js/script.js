

var c = document.getElementById('canvas')
var s = sprinkler.create(c)
var audio = new Audio('danysenal.mp3');

function rainingdae(message) {
    audio.play();

    var images = [
        'dae250.png',
        'trin250.png'
      ]
      var stop = s.start(images, {
        ddyMin: 200,
        ddyMax: 200
      })
      setTimeout(function(){
        stop();
        audio.pause();
        audio.currentTime = 0;
      }, 6000)
}




ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
    if( flags.customReward && extra.customRewardId === rewardId ) {
        rainingdae( message );
    }
};
ComfyJS.onChat = ( user, message, flags, self, extra ) => {
    if( flags.customReward && extra.customRewardId === "46e3bf7a-567a-4d1a-8d3d-bf088b14703d" ) {
        rainingdae( message );
    }
};
ComfyJS.Init( "jae1379" );



var c = document.getElementById('canvas')
var s = sprinkler.create(c)
var audio = new Audio('danysenal.mp3');

function raininglyle(message) {
    audio.play();

    var images = [
        'Test.png',
        'Test2.png'
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
        raininglyle( message );
    }
};
ComfyJS.onChat = ( user, message, flags, self, extra ) => {
    if( flags.customReward && extra.customRewardId === "6dcaea62-9e15-4859-9750-206df2c28f7b" ) {
        raininglyle( message );
    }
};
ComfyJS.Init( "jae1379" );

document.querySelector('.mute').addEventListener('click', function() {
  var iframe = document.getElementById('youtubePlayer');
  var isMuted = iframe.src.includes('mute=1');
  iframe.src = isMuted ? iframe.src.replace('mute=1', 'mute=0') : iframe.src.replace('mute=0', 'mute=1');
});




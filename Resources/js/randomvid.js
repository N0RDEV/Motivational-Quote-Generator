const videos = [
  "xX7xWEh6ujk",
  "meazFshQnMM",
  "VoX7cgIsgQQ",
  "m3w1mUXtCj0",
  "BahBAifi_mg",
  "fBsfD0Eytjw"
];

function playRandomVideo() {
  const randomIndex = Math.floor(Math.random() * videos.length);

  const videosUrl = "https://www.youtube.com/embed/" + videos[randomIndex] + "?autoplay=1&mute=1&controls=0";

  const player = document.getElementById('youtubePlayer');

  player.src = videosUrl;
}


Amplitude.init({
  bindings: {
    37: 'prev',
    39: 'next',
    32: 'play_pause'
  },
  songs: [
    {
      name: '3PointsMakeAPlane',
      artist: 'Ocelot (Hutch Crowley)',
      album: 'Untitled EP',
      url: '../../../Music/3PointsMakeAPlane.mp3',
      cover_art_url: '../../../../images/Jupiter.jpg'
    },
    {
      name: 'Dusk',
      artist: 'Ocelot (Hutch Crowley)',
      album: 'Untitled EP',
      url: '../../../Music/DuskVoxEdit3-31.mp3',
      cover_art_url: '../../../../images/Prettiest [Recovered].png.jpg'
    },
    {
      name: 'TheMeaningOfLife',
      artist: 'Ocelot (Hutch Crowley)',
      album: 'Untitled EP',
      url: '../../../Music/TheMeaningofLifeisCertainDeath2Mix.mp3',
      cover_art_url: '../../../../images/DevilGirl.png'
    },
    {
      name: 'TrapBeat',
      artist: 'Ocelot (Hutch Crowley)',
      album: 'Untitled EP',
      url: '../../../Music/TrapBeat.mp3',
      cover_art_url: '../../../../images/Cemetary.jpeg'
    }
  ]
});

window.onkeydown = function(e) {
  return !(e.keyCode == 32);
};

/*
    Handles a click on the song played progress bar.
  */
document.getElementById('song-played-progress').addEventListener('click', function(e) {
  var offset = this.getBoundingClientRect();
  var x = e.pageX - offset.left;

  Amplitude.setSongPlayedPercentage((parseFloat(x) / parseFloat(this.offsetWidth)) * 100);
});

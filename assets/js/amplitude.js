 Amplitude.init({
              "songs": [
                {
                  "name": "3PointsMakeUpAPlane",
                  "artist: 'Ocelot (Hutch Crowley)",
                  "album": "Untitled EP",
                  "url": "../Music/3PointsMakeAPlane.mp3",
                  "cover_art_url": "../../../../../../Pictures/Prettiest [Recovered].png"
                },
                {
                  "name": "Dusk",
                  "artist": "Ocelot (Hutch Crowley)",
                  "album": "Untitled EP",
                  "url": "../Music/DuskVoxEdit3-31.mp3",
                  "cover_art_url": "./images/Jupiter.jpg"
                },
                {
                  "name": "TheMeaningOfLife",
                  "artist": "Ocelot (Hutch Crowley)",
                  "album": "Untitled EP",
                  "url": "./assets/Music/TheMeaningofLifeisCertainDeath2Mix.mp3",
                  "cover_art_url": "./images/DevilGirl.jpg"
                },
                {
                  "name": "TrapBeat",
                  "artist": "Ocelot (Hutch Crowley)",
                  "album": "Untitled EP",
                  "url": "./assets/Music/TrapBeat.mp3",
                  "cover_art_url": "./images/Cemetary.jpeg"
                }
              ]
            });

document.getElementById('song-played-progress-1').addEventListener('click', function( e ){
  if( Amplitude.getActiveIndex() == 0 ){
    var offset = this.getBoundingClientRect();
    var x = e.pageX - offset.left;

    Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
  }
});

document.getElementById('song-played-progress-2').addEventListener('click', function( e ){
  if( Amplitude.getActiveIndex() == 1 ){
    var offset = this.getBoundingClientRect();
    var x = e.pageX - offset.left;

    Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
  }
});

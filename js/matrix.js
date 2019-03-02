
  var s = document.documentElement.clientWidth;
  var s2 = document.documentElement.clientHeight;
  var width = q.width = s - 30;
  var height = q.height = s2;
  var letters = Array(256).join(1).split('');
  var draw = function () {
    q.getContext('2d').fillStyle='rgba(255,255,255,.1)';
    q.getContext('2d').fillRect(0,0,width,height);
    q.getContext('2d').fillStyle='rgba(0,100,200,.384)';
    letters.map(function(y_pos, index){
      text = String.fromCharCode(3e4+Math.random()*33);
      x_pos = index * 33;
      q.getContext('2d').fillText(text, x_pos, y_pos);
      letters[index] = (y_pos > 758 + Math.random() * 1e4) ? 0 : y_pos + 10;
      
    });
  };

 setInterval(draw, 70);

window.onresize = function(){ location.reload(); }

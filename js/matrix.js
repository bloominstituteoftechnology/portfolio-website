
var s = window.screen;
var width = q.width;
var height = q.height;
var letters = Array(256).join(1).split('');
var draw = function () {
  q.getContext('2d').fillStyle='rgba(255,255,255,.2)';
  q.getContext('2d').fillRect(0,0,width,height);
  q.getContext('2d').fillStyle='rgba(100,100,200,.5)';
  letters.map(function(y_pos, index){
    text = String.fromCharCode(3e4+Math.random()*77);
    x_pos = index * 70;
    q.getContext('2d').fillText(text, x_pos, y_pos);
    letters[index] = (y_pos > 758 + Math.random() * 1e4) ? 0 : y_pos + 10;
    
  });
};
setInterval(draw, 55);
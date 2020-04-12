//doesn't worrk locally will have to test once live to see if thats issue
function goBack() {
  window.history.back();
}

var card = document.querySelector('.pie');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});

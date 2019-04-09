/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

})(jQuery);



// My Script Begin

//Start Banner Button Hide
const bannerButton = document.querySelector('.actions')
bannerButton.style.display = 'none';
//End Banner Button Hide


// Start Overlay
const overlay = document.createElement('div');
overlay.id = "overlay";

document.querySelector('body').append(overlay);

const clickForOverlay = document.querySelector('.image.profile'); // Profile Image In Banner

clickForOverlay.addEventListener('click', (event)=> {
			on();
})

 overlay.addEventListener('click', (event)=> {
 		off();
})

function on(){
	const overlay = document.querySelector("#overlay")
	overlay.style.display = "block";
}

function off(){
	const overlay = document.querySelector("#overlay");
	overlay.style.display = "none"
}

// End Overlay

let personalProfileInfoImgDiv = document.createElement('div');
personalProfileInfoImgDiv.className = "personal-info image";
overlay.prepend(personalProfileInfoImgDiv);

let personalProfileInfoh1 = document.createElement('h1');
personalProfileInfoh1.className = "personal-info heading";
personalProfileInfoh1.textContent = "About Me";
overlay.append(personalProfileInfoh1);

const personalProfileInfo = document.createElement('p');
personalProfileInfo.className = "personal-info content";
personalProfileInfo.textContent = "Please stay tuned for more info about me!"
overlay.append(personalProfileInfo)

//tooltip

const tooltip = document.querySelector('.tool-tip');

let counter = 0;


document.addEventListener('scroll', (event)=>{
	window.setInterval(function (){
			if(counter < 2000){
			counter+=1;
			console.log(counter);
			showToolTipOn();
			}
			else if(counter >=2000){
				showToolTipOff();
				
			}
	},100);
	counter = 0;
	
});

function showToolTipOn(){
	tooltip.style.display = 'flex';
}

function showToolTipOff(){
	tooltip.style.display = 'none';
}









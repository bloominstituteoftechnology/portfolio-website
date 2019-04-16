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
	TweenMax.to(overlay,1.5,{opacity:1})
	overlay.style.display = "block";
}

function off(){
	const overlay = document.querySelector("#overlay");
	TweenMax.to(overlay,1,{opacity:0})
	const time = setInterval(dimissOverlay,1000)
	time
	function dimissOverlay(){
	 overlay.style.display = "none";
	 clearInterval(time)
	}
	
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
personalProfileInfo.textContent = "Hi, my name is Joseph Luna! Born and raised here in the great state of Texas, I’m on an exciting journey to build upon my career as a Full Stack Web Developer. I have always been interested in computers and have spent a better part of my time learning and developing skills to effectively contribute to the Technology Industry. My skill sets in language and development methodologies are a mixture of formal and self-taught with a fiery ambition to learn more and keep on evolving my knowledge. It has always been intriging me how technology can be so helpful in our everyday lives and how yet, there are so many ways left to integrate useful software to make our personal and professional lifestyles easier.  Communication is the life line of business and the need to have a website or SPA  that is visually appealing, intuitive, and reactive is just as important as a brick and mortar store. I too, have been an entrepreneur and understand the necessity of trafficking customers to something that represents the culture of your business. This is my driving force this symbiosis of user interactions with company products and services while making the user experience enjoyable. That’s what I’m about and that’s why I’m here. I would like to help make a make a difference for you and your company too. Just let me know how I can be of assistance and I promise you I'll bring my A game, C game, and JavaScript and well, you get the idea! Thanks for reading and have a great day! "
overlay.append(personalProfileInfo)
personalProfileInfo.style.border = "2px solid white";
personalProfileInfo.style.borderRadius = "8%";
personalProfileInfo.style.padding = "2%";
personalProfileInfo.style.lineHeight = "1.5";

//tooltip

const tooltip = document.querySelector('.tool-tip');

let counter = 0;


document.addEventListener('scroll', (event)=>{
	window.setInterval(function (){
			if(counter < 2000){
			counter+=1;
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









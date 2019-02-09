/*
	Altitude by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
*/

var settings = {

	slider: {

		// Transition speed (in ms)
		// For timing purposes only. It *must* match the transition speed of ".slider > article".
			speed: 1500,

		// Transition delay (in ms)
			delay: 4000

	},

	carousel: {

		// Transition speed (in ms)
		// For timing purposes only. It *must* match the transition speed of ".carousel > article".
			speed: 350

	}

};

(function($) {

	var	$window = $(window),
		$body = $('body');

	/**
	 * Custom slider for Altitude.
	 * @return {jQuery} jQuery object.
	 */
	$.fn._slider = function(options) {

		var	$window = $(window),
			$this = $(this);

		// Handle no/multiple elements.
			if (this.length == 0)
				return $this;

			if (this.length > 1) {

				for (var i=0; i < this.length; i++)
					$(this[i])._slider(options);

				return $this;

			}

		// Vars.
			var	current = 0, pos = 0, lastPos = 0,
				slides = [],
				$slides = $this.children('article'),
				intervalId,
				isLocked = false,
				i = 0;

		// Functions.
			$this._switchTo = function(x, stop) {

				// Handle lock.
					if (isLocked || pos == x)
						return;

					isLocked = true;

				// Stop?
					if (stop)
						window.clearInterval(intervalId);

				// Update positions.
					lastPos = pos;
					pos = x;

				// Hide last slide.
					slides[lastPos].removeClass('top');

				// Show new slide.
					slides[pos].addClass('visible').addClass('top');

				// Finish hiding last slide after a short delay.
					window.setTimeout(function() {

						slides[lastPos].addClass('instant').removeClass('visible');

						window.setTimeout(function() {

							slides[lastPos].removeClass('instant');
							isLocked = false;

						}, 100);

					}, options.speed);

			};

		// Slides.
			$slides
				.each(function() {

					var $slide = $(this);

					// Add to slides.
						slides.push($slide);

					i++;

				});

		// Initial slide.
			slides[pos]
				.addClass('visible')
				.addClass('top');

		// Bail if we only have a single slide.
			if (slides.length == 1)
				return;

		// Main loop.
			intervalId = window.setInterval(function() {

				// Increment.
					current++;

					if (current >= slides.length)
						current = 0;

				// Switch.
					$this._switchTo(current);

			}, options.delay);

	};

	/**
	 * Custom carousel for Altitude.
	 * @return {jQuery} jQuery object.
	 */
	$.fn._carousel = function(options) {

		var	$window = $(window),
			$this = $(this);

		// Handle no/multiple elements.
			if (this.length == 0)
				return $this;

			if (this.length > 1) {

				for (var i=0; i < this.length; i++)
					$(this[i])._slider(options);

				return $this;

			}

		// Vars.
			var	current = 0, pos = 0, lastPos = 0,
				slides = [],
				$slides = $this.children('article'),
				intervalId,
				isLocked = false,
				i = 0;

		// Functions.
			$this._switchTo = function(x, stop) {

				// Handle lock.
					if (isLocked || pos == x)
						return;

					isLocked = true;

				// Stop?
					if (stop)
						window.clearInterval(intervalId);

				// Update positions.
					lastPos = pos;
					pos = x;

				// Hide last slide.
					slides[lastPos].removeClass('visible');

				// Finish hiding last slide after a short delay.
					window.setTimeout(function() {

						// Hide last slide (display).
							slides[lastPos].hide();

						// Show new slide (display).
							slides[pos].show();

						// Show new new slide.
							window.setTimeout(function() {
								slides[pos].addClass('visible');
							}, 25);

						// Unlock after sort delay.
							window.setTimeout(function() {
								isLocked = false;
							}, options.speed);

					}, options.speed);

			};

		// Slides.
			$slides
				.each(function() {

					var $slide = $(this);

					// Add to slides.
						slides.push($slide);

					// Hide.
						$slide.hide();

					i++;

				});

		// Nav.
			$this
				.on('click', '.next', function(event) {

					// Prevent default.
						event.preventDefault();
						event.stopPropagation();

					// Increment.
						current++;

						if (current >= slides.length)
							current = 0;

					// Switch.
						$this._switchTo(current);

				})
				.on('click', '.previous', function(event) {

					// Prevent default.
						event.preventDefault();
						event.stopPropagation();

					// Decrement.
						current--;

						if (current < 0)
							current = slides.length - 1;

					// Switch.
						$this._switchTo(current);

				});

		// Initial slide.
			slides[pos]
				.show()
				.addClass('visible');

		// Bail if we only have a single slide.
			if (slides.length == 1)
				return;

	};

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Fix: Object-fit (pseudo) polyfill.
		if (!browser.canUse('object-fit'))
			$('img[data-position]').each(function() {

				var	$this = $(this),
					$parent = $this.parent();

				// Apply img's src to parent.
					$parent
						.css('background-image', 'url("' + $this.attr('src') + '")')
						.css('background-size', 'cover')
						.css('background-repeat', 'no-repeat')
						.css('background-position', $this.data('position'));

				// Hide img.
					$this
						.css('opacity', '0');

			});

	// Sliders.
		$('.slider')
			._slider(settings.slider);

	// Carousels.
		$('.carousel')
			._carousel(settings.carousel);

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
				target: $body,
				visibleClass: 'is-menu-visible',
				side: 'right'
			});

})(jQuery);
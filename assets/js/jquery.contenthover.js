/*!
 * ContentHover jQuery plugin v0.1
 * http://www.backslash.gr/demos/contenthover-jquery-plugin/
 *
 * Copyright 2011 by Nikos Tsaganos
 * http://www.backslash.gr/
 */
(function($){  
	var methods = {
		init : function(options) {
			var defaults = {  
				data_selector: '.contenthover',	// The selector for the element that will be the content of the overlay element to show on hover 
				width: 0,			// Set to 0 to let the plugin figure it out
				height: 0,			// Set to 0 to let the plugin figure it out
				overlay_width: 0,		// The overlay element's width. Set to 0 to use the same as 'width'
				overlay_height: 0,		// The overlay element's height. Set to 0 to use the same as 'height'
				overlay_x_position: 'center',	// [center, left, right] The position of the overlay horizontally (if overlay_width is different from width)
				overlay_y_position: 'bottom',	// [center, top, bottom] The position of the overlay vertically (if overlay_width is different from width)
				overlay_background: '',		// The css background of the overlay element
				overlay_opacity: 1,		// [0-1] The opacity of the overlay element
				effect: 'fade', 		// [fade, slide, show] The effect to use
				fade_speed: 400, 		// Effect ducation for the 'fade' effect only
				slide_speed: 400, 		// Effect ducation for the 'slide' effect only
				slide_direction: 'bottom',	// [top, bottom, right, left] From which direction should the overlay apear, for the slide effect only
				zindex: 2,			// The base z-index value
				wrapper_class: 'ch_wrapper', 	// CSS class to add to the wrapper
				normal_class: 'ch_normal',  	// CSS class to add to the 'normal' element
				hover_class: 'ch_hover',  	// CSS class to add to the 'hover' element
				onshow: function(){}, 		// Callback function when the 'hover' element is shown
				onhide: function(){} 		// Callback function when the 'hover' element is hidden
			},  
			settings = $.extend({}, defaults, options);  
		  			
			return this.each(function(){
				var $this = $(this),
					w = $this.width() ? $this.width() : settings.width,
					h = $this.height() ? $this.height() : settings.height,
					overlay_w = settings.overlay_width ? settings.overlay_width : w,
					overlay_h = settings.overlay_height ? settings.overlay_height : h,
					$data = $this.next(settings.data_selector);
					
				if ($data.length) {
					
					$data.hide();
					
					var $ch_wrapper = $('<div>').addClass('ch_element').addClass(settings.wrapper_class).css({ 'width':w, 'height':h, 'position':'relative', 'overflow':'hidden' }).insertAfter($this);
					
					var $ch_normal = $('<div>').addClass(settings.normal_class).css({ 'width':w, 'height':h, 'position':'absolute', 'z-index':settings.zindex }).appendTo($ch_wrapper);
					$this.clone().appendTo($ch_normal);
					$this.hide();

					var $ch_hover = $('<div>').addClass(settings.hover_class).css({ 'width':overlay_w, 'height':overlay_h, 'position':'absolute', 'z-index':settings.zindex-1 }).appendTo($ch_wrapper);
					$data.clone().show().appendTo($ch_hover);
					
					var ch_hover_css = {};
					
					if (settings.overlay_background) { 
						ch_hover_css.background = settings.overlay_background; 
					}
					if (settings.overlay_opacity<1) { 
						ch_hover_css.opacity = settings.overlay_opacity; 
					}
					
		
					if (settings.overlay_x_position=='left') { 
						ch_hover_css.left = 0;
					} else if (settings.overlay_x_position=='right') {
						ch_hover_css.left = (w-overlay_w)+'px';
					} else {
						ch_hover_css.left = (w/2 - overlay_w/2)+'px';
					}
					
					
					if (settings.overlay_y_position=='top') { 
						ch_hover_css.top = 0;
					} else if (settings.overlay_y_position=='bottom') {
						ch_hover_css.top = (h-overlay_h)+'px';
					} else {
						ch_hover_css.top = (h/2 - overlay_h/2)+'px';
					}
					
					$ch_hover.css(ch_hover_css); 
					
					// slide effect
					if (settings.effect=='slide'){
			
						var initial_css = {};
						
						if (settings.slide_direction=='top') {
							initial_css = { top:('-'+overlay_h+'px') }; 
						}
						if (settings.slide_direction=='bottom') {
							initial_css = { top:h+'px' };
						}
						if (settings.slide_direction=='left') {
							initial_css = { left:('-'+overlay_w+'px') };
						}
						if (settings.slide_direction=='right') {
							initial_css = { left:w+'px' };
						}
									
						$ch_hover.css('z-index',settings.zindex+1).css(initial_css);
						$ch_wrapper.hover(function () {
							$ch_hover.stop(true, true).animate({ 'top': ch_hover_css.top, 'left': ch_hover_css.left }, settings.slide_speed, settings.onshow());
						}, function () {
							$ch_hover.stop(true, true).animate(initial_css, settings.slide_speed, settings.onhide());
						});
						
											
					// fade effect
					} else if (settings.effect=='fade') {
						
						$ch_hover.css('z-index',settings.zindex+1).hide();
						$ch_wrapper.hover(function () {
							$ch_hover.stop(true, true).fadeIn(settings.fade_speed, settings.onshow());
						}, function () {
							$ch_hover.stop(true, true).fadeOut(settings.fade_speed, settings.onhide());
						});
					
					// just show/hide
					} else {
						$ch_hover.css('z-index',settings.zindex+1).hide();
						$ch_wrapper.hover(function () {
							$ch_hover.show(0, settings.onshow());
						}, function () {
							$ch_hover.hide(0, settings.onhide());
						});
					}
				}
			});
		},
		
		stop : function() {
			return this.each(function(){
				var $this = $(this),
					$data = $this.next('.ch_element');
					
				$this.show();
				$data.remove();
				$this.unbind('.contenthover');
			});
		},
		
		destroy : function() {
			return this.each(function(){
				$(this).show();
				$('.ch_element').remove();
				$(window).unbind('.contenthover');
			});
		}
	};
	
	$.fn.contenthover = function(method) {  
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method '+ method +' does not exist in contentHover plugin.');
		}  
	}; 
	
})(jQuery);  
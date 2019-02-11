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

class Project {
    constructor( name, title, content, articles, demoUrl = "#", githubUrl = "#" ) {
        this.headingElement = document.getElementById( "main-heading" );
        this.p = document.getElementById( "main-p" );
        this.name = name;
        this.title = title;
        this.content = content;
        this.articles = articles;
        this.demoUrl = demoUrl;
        this.githubUrl = githubUrl;
    }
    
    setVisible() {
        
        this.headingElement.textContent = this.title;
        this.p.textContent = this.content;
        this.articles.forEach( ( article ) => {
            article.setActive( this.demoUrl, this.githubUrl );
        } );
    }
}

class Article {
    constructor( name, content, img, articleNumber ) {
        this.articleNumber = articleNumber;
        this.heading = document.getElementById( `article${ articleNumber }-heading` );
        this.p = document.getElementById( `article${ articleNumber }-p` );
        this.link = document.getElementById( `article${ articleNumber }-link` );
        this.name = name;
        this.content = content;
        this.img = img;
    }
    
    setActive( demoUrl, githubUrl ) {
        this.heading.textContent = this.name;
        this.p.textContent = this.content;
        this.img.setActive();
        if (this.articleNumber === 1){
            this.link.setAttribute( "href", demoUrl );
        }else {
            this.link.setAttribute("href", githubUrl);
            this.link.textContent = "Github Link";
        }
        
    }
}

class Img {
    constructor( src, alt, articleNumber ) {
        this.imgElement = document.getElementById( `article${ articleNumber }-img` );
        this.src = src;
        this.alt = alt;
    }
    
    setActive() {
        this.imgElement.setAttribute( "src", this.src );
        this.imgElement.setAttribute( "alt", this.alt );
    }
}

const trillo = new Project(
    "Trillo",
    "Trillo hotel landing page.",
    "This was a landing page I built in the Advanced CSS with SCSS course on Udemy. It was made" +
    " with flexbox and is fully responsive. It features a side nav bar that is always visible" +
    " until the viewport size is reduced enough to trigger the media query in which the navbar" +
    " migrates to the top under the search bar. ",
    [ new Article(
        "Tablet View",
        "This image shows the site with a tablets viewport size and the navbar below the search" +
        " bar.",
        new Img( "images/Trillo2.JPG", "Trillo landing page screen shot.", 1 ),
        1
    ), new Article(
        "Phone View",
        "This is the view of Trillo site from a phones view. The search input is now slightly" +
        " below the users bar allowing for more space. Further down the page the user reviews" +
        " are now in column instead of rows.",
        new Img( "images/Trillo3.JPG", "Trillo landing page phone view screen shot.", 2 ),
        2
    ) ],
    "https://quizzical-kirch-f2239a.netlify.com",
    "https://github.com/jeremiahtenbrink/Trillo"
);

const bookr = new Project(
    "OER Bookr",
    "Bookr landing page.",
    "This was a landing page I built for a react application while attending Lambda. The project" +
    " was to build a react application for teachers resources to allow sharing of open source" +
    " teaching materials.",
    [ new Article(
        "Tablet View",
        "This image shows the site with a tablets viewport size and the navbar below the search" +
        " bar.",
        new Img( "images/OerBookr2.JPG", "Bookr landing page screen shot.", 1 ),
        1
    ), new Article(
        "Phone View",
        "This is the view of OER Bookr site from a phones view. The search input is now slightly" +
        " below the users bar allowing for more space. Further down the page the user reviews" +
        " are now in column instead of rows.",
        new Img( "images/OerBookr3.JPG", "Bookr landing page phone view screen shot.", 2 ),
        2
    ) ],
    "https://gracious-goldstine-d76cfe.netlify.com",
    "https://github.com/oer-bookr/ui-jeremiah-tenbrink"
);

const natours = new Project(
    "Natours",
    "Natours Project",
    "This was a landing page I built while taking the Advanced CSS course on Udemy. Its a fully" +
    " responsive landing page built with no flexbox or css grid. ",
    [ new Article(
        "Tablet View",
        "This image shows the site with a tablets viewport size and the navbar below the search" +
        " bar.",
        new Img( "images/Natours2.JPG", "Natours landing page screen shot.", 1 ),
        1
    ), new Article(
        "Phone View",
        "This is the view of Natours site from a phones view. The search input is now slightly" +
        " below the users bar allowing for more space. Further down the page the user reviews" +
        " are now in column instead of rows.",
        new Img( "images/Natours3.JPG", "Natours landing page phone view screen shot.", 2 ),
        2,
    ) ],
    "https://thirsty-nobel-fbd9dc.netlify.com/",
    "https://github.com/jeremiahtenbrink/Natours"
);

const nexter = new Project(
    "Nexter",
    "Nexter Project",
    "This was a landing page I built while taking the Advanced CSS course on Udemy. Its a fully" +
    " responsive landing page built with css grid.",
    [ new Article(
        "Tablet View",
        "This image shows the site with a tablets viewport size and the navbar below the search" +
        " bar.",
        new Img( "images/Nexter2.JPG", "Nexter landing page screen shot.", 1 ),
        1
    ), new Article(
        "Phone View",
        "This is the view of Nexter site from a phones view. The search input is now slightly" +
        " below the users bar allowing for more space. Further down the page the user reviews" +
        " are now in column instead of rows.",
        new Img( "images/Nexter3.JPG", "Nexter landing page phone view screen shot.", 2 ),
        2
    ) ],
    "https://silly-colden-e92063.netlify.com",
    "https://github.com/jeremiahtenbrink/Nexter"
);

( function( $ ) {
    
    var $window = $( window ),
        $body = $( "body" );
    
    /**
     * Custom slider for Altitude.
     * @return {jQuery} jQuery object.
     */
    $.fn._slider = function( options ) {
        
        var $window = $( window ),
            $this = $( this );
        
        // Handle no/multiple elements.
        if( this.length == 0 ) {
            return $this;
        }
        
        if( this.length > 1 ) {
            
            for( var i = 0; i < this.length; i++ ) {
                $( this[ i ] )._slider( options );
            }
            
            return $this;
            
        }
        
        // Vars.
        var current = 0, pos = 0, lastPos = 0,
            slides = [],
            $slides = $this.children( "article" ),
            intervalId,
            isLocked = false,
            i = 0;
        
        // Functions.
        $this._switchTo = function( x, stop ) {
            
            // Handle lock.
            if( isLocked || pos == x ) {
                return;
            }
            
            isLocked = true;
            
            // Stop?
            if( stop ) {
                window.clearInterval( intervalId );
            }
            
            // Update positions.
            lastPos = pos;
            pos = x;
            
            // Hide last slide.
            slides[ lastPos ].removeClass( "top" );
            
            // Show new slide.
            slides[ pos ].addClass( "visible" ).addClass( "top" );
            
            // Finish hiding last slide after a short delay.
            window.setTimeout( function() {
                
                slides[ lastPos ].addClass( "instant" ).removeClass( "visible" );
                
                window.setTimeout( function() {
                    
                    slides[ lastPos ].removeClass( "instant" );
                    isLocked = false;
                    
                }, 100 );
                
            }, options.speed );
            
        };
        
        // Slides.
        $slides
            .each( function() {
                
                var $slide = $( this );
                
                // Add to slides.
                slides.push( $slide );
                
                i++;
                
            } );
        
        // Initial slide.
        slides[ pos ]
            .addClass( "visible" )
            .addClass( "top" );
        
        // Bail if we only have a single slide.
        if( slides.length == 1 ) {
            return;
        }
        
        // Main loop.
        intervalId = window.setInterval( function() {
            
            // Increment.
            current++;
            
            if( current >= slides.length ) {
                current = 0;
            }
            
            // Switch.
            $this._switchTo( current );
            
        }, options.delay );
        
    };
    
    /**
     * Custom carousel for Altitude.
     * @return {jQuery} jQuery object.
     */
    $.fn._carousel = function( options ) {
        
        var $window = $( window ),
            $this = $( this );
        
        // Handle no/multiple elements.
        if( this.length == 0 ) {
            return $this;
        }
        
        if( this.length > 1 ) {
            
            for( var i = 0; i < this.length; i++ ) {
                $( this[ i ] )._slider( options );
            }
            
            return $this;
            
        }
        
        // Vars.
        var current = 0, pos = 0, lastPos = 0,
            slides = [],
            $slides = $this.children( "article" ),
            articles = [],
            intervalId,
            isLocked = false,
            i = 0;
        
        articles.push( trillo );
        articles.push( bookr );
        articles.push( nexter );
        articles.push( natours );
        
        // Functions.
        $this._switchTo = function( x, stop ) {
            
            // Handle lock.
            if( isLocked || pos == x ) {
                return;
            }
            
            isLocked = true;
            
            // Stop?
            if( stop ) {
                window.clearInterval( intervalId );
            }
            
            // Update positions.
            lastPos = pos;
            pos = x;
            
            // Hide last slide.
            slides[ lastPos ].removeClass( "visible" );
            
            // Finish hiding last slide after a short delay.
            window.setTimeout( function() {
                
                // Hide last slide (display).
                slides[ lastPos ].hide();
                
                // Show new slide (display).
                slides[ pos ].show();
                
                // Show new new slide.
                window.setTimeout( function() {
                    slides[ pos ].addClass( "visible" );
                    let content = slides[ pos ].children( ".content" );
                    let h3 = content[ 0 ].children[ 0 ];
                    let slideName = h3.textContent;
                    articles.forEach( ( article ) => {
                        if( article.name === slideName ) {
                            article.setVisible();
                        }
                    } );
                }, 25 );
                
                // Unlock after sort delay.
                window.setTimeout( function() {
                    isLocked = false;
                }, options.speed );
                
            }, options.speed );
            
        };
        
        // Slides.
        $slides
            .each( function() {
                
                var $slide = $( this );
                
                // Add to slides.
                slides.push( $slide );
                
                // Hide.
                $slide.hide();
                
                i++;
                
            } );
        
        // Nav.
        $this
            .on( "click", ".next", function( event ) {
                
                // Prevent default.
                event.preventDefault();
                event.stopPropagation();
                
                // Increment.
                current++;
                
                if( current >= slides.length ) {
                    current = 0;
                }
                
                // Switch.
                $this._switchTo( current );
                
            } )
            .on( "click", ".previous", function( event ) {
                
                // Prevent default.
                event.preventDefault();
                event.stopPropagation();
                
                // Decrement.
                current--;
                
                if( current < 0 ) {
                    current = slides.length - 1;
                }
                
                // Switch.
                $this._switchTo( current );
                
            } );
        
        // Initial slide.
        slides[ pos ]
            .show()
            .addClass( "visible" );
        let content = slides[ pos ].children( ".content" );
        let h3 = content[ 0 ].children[ 0 ];
        let slideName = h3.textContent;
        articles.map( ( article ) => {
            if( article.name === slideName ) {
                article.setVisible( article );
            }
        } );
        let mainContent = document.getElementById( "main-content" );
        
        // Bail if we only have a single slide.
        if( slides.length === 1 ) {
        
        }
        
    };
    
    // Breakpoints.
    breakpoints( {
        xlarge: [ "1281px", "1680px" ],
        large: [ "981px", "1280px" ],
        medium: [ "737px", "980px" ],
        small: [ "481px", "736px" ],
        xsmall: [ "361px", "480px" ],
        xxsmall: [ null, "360px" ]
    } );
    
    // Play initial animations on page load.
    $window.on( "load", function() {
        window.setTimeout( function() {
            $body.removeClass( "is-preload" );
        }, 100 );
    } );
    
    // Fix: Object-fit (pseudo) polyfill.
    if( !browser.canUse( "object-fit" ) ) {
        $( "img[data-position]" ).each( function() {
            
            var $this = $( this ),
                $parent = $this.parent();
            
            // Apply img's src to parent.
            $parent
                .css( "background-image", "url(\"" + $this.attr( "src" ) + "\")" )
                .css( "background-size", "cover" )
                .css( "background-repeat", "no-repeat" )
                .css( "background-position", $this.data( "position" ) );
            
            // Hide img.
            $this
                .css( "opacity", "0" );
            
        } );
    }
    
    // Sliders.
    $( ".slider" )
        ._slider( settings.slider );
    
    // Carousels.
    $( ".carousel" )
        ._carousel( settings.carousel );
    
    // Menu.
    $( "#menu" )
        .append( "<a href=\"#menu\" class=\"close\"></a>" )
        .appendTo( $body )
        .panel( {
            delay: 500,
            hideOnClick: true,
            hideOnSwipe: true,
            resetScroll: true,
            resetForms: true,
            target: $body,
            visibleClass: "is-menu-visible",
            side: "right"
        } );
    
} )( jQuery );


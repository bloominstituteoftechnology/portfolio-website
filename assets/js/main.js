/*
 Altitude by Pixelarity
 pixelarity.com | hello@pixelarity.com
 License: pixelarity.com/license
 */

var settings = {
    
    slider: {
        
        // Transition speed (in ms)
        // For timing purposes only. It *must* match the transition speed of
        // ".slider > article".
        speed: 1500,
        
        // Transition delay (in ms)
        delay: 4000
        
    },
    
    carousel: {
        
        // Transition speed (in ms)
        // For timing purposes only. It *must* match the transition speed of
        // ".carousel > article".
        speed: 350, width: 0, height: 0, iframeWidth: 0, iframeHeight: 0,
        
    }
    
};

class Carosel{
    constructor(){
        this.pos = 0;
        this.projects = [];
        this.locked = false;
        
        this.headingElement = document.getElementById( "main-heading" );
        this.p = document.getElementById( "main-p" );
        this.projectArticle = document.createElement( "article" );
        this.iframe = document.getElementById( "ifrm" );
        this.nextButton = document.getElementById( "carousel_next" );
        this.prevButton = document.getElementById( "carousel_prev" );
        this.nextButton.addEventListener( "click", this.changeSlide );
        this.prevButton.addEventListener( "click", this.changeSlide );
    }
    
    changeSlide = ( e ) => {
        if( this.locked ){
            return;
        }
        
        this.locked = true;
        if( e.target.id === "carousel_prev" ){
            this.pos -= 1;
            if( this.pos < 0 ){
                this.pos = this.projects.length - 1;
            }
        }else{
            this.pos += 1;
            if( this.pos > this.projects.length - 1 ){
                this.pos = 0;
            }
            
        }
        
        this.projectArticle.classList.remove( "visible" );
        
        window.setTimeout( () => {
            this.projects[ this.pos ].setVisible( this.iframe,
                this.headingElement,
                this.p
            );
            this.projectArticle.classList.add( "visible" );
            this.locked = false;
        }, settings.carousel.speed );
        
    };
    
    addProject = ( project ) => {
        if( this.projects.length === 0 ){
            project.setVisible( this.iframe, this.headingElement, this.p );
        }
        this.projects.push( project );
    };
    
}

class Project{
    constructor( name, title, content, articles, videoUrl, demoUrl = "#",
        githubUrl = "#" ){
        
        this.name = name;
        this.title = title;
        this.content = content;
        this.articles = articles;
        this.videoUrl = videoUrl;
        this.demoUrl = demoUrl;
        this.githubUrl = githubUrl;
    }
    
    setVisible( iframe, headingElement, p ){
        
        const width = Math.max( document.documentElement.clientWidth,
            window.innerWidth || 0
        );
        const height = Math.max( document.documentElement.clientHeight,
            window.innerHeight || 0
        );
        
        if( width !== settings.carousel.width || height !==
            settings.carousel.height ){
            this.setWidthAndHeight( height, width );
        }
        
        iframe.src = this.videoUrl;
        iframe.width = settings.carousel.iframeWidth;
        iframe.height = settings.carousel.iframeHeight;
        headingElement.textContent = this.title;
        p.textContent = this.content;
        this.articles.forEach( ( article ) => {
            article.setActive( this.demoUrl, this.githubUrl );
        } );
    }
    
    setWidthAndHeight = ( height, width ) => {
        
        if( width > 1000 && height > 500 ){
            settings.carousel.iframeWidth = 560 * 1.25;
            settings.carousel.iframeHeight = 350 * 1.25;
        }else if( width > 700 && height > 400 ){
            settings.carousel.iframeWidth = 560;
            settings.carousel.iframeHeight = 350;
        }else{
            settings.carousel.iframeWidth = 560 * .5;
            settings.carousel.iframeHeight = 350 * .5;
        }
    };
}

class Article{
    constructor( name, content, img, articleNumber ){
        this.articleNumber = articleNumber;
        this.heading = document.getElementById( `article${ articleNumber }-heading` );
        this.p = document.getElementById( `article${ articleNumber }-p` );
        this.link = document.getElementById( `article${ articleNumber }-link` );
        this.name = name;
        this.content = content;
        this.img = img;
    }
    
    setActive( demoUrl, githubUrl ){
        this.heading.textContent = this.name;
        this.p.textContent = this.content;
        this.img.setActive();
        if( this.articleNumber === 1 ){
            this.link.setAttribute( "href", demoUrl );
        }else{
            this.link.setAttribute( "href", githubUrl );
            this.link.textContent = "Github Link";
        }
        
    }
}

class Img{
    constructor( src, alt, articleNumber ){
        this.imgElement = document.getElementById( `article${ articleNumber }-img` );
        this.src = src;
        this.alt = alt;
    }
    
    setActive(){
        this.imgElement.setAttribute( "src", this.src );
        this.imgElement.setAttribute( "alt", this.alt );
    }
}

const pmDashboard = new Project( "PM/Student Dashboard",
    "PM Dashboard",
    "This is a demo of the PM and Student Dashboard another Team Lead" +
    " (Maksim Vakarchuk) and I created while I was a Team Lead at Lambda School. I created it because it was a pain for us Team Leads to submit airtable reports. Once I solved the issue for Team Leads, I spread the project out to the student dashboard to give the students the same functionality. ",
    [
        new Article( "Tablet View",
            "This image shows the site with a tablets viewport size and the navbar below the search" +
            " bar.",
            new Img( "images/Trillo2.JPG",
                "Trillo landing page screen shot.",
                1
            ),
            1
        ), new Article( "Phone View",
        "This is the view of Trillo site from a phones view. The search input is now slightly" +
        " below the users bar allowing for more space. Further down the page the user reviews" +
        " are now in column instead of rows.",
        new Img( "images/Trillo3.JPG",
            "Trillo landing page phone view screen shot.",
            2
        ),
        2
    )
    ],
    "https://www.youtube.com/embed/hOsSAvVOYpg?rel=0;&autoplay=1&mute=1",
    "https://pm-dashboard-ls.netlify.com/",
    "https://github.com/jeremiahtenbrink/web20",
);

const studentDashbaord = new Project( "PM/Student Dashboard",
    "Student Dashboard",
    "This is a demo of the PM and Student Dashboard another Team Lead" +
    " (Maksim Vakarchuk) and I created while I was a Team Lead at Lambda School. I created it because it was a pain for us Team Leads to submit airtable reports. Once I solved the issue for Team Leads, I spread the project out to the student dashboard to give the students the same functionality. ",
    [
        new Article( "Tablet View",
            "This image shows the site with a tablets viewport size and the navbar below the search" +
            " bar.",
            new Img( "images/Trillo2.JPG",
                "Trillo landing page screen shot.",
                1
            ),
            1
        ), new Article( "Phone View",
        "This is the view of Trillo site from a phones view. The search input is now slightly" +
        " below the users bar allowing for more space. Further down the page the user reviews" +
        " are now in column instead of rows.",
        new Img( "images/Trillo3.JPG",
            "Trillo landing page phone view screen shot.",
            2
        ),
        2
    )
    ],
    "https://www.youtube.com/embed/hOsSAvVOYpg?rel=0;&autoplay=1&mute=1",
    "https://pm-dashboard-ls.netlify.com/",
    "https://github.com/jeremiahtenbrink/web20",
);

const carosel = new Carosel();
carosel.addProject( studentDashbaord );
carosel.addProject( pmDashboard );

( function( $ ){
    
    var $window = $( window ), $body = $( "body" );
    
    /**
     * Custom slider for Altitude.
     * @return {jQuery} jQuery object.
     */
    $.fn._slider = function( options ){
        
        var $window = $( window ), $this = $( this );
        
        // Handle no/multiple elements.
        if( this.length == 0 ){
            return $this;
        }
        
        if( this.length > 1 ){
            
            for( var i = 0; i < this.length; i++ ){
                $( this[ i ] )._slider( options );
            }
            
            return $this;
            
        }
        
        // Vars.
        var current = 0, pos = 0, lastPos = 0, slides = [],
            $slides = $this.children( "article" ), intervalId, isLocked = false,
            i = 0;
        
        // Functions.
        $this._switchTo = function( x, stop ){
            
            // Handle lock.
            if( isLocked || pos == x ){
                return;
            }
            
            isLocked = true;
            
            // Stop?
            if( stop ){
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
            window.setTimeout( function(){
                
                slides[ lastPos ].addClass( "instant" )
                    .removeClass( "visible" );
                
                window.setTimeout( function(){
                    
                    slides[ lastPos ].removeClass( "instant" );
                    isLocked = false;
                    
                }, 100 );
                
            }, options.speed );
            
        };
        
        // Slides.
        $slides
            .each( function(){
                
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
        if( slides.length == 1 ){
            return;
        }
        
        // Main loop.
        intervalId = window.setInterval( function(){
            
            // Increment.
            current++;
            
            if( current >= slides.length ){
                current = 0;
            }
            
            // Switch.
            $this._switchTo( current );
            
        }, options.delay );
        
    };
    
    // /**
    //  * Custom carousel for Altitude.
    //  * @return {jQuery} jQuery object.
    //  */
    // $.fn._carousel = function( options ){
    //
    //     var $window = $( window ), $this = $( this );
    //
    //     // Handle no/multiple elements.
    //     if( this.length == 0 ){
    //         return $this;
    //     }
    //
    //     if( this.length > 1 ){
    //
    //         for( var i = 0; i < this.length; i++ ){
    //             $( this[ i ] )._slider( options );
    //         }
    //
    //         return $this;
    //
    //     }
    //
    //     // Vars.
    //     var current = 0, pos = 0, lastPos = 0, slides = [],
    //         $slides = $this.children( "article" ), articles = [], intervalId,
    //         isLocked = false, i = 0;
    //
    //     articles.push( pmDashboard );
    //     articles.push( studentDashbaord );
    //
    //     // Functions.
    //     $this._switchTo = function( x, stop ){
    //
    //         // Handle lock.
    //         if( isLocked || pos == x ){
    //             return;
    //         }
    //
    //         isLocked = true;
    //
    //         // Stop?
    //         if( stop ){
    //             window.clearInterval( intervalId );
    //         }
    //
    //         // Update positions.
    //         lastPos = pos;
    //         pos = x;
    //
    //         // Hide last slide.
    //         slides[ lastPos ].removeClass( "visible" );
    //
    //         // Finish hiding last slide after a short delay.
    //         window.setTimeout( function(){
    //
    //             // Hide last slide (display).
    //             slides[ lastPos ].hide();
    //
    //             // Show new slide (display).
    //             slides[ pos ].show();
    //
    //             // Show new new slide.
    //             window.setTimeout( function(){
    //                 slides[ pos ].addClass( "visible" );
    //                 let content = slides[ pos ].children( ".content" );
    //                 let h3 = content[ 0 ].children[ 0 ];
    //                 let slideName = h3.textContent;
    //                 articles.forEach( ( article ) => {
    //                     if( article.name === slideName ){
    //                         article.setVisible();
    //                     }
    //                 } );
    //             }, 25 );
    //
    //             // Unlock after sort delay.
    //             window.setTimeout( function(){
    //                 isLocked = false;
    //             }, options.speed );
    //
    //         }, options.speed );
    //
    //     };
    //
    //     // Slides.
    //     $slides
    //         .each( function(){
    //
    //             var $slide = $( this );
    //
    //             // Add to slides.
    //             slides.push( $slide );
    //
    //             // Hide.
    //             $slide.hide();
    //
    //             i++;
    //
    //         } );
    //
    //     // Nav.
    //     $this
    //         .on( "click", ".next", function( event ){
    //
    //             // Prevent default.
    //             event.preventDefault();
    //             event.stopPropagation();
    //
    //             // Increment.
    //             current++;
    //
    //             if( current >= slides.length ){
    //                 current = 0;
    //             }
    //
    //             // Switch.
    //             $this._switchTo( current );
    //
    //         } )
    //         .on( "click", ".previous", function( event ){
    //
    //             // Prevent default.
    //             event.preventDefault();
    //             event.stopPropagation();
    //
    //             // Decrement.
    //             current--;
    //
    //             if( current < 0 ){
    //                 current = slides.length - 1;
    //             }
    //
    //             // Switch.
    //             $this._switchTo( current );
    //
    //         } );
    //
    //     // Initial slide.
    //     slides[ pos ]
    //         .show()
    //         .addClass( "visible" );
    //     let content = slides[ pos ].children( ".content" );
    //     let h3 = content[ 0 ].children[ 0 ];
    //     let slideName = h3.textContent;
    //     articles.map( ( article ) => {
    //         if( article.name === slideName ){
    //             article.setVisible( article );
    //         }
    //     } );
    //     let mainContent = document.getElementById( "main-content" );
    //
    //     // Bail if we only have a single slide.
    //     if( slides.length === 1 ){
    //
    //     }
    //
    // };
    
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
    $window.on( "load", function(){
        window.setTimeout( function(){
            $body.removeClass( "is-preload" );
        }, 100 );
    } );
    
    // Fix: Object-fit (pseudo) polyfill.
    if( !browser.canUse( "object-fit" ) ){
        $( "img[data-position]" ).each( function(){
            
            var $this = $( this ), $parent = $this.parent();
            
            // Apply img's src to parent.
            $parent
                .css( "background-image",
                    "url(\"" + $this.attr( "src" ) + "\")"
                )
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


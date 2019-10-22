"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
    speed: 350, width: 0, height: 0, iframeWidth: 0, iframeHeight: 0

  }

};

var Carousel = function () {
  function Carousel() {
    _classCallCheck(this, Carousel);

    debugger;
    this.pos = 0;
    this.projects = [];
    this.locked = false;

    this.headingElement = document.getElementById("main-heading");
    this.p = document.getElementById("main-p");
    this.projectArticle = document.createElement("article");
    this.iframe = document.getElementById("ifrm");
    this.nextButton = document.getElementById("carousel_next");
    this.prevButton = document.getElementById("carousel_prev");

    this.changeSlide = this.changeSlide.bind(this);
    this.addProject = this.addProject.bind(this);
    this.nextButton.addEventListener("click", this.changeSlide);
    this.prevButton.addEventListener("click", this.changeSlide);
  }

  _createClass(Carousel, [{
    key: "changeSlide",
    value: function changeSlide(e) {
      var _this = this;

      debugger;
      if (this.locked) {
        return;
      }

      this.locked = true;
      if (e.target.id === "carousel_prev") {
        this.pos -= 1;
        if (this.pos < 0) {
          this.pos = this.projects.length - 1;
        }
      } else {
        this.pos += 1;
        if (this.pos > this.projects.length - 1) {
          this.pos = 0;
        }
      }

      this.projectArticle.classList.remove("visible");

      window.setTimeout(function () {
        _this.projects[_this.pos].setVisible(_this.iframe, _this.headingElement, _this.p);
        _this.projectArticle.classList.add("visible");
        _this.locked = false;
      }, settings.carousel.speed);
    }
  }, {
    key: "addProject",
    value: function addProject(project) {
      debugger;
      if (this.projects.length === 0) {
        project.setVisible(this.iframe, this.headingElement, this.p);
      }
      this.projects.push(project);
    }
  }]);

  return Carousel;
}();

var Project = function () {
  function Project(name, title, content, articles, videoUrl) {
    var demoUrl = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "#";
    var githubUrl = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : "#";

    _classCallCheck(this, Project);

    this.name = name;
    this.title = title;
    this.content = content;
    this.articles = articles;
    this.videoUrl = videoUrl;
    this.demoUrl = demoUrl;
    this.githubUrl = githubUrl;
    this.setVisible = this.setVisible.bind(this);
    this.setWidthAndHeight = this.setWidthAndHeight.bind(this);
  }

  _createClass(Project, [{
    key: "setVisible",
    value: function setVisible(iframe, headingElement, p) {
      var _this2 = this;

      var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

      if (width !== settings.carousel.width || height !== settings.carousel.height) {
        this.setWidthAndHeight(height, width);
      }

      iframe.src = this.videoUrl;
      iframe.width = settings.carousel.iframeWidth;
      iframe.height = settings.carousel.iframeHeight;
      headingElement.textContent = this.title;
      p.textContent = this.content;
      this.articles.forEach(function (article) {
        article.setActive(_this2.demoUrl, _this2.githubUrl);
      });
    }
  }, {
    key: "setWidthAndHeight",
    value: function setWidthAndHeight(height, width) {

      if (width > 1000 && height > 500) {
        settings.carousel.iframeWidth = 560 * 1.25;
        settings.carousel.iframeHeight = 350 * 1.25;
      } else if (width > 700 && height > 400) {
        settings.carousel.iframeWidth = 560;
        settings.carousel.iframeHeight = 350;
      } else {
        settings.carousel.iframeWidth = 560 * .5;
        settings.carousel.iframeHeight = 350 * .5;
      }
    }
  }]);

  return Project;
}();

var Article = function () {
  function Article(name, content, img, articleNumber) {
    _classCallCheck(this, Article);

    this.articleNumber = articleNumber;
    this.heading = document.getElementById("article" + articleNumber + "-heading");
    this.p = document.getElementById("article" + articleNumber + "-p");
    this.link = document.getElementById("article" + articleNumber + "-link");
    this.name = name;
    this.content = content;
    this.img = img;
    this.setActive = this.setActive.bind(this);
  }

  _createClass(Article, [{
    key: "setActive",
    value: function setActive(demoUrl, githubUrl) {
      this.heading.textContent = this.name;
      this.p.textContent = this.content;
      this.img.setActive();
      if (this.articleNumber === 1) {
        this.link.setAttribute("href", demoUrl);
      } else {
        this.link.setAttribute("href", githubUrl);
        this.link.textContent = "Github Link";
      }
    }
  }]);

  return Article;
}();

var Img = function () {
  function Img(src, alt, articleNumber) {
    _classCallCheck(this, Img);

    this.imgElement = document.getElementById("article" + articleNumber + "-img");
    this.src = src;
    this.alt = alt;
    this.setActive = this.setActive.bind(this);
  }

  _createClass(Img, [{
    key: "setActive",
    value: function setActive() {
      this.imgElement.setAttribute("src", this.src);
      this.imgElement.setAttribute("alt", this.alt);
    }
  }]);

  return Img;
}();

var pmDashboard = new Project("PM Dashboard", "PM Dashboard", "This is a demo of the PM Dashboard another Team Lead" + " (Maksim Vakarchuk) and I created while I was a Team Lead at Lambda School." + " I created it because Team Leads were spending almost an hour a day" + " trying to submit airtable reports. This web app helped solve this" + " problem by auto populating airtable report with prefilled data such as" + " student names for attendance and for one on one reports. Once I solved" + " this problem for Team Leads we spread the project out to" + " the student dashboard giving students the same functionality. ", [new Article("Firebase Api", "We leveraged Google auth and firebase for authentication and" + " storing data.", new Img("./assets/images/GoogleSignin.JPG", "Google Auth Signin", 1), 1), new Article("React", "We utilized React, React-Router, and Redux to build out frontend." + " The PM-Dashboard comes with various forms that are to be subbmited on" + " daily and weekly basis. Including daily attendance, end of day" + " retrospective, friday sprint forms, and daily one on one reports." + " For those that have access to the admin section also get access to" + " the course structure and links along with access to a list of all" + " students enrolled into the student dashboard.", new Img("./assets/images/PMDashboard.JPG", "PM Dashboard main dashboard" + " view.", 2), 2)], "https://www.youtube.com/embed/JLlfabvf0h8?rel=0;&autoplay=1&mute=1", "https://pm-dashboard-ls.netlify.com/start", "https://github.com/jeremiahtenbrink/web20");

var studentDashboard = new Project("Student Dashboard", "Student Dashboard", "Student Dashboard is a web app that was extended from the PM Dashboard. " + "This Student Dashboard is linked to the PM Dashboard. It allows" + " students to input their Team Lead. Their Team Lead can then keep track" + " of the students attendance and the classes they have completed. Each" + " class has links to the Project for the lesson. As well as links to the" + " airtable report the student is to submit at the end of the day. ", [new Article("Firebase Api", "Login is handled by firebase google auth api.", new Img("./assets/images/StudentDashboardLogin.JPG", "Google Auth" + " Signin", 1), 1), new Article("React", "This dashboard is created with React, React Redux, React Router and" + " many other library's. It is linked to the PM Dashboard via the" + " firebase api. It subscribes to the students info so once the info" + " is updated by the Team Lead on the PM Dashboard it is" + " automatically updated on the student dashboard.", new Img("./assets/images/StudentDashboardMain.JPG", "Student Dashboard Main", 2), 2)], "https://www.youtube.com/embed/TwY_q5fxTEE?rel=0;&autoplay=1&mute=1", "https://ls-student-dashboard.netlify.com", "https://github.com/jeremiahtenbrink/student-dashboard");

var carosel = new Carousel();
carosel.addProject(pmDashboard);
carosel.addProject(studentDashboard);

(function ($) {

  var $window = $(window),
      $body = $("body");

  /**
   * Custom slider for Altitude.
   * @return {jQuery} jQuery object.
   */
  $.fn._slider = function (options) {

    var $window = $(window),
        $this = $(this);

    // Handle no/multiple elements.
    if (this.length == 0) {
      return $this;
    }

    if (this.length > 1) {

      for (var i = 0; i < this.length; i++) {
        $(this[i])._slider(options);
      }

      return $this;
    }

    // Vars.
    var current = 0,
        pos = 0,
        lastPos = 0,
        slides = [],
        $slides = $this.children("article"),
        intervalId,
        isLocked = false,
        i = 0;

    // Functions.
    $this._switchTo = function (x, stop) {

      // Handle lock.
      if (isLocked || pos == x) {
        return;
      }

      isLocked = true;

      // Stop?
      if (stop) {
        window.clearInterval(intervalId);
      }

      // Update positions.
      lastPos = pos;
      pos = x;

      // Hide last slide.
      slides[lastPos].removeClass("top");

      // Show new slide.
      slides[pos].addClass("visible").addClass("top");

      // Finish hiding last slide after a short delay.
      window.setTimeout(function () {

        slides[lastPos].addClass("instant").removeClass("visible");

        window.setTimeout(function () {

          slides[lastPos].removeClass("instant");
          isLocked = false;
        }, 100);
      }, options.speed);
    };

    // Slides.
    $slides.each(function () {

      var $slide = $(this);

      // Add to slides.
      slides.push($slide);

      i++;
    });

    // Initial slide.
    slides[pos].addClass("visible").addClass("top");

    // Bail if we only have a single slide.
    if (slides.length == 1) {
      return;
    }

    // Main loop.
    intervalId = window.setInterval(function () {

      // Increment.
      current++;

      if (current >= slides.length) {
        current = 0;
      }

      // Switch.
      $this._switchTo(current);
    }, options.delay);
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
  breakpoints({
    xlarge: ["1281px", "1680px"],
    large: ["981px", "1280px"],
    medium: ["737px", "980px"],
    small: ["481px", "736px"],
    xsmall: ["361px", "480px"],
    xxsmall: [null, "360px"]
  });

  // Play initial animations on page load.
  $window.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });

  // Fix: Object-fit (pseudo) polyfill.
  if (!browser.canUse("object-fit")) {
    $("img[data-position]").each(function () {

      var $this = $(this),
          $parent = $this.parent();

      // Apply img's src to parent.
      $parent.css("background-image", "url(\"" + $this.attr("src") + "\")").css("background-size", "contain").css("background-repeat", "no-repeat").css("background-position", $this.data("position"));

      // Hide img.
      $this.css("opacity", "0");
    });
  }

  // Sliders.
  $(".slider")._slider(settings.slider);

  // Menu.
  $("#menu").append("<a href=\"#menu\" class=\"close\"></a>").appendTo($body).panel({
    delay: 500,
    hideOnClick: true,
    hideOnSwipe: true,
    resetScroll: true,
    resetForms: true,
    target: $body,
    visibleClass: "is-menu-visible",
    side: "right"
  });
})(jQuery);
//# sourceMappingURL=main.js.map
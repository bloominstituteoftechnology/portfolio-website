# Newsfeed-Components

In this project we are going to be building a news feed reader. The goal is to have a collapsing menu, and expandable news articles. The CSS and some of the HTML is already done for you, you simply need to connect the pieces. After the CSS is connected it is time to move on to building out our components using JavaScript. We will be adding common functionality and styling to build reusable components.

### Need to know:
* CSS (LESS):
  * @import
* JavaScript:
  * Creating DOM components with Javascript Functions.
* DOM
  * Element selection
  * Basic DOM manipulation
  * Events and event listeners

## Set Up The Project With Git

**Follow these steps to set up and work on your project:**

* [ ] Create a forked copy of this project.
* [ ] Add your team lead as collaborator on Github.
* [ ] Clone your OWN version of the repository (Not Lambda's by mistake!).
* [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
* [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
* [ ] Push commits: git push origin `<firstName-lastName>`.

**Follow these steps for completing your project.**

* [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo). **Please don't merge your own pull request**
* [ ] Add your team lead as a reviewer on the pull-request
* [ ] Your team lead will count the project as complete by merging the branch back into master.

### Preprocessor Setup

  * Run `less-watch-compiler less css index.less` from the top level of the Newsfeed-Components folder. 
  * Open index.html in your browser

### Part 1: The Articles Component
* Import `Article.less` from the correct path into index.less (follow the example for `Header.less` if you’re not sure how to write the correct path)
* Follow the instructions found in the Articles.js file to complete the JavaScript functionality and add the components to the DOM.

### Part 2: Add Articles

* Now that we have our components built, add a few articles of your own to the data array. Notice how our JavaScript code automatically creates the new articles and adds the styling and functionality we just built to them. This is the power of components. Write the code once and add as many components as you want all while maintaining the functionality we built!

### Part 3: The Menu

* Import `Menu.less` from the correct path into index.less (follow the example for `Header.less` if you’re not sure how to write the correct path)
* Follow the instructions found in the Menu.js file to complete the JavaScript functionality. 

### Stretch Goals:

If you complete the main goals of the page let's play around with some cool animation libraries.

A few things to check out: 
* Native CSS Animations. 
  * CSS has the ability to animate elements using a number of different properties. Check out `transform` and `transition`, and `animation`. A word of warning, these CSS properties will act differently on different browsers, so always read and see if you need a `browser prefix` in order to animate properly. 
  * https://css-tricks.com/almanac/properties/a/animation/
* jQuery
  * jQuery is an extremely popular JavaScript library, in fact most of the native DOM manipulation we know and love, came from the jQuery library. It is worth getting a little familiar with it. The jQuery library is massive, and part of it is an animation library. jQuery gives us a fantastic method called `.animate()`. There are also simpler methods such as `slideDown` `slideUp`, `slideToggle`, `show`, `hide` and more.
  * http://www.jquery.com
* GSAP
  * Greensock Animation Platform, is by far the most powerful of the three. It is intuitive and easy to use, and you will be amazed at the results.
  * https://greensock.com/gsap

Note: Just a reminder the stretch goals are just extra practice using the tools we have learned. These are not required. Only parts 1-3 are required portions of the project. If you do not get to the stretch goals, don't worry.

* Animation: There are many ways to animate elements on the screen corresponding to user interactions.  Read the documentation of the animation platform of your choice. Animate all of the components on click.
  * Animation Goal #1. Animate the menu opening: You will need to change the CSS for the menu in order to achieve this. Get the menu to slide in from the left side of the screen. And slide out when the button is clicked. Bonus: Get the menu to slide back out when the user clicks anywhere on the screen other than the menu. 
  * Animation Goal #2 Animate the article opening. This one is a bit trickier. You will need to change the CSS for this component as well. Animate the component so that it slides open and slides closed on each click. Update the text in the expand button to read `'Click to Expand'` or `'Click to Close'` depending on the state of the article. 

* Close Button

  Add a close (or 'read') button to each Article component. When clicked the article will disappear.

* Component Constructor
  
  Create a function that builds Article components. You are not expected to finish this. This goal is simply an exercise in thinking about how you would implement a function that took some data, created a new Article from it, and appended it to the HTML (without actually writing anything in the HTML file). This is a difficult concept to undertake, but even thinking about how you would implement it will give you a better understanding of how we use frameworks in upcoming sprints. 

* Implement a way to write your own articles using the Component Constructor and some input fields. 

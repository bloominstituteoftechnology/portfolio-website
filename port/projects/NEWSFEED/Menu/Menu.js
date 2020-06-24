/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

 

  // Step 1: Write a function that will create a menu component as seen below:

  function createMenu(arr){
    const div =   document.createElement('div')
    const ul = document.createElement('ul')
    div.classList.add('menu')

    div.appendChild(ul)

    for( i = 0; i < arr.length ; i++){
      var li = document.createElement('li')
      li.textContent = arr[i]
      ul.appendChild(li)
    }


  // <div class="menu">
  //   <ul>
  //     {each menu item as a list item}
  //   </ul>
  // </div>

  // The function takes an array as its only argument.

  // Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  // Add those items to the <ul>

  // Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.
   const menuButton = document.getElementsByClassName('menu-button')[0]
   const head = document.getElementsByClassName('header')[0]

  // Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

menuButton.addEventListener("click", function(){
      div.classList.toggle('menu--open');
});
 
  // Step 5: return the menu component.
head.appendChild(div)
}



  // Step 6: add the menu component to the DOM.

createMenu(menuItems)
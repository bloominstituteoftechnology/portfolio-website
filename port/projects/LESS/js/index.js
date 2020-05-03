// Your code goes here\




	let select = document.querySelectorAll('p')
select[0].addEventListener('mouseover', (event)=>{ event.target.style.color = 'blue'})
select[1].addEventListener('click', (event)=>{event.target.style.color = 'red'})
select[2].addEventListener('dblclick',(event)=>{event.target.style.color = 'green'})
document.getElementsByClassName('main-navigation')[0].addEventListener('scroll', (event)=> {event.target.style.border= 'solid'})
document.addEventListener('wheel',()=>{console.log('wheel')})
document.querySelectorAll('h1')[0].addEventListener('mouseup',(event)=>{event.target.style.color = 'pink'})
document.getElementsByClassName('img-fluid rounded')[0].addEventListener('mousedown',(event)=>{event.target.style.height = "2rem"})
document.getElementsByTagName('img')[0].addEventListener('contextmenu' ,(event)=> {event.target.style.width = '2rem'})
document.getElementsByTagName('img')[1].addEventListener('mouseout' ,(event)=> {event.target.style.border= 'solid'})
document.getElementsByTagName('body')[0].addEventListener('wheel',(event)=> {event.target.style.background= 'green'})
document.getElementsByClassName('btn')[0].addEventListener('mouseenter', (event) => event.target.style.color = "white")


// event.stopPropagation()


document.getElementsByClassName('nav-link')[0].addEventListener('click', (event) => {event.stopPropagation();event.target.style.color = 'red'})	
document.getElementsByClassName('nav')[0].addEventListener('click', (event) => event.target.style.background = 'blue')	

// preventDefault()

document.getElementsByClassName('nav')[0].addEventListener('click', (event) => {event.preventDefault()})

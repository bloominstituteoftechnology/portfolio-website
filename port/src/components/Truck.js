import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from "styled-components";
const Button = styled.button`
	color: black;
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid grey;
	border-radius: 3px;
`
// ---------------------------------=================
const Truck = () => {
const truckPic="/images/truck2.png"
const site1 = "/Users/nick/Lambda/portfolio-website/port/projects/LESS/index.html"
const site1Pic = "/images/dom2.png"
const site2 = "/Users/nick/Lambda/portfolio-website/port/projects/NEWSFEED/index.html"
const site2Pic = "/images/responsive.png"
const myPic = "images/me.jpeg"
const [pic , setPic] = useState(`${truckPic}`)



const [sites, setSites]	= useState([])
const [moveState, setMove]  = useState(true)
const images= document.getElementsByClassName('listImg')
const [target, setTarget]= useState(0)
const nextTarget = target-1
	const rowsArr = document.getElementsByClassName('row')







//     timer incremet
// const time = setTimeout(() =>{ setTarget( (target +1) %4  ) }, 800)
// const handleHover = ()=> {
// 	if (moveState  == true){
// 	setMove(false)
// 	}else if (moveState == false){
// 	setMove(true)
// 	}
// 	console.log(moveState)
// }
	
// if(moveState == false){clearTimeout(time) }
// console.log(target)


useEffect(()=>{

let  t = 0
let u  = 1

const change= () => { 
	if (rowsArr[t].style.background == 'black'){
		rowsArr[t].style.background = ''
	}else if(rowsArr[t].style.background !='black')
	{
		rowsArr[t].style.background ='black'
	}

	t = (t+1)%4
	 console.log(t)

}

// const change2= () => { 
// 	if (rowsArr[u].style.background != 'black'){
// 		rowsArr[u].style.background = 'black'
// 	}else if(rowsArr[u].style.background =='black')
// 	{
// 		rowsArr[u].style.background =''
// 	}

// 	u = (u+1)%4
// 	 console.log(u)

// }


setInterval(()=> {change()}, 1200)
// setInterval(()=> {change2()}, 1000)

	
})


return(
<div>
	<div className = "mainContainer"> 
		<div className = "container1">
			  <div className = "row" id ="row1"  >
			  	 	<p className = "tabs">ABOUT ME </p> 
			    <img className = "listImg" style ={{height: 100 }} src ={myPic}/>
			  </div>
			  <div className = "row" id ="row2" >
			  	<p className = "tabs"> PROJECTS PORTFOLIO </p> 
			    	<img className = "listImg" style ={{height: 50 }} src = {truckPic}/>
			  </div>
		</div>

		<div className = "container2">

		      <div className = "row" id ="row3" >
		      <p className = "tabs">AWARDS & ACHIEVEMENTS</p> 
		        <img className = "listImg" style ={{height: 50 }} src = {truckPic}/>
		      </div> 
		      <div className = "row" id ="row4" >
		      <p className = "tabs"> RESUME </p> 
		        <img className = "listImg" style ={{height: 50 }} src = {truckPic}/>
		      </div>
		      
		</div>
	</div>

	 
	<Button onClick = { () => { console.log('lcikc')}}>
	Stop
	</Button>
</div>
)
}
export default Truck

// onMouseOver = {() => {handleHover()}} onMouseLeave = {() => {handleHover()}}
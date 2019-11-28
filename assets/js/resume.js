//jshint esversion: 6
let workSection = document.querySelector('.work');

class Work {
    constructor(title, buisness, area, years, description) {
        this.title = title;
        this.buisness = buisness;
        this.area = area;
        this.years = years;
        this.description = description;

    }
}

let workArr = [];

// Create work objects
let ChurchWork = new Work("Site Janitor", '242 Community Center', 'Brighton, MI', 'March 216 - November 2018 ', ['Direct visitors to various events held at the community center','Collaborate with the team to assure all facilities were stocked and well-maintained', 'Communicate with staff during events to coordinate cleaning assignments']);
let Blogger = new Work("Blogger", 'AmazingMovies.org', 'Whitmore Lake, MI', 'November 2017 - November 2018 ', ['Maintain WordPress website','Engaged in professional development video casts to polish and learn new skills', 'Incorporate design elements to enhance UX','Utilize SEO optimization to rank on Google and other search engines']);
let Zoomer = new Work("Delivery Driver", 'Zoomer LLC', 'Ann Arbor, MI', 'October 2015 - January 2016', ['Operated fast-paced delivery service throughout the Ann Arbor Market','Received multiple compliments for my timely service and customer satisfaction', 'Planned and strategized more efficient routes to increase speed of service']);

// add objects to array
addToArray( workArr, ChurchWork);
addToArray( workArr, Blogger);
addToArray( workArr, Zoomer);

console.log(workArr);

// TODO ADD ELEMENTS TO DOM
workSection.innerHTML = `<div class='employer'><p class='workHeading'>${ChurchWork.title}<span class='dates'>
                        ${ChurchWork.years}</span></p><p class='buisnessAreas'>
                        ${ChurchWork.buisness}-${ChurchWork.area}</p><ul class='description'>
                        <li>${ChurchWork.description[0]}</li></div>`;



//add objects to array
function addToArray(arr, obj) {
    arr.push(obj);
}


const root = document.documentElement;
let siteData;
let destinations;
let crew;
let technology;

//set selectors for planet
const planetBody     = document.querySelector('.destination-planet-body');
const planetTitle    = document.querySelector('.destination-title');
const planetInfo     = document.querySelector('.destination-info');
const planetDistance = document.querySelector('.destination-distance');
const planetTime     = document.querySelector('.destination-time');

//set selectors for crew
const crewJob         = document.querySelector('.crew-job');
const crewName        = document.querySelector('.crew-name');
const crewDescription = document.querySelector('.crew-description');
const crewPhoto       = document.querySelector('.crew-photo');

//set selectors for technology
const technologyName = document.querySelector('.technology-name');
const technologyDescription = document.querySelector('.technology-info-text');
const technologyPhoto = document.querySelector('.technology-photo');

fetch('data.json')
    .then(response =>{
    return response.json();
})
    .then(data => {
        siteData = data;
        destinations = data['destinations'];
        crew = data['crew'];
        technology = data['technology'];

        changeDestination(0);
        changeCrew(0);
        changeTechnology(0);

        const navScript = document.createElement('script');
        navScript.src = 'nav.js';
        document.head.appendChild(navScript);
    });

    //remove class on list
function removeClass(nodeList , classToRemove){
    for(let i = 0; i < nodeList.length; i++){
        if(nodeList[i].classList.contains(classToRemove))
        {
            nodeList[i].classList.remove(classToRemove);
        }
    }
}
    //change destination planet
function changeDestination(destinationNumber){
    if(document.body.clientWidth > 768){
        planetBody.style.backgroundImage = `url('${destinations[destinationNumber].images.png} ')`;
    }
    planetTitle.innerHTML            = destinations[destinationNumber].name;
    planetInfo.innerHTML             = destinations[destinationNumber].description;
    planetDistance.innerHTML         = destinations[destinationNumber].distance;
    planetTime.innerHTML             = destinations[destinationNumber].travel;
}
    //change crew member
function changeCrew(crewNumber){
    crewJob.innerHTML               = crew[crewNumber].role;
    crewName.innerHTML              = crew[crewNumber].name;
    crewDescription.innerHTML       = crew[crewNumber].bio;
    if(document.body.clientWidth > 768){
        crewPhoto.style.backgroundImage = `url('${crew[crewNumber].images.png}')`;
    }
}
    //change technology
function changeTechnology(technologyNumber){
    technologyName.innerHTML = technology[technologyNumber].name;
    technologyDescription.innerHTML = technology[technologyNumber].description;
    if(document.body.clientWidth > 768){
        technologyPhoto.style.backgroundImage = `url('${technology[technologyNumber].images.portrait}')`;
    }
}

// document.onload(() => {
//     setClientHeight();
// })
const mainSection = document.querySelector('.body-main-info');

window.addEventListener('resize' , () => {setClientHeight()});

function setClientHeight(){
    let vh = window.innerHeight *0.01;
    // console.log(vh);
    if(document.body.clientWidth >= 769){
        // root.style.setProperty('--client-height' , document.body.clientHeight)
        mainSection.style.height = window.innerHeight;
        console.log(window.innerHeight);
    }
}
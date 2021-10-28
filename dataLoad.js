const root = document.documentElement;
let siteData;
let destinations;
let crew;
let technology;
let page = 0;

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
const technologyDescription = document.querySelector('.technology-info');
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
    planetBody.style.backgroundImage = `url('${destinations[destinationNumber].images.webp} ')`;
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
    crewPhoto.style.backgroundImage = `url('${crew[crewNumber].images.webp}')`;
}
    //change technology
function changeTechnology(technologyNumber){
    technologyName.innerHTML = technology[technologyNumber].name;
    technologyDescription.innerHTML = technology[technologyNumber].description;
    if(window.innerWidth <= 768){
        technologyPhoto.style.backgroundImage = `url('${technology[technologyNumber].images.landscape}')`;
    }
    else{
        technologyPhoto.style.backgroundImage = `url('${technology[technologyNumber].images.portrait}')`;
    }
}

window.addEventListener('resize' , () => {
    moveBody(page);
});
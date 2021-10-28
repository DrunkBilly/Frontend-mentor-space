//Main navigation selectors
const btnHome            = document.getElementById("home");
const btnDestination     = document.getElementById("destination");
const btnExplore         = document.querySelector(".body-main-explore");
const btnCrew            = document.getElementById("crew");
const btnTechnology      = document.getElementById("technology");

const body               = document.querySelector(".body-main-info");
const navItems           = document.getElementsByClassName('nav-item');

//Planet navigation selectors
const btnMoon            = document.getElementById("moon");
const btnMars            = document.getElementById("mars");
const btnEuropa          = document.getElementById("europa");
const btnTitan           = document.getElementById("titan");

const planetNavItems     = document.getElementsByClassName("destination-planet-item");

//Crew navigation selectors
const crewNavItems       = document.getElementsByClassName("crew-nav-item");

//Technology navigation selectors
const technologyNavItems = document.getElementsByClassName("technology-nav-item");

//Main navigation
btnHome.addEventListener('click', () => { //Home
    page = 0;
    moveBody(0);
    removeClass(navItems, 'nav-item-selected');
    btnHome.classList.add('nav-item-selected');
})

btnDestination.addEventListener('click', () => { //Destinations
    page = 1;
    moveBody(1);
    removeClass(navItems, 'nav-item-selected');
    btnDestination.classList.add('nav-item-selected');
})

btnExplore.addEventListener('click', () => { //Destinations
    page = 1;
    moveBody(1);
    removeClass(navItems, 'nav-item-selected');
    btnDestination.classList.add('nav-item-selected');
})

btnCrew.addEventListener('click', () =>{ //Crew
    page = 2
    moveBody(2);
    removeClass(navItems, 'nav-item-selected');
    btnCrew.classList.add('nav-item-selected');
})

btnTechnology.addEventListener('click', () =>{ //Crew
    page = 3;
    moveBody(3);
    removeClass(navItems, 'nav-item-selected');
    btnTechnology.classList.add('nav-item-selected');
})

//Planet navigation

btnMoon.addEventListener('click', () => { //Moon
    changeDestination(0);
    removeClass(planetNavItems, 'nav-item-selected');
    btnMoon.classList.add('nav-item-selected');
});
btnMars.addEventListener('click', () => { //Mars
    changeDestination(1);
    removeClass(planetNavItems, 'nav-item-selected');
    btnMars.classList.add('nav-item-selected');
});
btnEuropa.addEventListener('click', () => { //Europa
    changeDestination(2);
    removeClass(planetNavItems, 'nav-item-selected');
    btnEuropa.classList.add('nav-item-selected');
});
btnTitan.addEventListener('click', () => { //Titan
    changeDestination(3);
    removeClass(planetNavItems, 'nav-item-selected');
    btnTitan.classList.add('nav-item-selected');
});

//Crew navigation
crewNavItems[0].addEventListener('click', () =>{
    changeCrew(0);
    removeClass(crewNavItems, 'crew-nav-item-selected');
    crewNavItems[0].classList.add('crew-nav-item-selected');
});
crewNavItems[1].addEventListener('click', () =>{
    changeCrew(1);
    removeClass(crewNavItems, 'crew-nav-item-selected');
    crewNavItems[1].classList.add('crew-nav-item-selected');
});
crewNavItems[2].addEventListener('click', () =>{
    changeCrew(2);
    removeClass(crewNavItems, 'crew-nav-item-selected');
    crewNavItems[2].classList.add('crew-nav-item-selected');
});
crewNavItems[3].addEventListener('click', () =>{
    changeCrew(3);
    removeClass(crewNavItems, 'crew-nav-item-selected');
    crewNavItems[3].classList.add('crew-nav-item-selected');
});

//Technology navigation
technologyNavItems[0].addEventListener('click', () =>{
    changeTechnology(0);
    removeClass(technologyNavItems, 'technology-nav-item-selected');
    technologyNavItems[0].classList.add('technology-nav-item-selected');
});
technologyNavItems[1].addEventListener('click', () =>{
    changeTechnology(1);
    removeClass(technologyNavItems, 'technology-nav-item-selected');
    technologyNavItems[1].classList.add('technology-nav-item-selected');
});
technologyNavItems[2].addEventListener('click', () =>{
    changeTechnology(2);
    removeClass(technologyNavItems, 'technology-nav-item-selected');
    technologyNavItems[2].classList.add('technology-nav-item-selected');
});

function moveBody(page){
    if(document.body.clientWidth <= 768){
        body.style.marginTop = page * -100 + "vh";
    }
    else{
        body.style.marginLeft = page * -100 + "vw";
    }
}
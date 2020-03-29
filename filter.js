let filterArray =[all, all]
let  male = document.getElementByID("male")
let  female = document.getElementByID("female")
let  allgenders = document.getElementByID("allgenders")
let  year2020 = document.getElementByID("2020")
let  year2019 = document.getElementByID("2019")
let  year2018 = document.getElementByID("2018")
let  allyears = document.getElementByID("allyears")

//Gender Filter
//Male
function pushMale() {
    filterArray[0] = "male"
    male.classList.add("active")
    female.classList.remove("active")
    allgenders.classList.remove("active")
};
male.addEventListener("click", pushMale())


//Female
function pushFemale() {
    filterArray[0] = "female"
    male.classList.remove("active")
    female.classList.add("active")
    allgenders.classList.remove("active")
};
document.getElementByID("female").addEventListener("click", pushFemale())

//All Genders
function pushAllGenders() {
    filterArray[0] = "all"
    male.classList.remove("active")
    female.classList.remove("active")
    allgenders.classList.add("active")
};
document.getElementByID("allgenders").addEventListener("click", pushAllGenders())

//Year Filter
//2019
function push2020() {
    filterArray[1] = "2020"
    year2020.classList.add("active")
    year2019.classList.remove("active")
    year2018.classList.remove("active")
    allyears.classList.remove("active")
};
document.getElementByID("2020").addEventListener("click", push2020())

//2019
function push2019() {
    filterArray[1] = "2019"
    year2020.classList.remove("active")
    year2019.classList.add("active")
    year2018.classList.remove("active")
    allyears.classList.remove("active")
};
document.getElementByID("2019").addEventListener("click", push2019())

//2018
function push2018() {
    filterArray[1] = "2018"
    year2020.classList.remove("active")
    year2019.classList.remove("active")
    year2018.classList.add("active")
    allyears.classList.remove("active")
};
document.getElementByID("2018").addEventListener("click", push2018())

//All years
function pushAllYears() {
    filterArray[1] = "all"
    year2020.classList.remove("active")
    year2019.classList.remove("active")
    year2018.classList.remove("active")
    allyears.classList.add("active")
};
document.getElementByID("allyears").addEventListener("click", pushAllYears())

//Apply Filters 

function applyFilters() {
    switch(filterArray[0]) {
        case "male":
            document.getElementByClass("female").style.display = "none";
            break;
        case "female":
            document.getElementByClass("male").style.display = "none";
            break;
    }
    switch(filterArray[1]) {
        case "2020":
            document.getElementByClass("2019").style.display = "none";
            document.getElementByClass("2018").style.display = "none";
            break;
        case "2019":
            document.getElementByClass("2020").style.display = "none";
            document.getElementByClass("2018").style.display = "none";
            break;
        case "2018":
            document.getElementByClass("2020").style.display = "none";
            document.getElementByClass("2019").style.display = "none";
            break;
    }
}

getElementByID('applyFilters').onClick = applyFilters;
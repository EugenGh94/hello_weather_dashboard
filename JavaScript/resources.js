

// Imperial units
////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("units-Fahren").addEventListener('click', () => {
    document.getElementById("Celsius_Unit").style.transform = "translateX(93%)";
    document.getElementById("units-Fahren").style.color = "black";
    document.getElementById("units-Celsius").style.color = "white";
    sessionStorage.Units = "imperial";
    sessionStorage.Rain = "in";
    sessionStorage.Temp = "°F";
    sessionStorage.Wind = "mph"
    refresh = true;
    setTimeout(()=>{document.getElementById("units-Celsius").click();}, 500);});


// Metric units
////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("units-Celsius").addEventListener('click', () => {
    document.getElementById("Celsius_Unit").style.transform = "translateX(0%)";
    document.getElementById("units-Celsius").style.color = "black";
    document.getElementById("units-Fahren").style.color = "white";
    sessionStorage.Units = "metric";
    sessionStorage.Rain = "mm";
    sessionStorage.Temp = "°C";
    sessionStorage.Wind = "km/h"
    refresh = true;});


// Light theme
////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("light-Area").addEventListener('click', () => {
    sessionStorage.Theme = "Light";
    document.getElementById("mainBody").style.backgroundColor = "black";
    document.getElementById("mainBody").style.backgroundImage = sessionStorage.getItem("lasBackgroundImage");
    document.getElementById("lightBack").style.transform = "translateX(0%)";
    document.getElementById("darkBtnText").style.color = "white";
    document.getElementById("lightBack").style.backgroundColor = "white";
    document.getElementById("navSearch").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    document.getElementById("navSearch").style.boxShadow = "inset 2px 2px 6px rgba(0, 0, 0, 0.55)";
    document.getElementById("navTheme").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    document.getElementById("navTheme").style.boxShadow = "inset 2px 2px 6px rgba(0, 0, 0, 0.55)";
    document.getElementById("nav_Units").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    document.getElementById("nav_Units").style.boxShadow = "inset 2px 2px 6px rgba(0, 0, 0, 0.55)";
    sessionStorage.removeItem("lasBackgroundImage");
    document.querySelectorAll('.semiTranspWhite').forEach((element) => {element.classList.add('semiTranspBlack');});
    document.querySelectorAll('.semiTranspWhite').forEach((element) => {element.classList.remove('semiTranspWhite');});
    Array.from(document.getElementsByClassName("hoverWhite")).forEach((element) => {element.classList.add("hoverBlack");});
    Array.from(document.getElementsByClassName("hoverWhite")).forEach((element) => {element.classList.remove("hoverWhite");});});


// Dark theme
////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("dark-Area").addEventListener('click', () => {
    sessionStorage.Theme = "Dark";
    if (document.getElementById("mainBody").style.backgroundImage != "none"){
        sessionStorage.setItem("lasBackgroundImage", (`${document.getElementById("mainBody").style.backgroundImage}`));};
    document.getElementById("mainBody").style.backgroundColor = "black";
    document.getElementById("mainBody").style.backgroundImage = "none";
    document.getElementById("lightBack").style.transform = "translateX(93%)";
    document.getElementById("lightBack").style.backgroundColor = "white";
    document.getElementById("lightBack").style.boxShadow = "2px 2px 3px black"
    document.getElementById("darkBtnText").style.color = "black";
    document.getElementById("navSearch").style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    document.getElementById("navSearch").style.boxShadow = "inset 2px 2px 6px rgba(0, 0, 0)";
    document.getElementById("navTheme").style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    document.getElementById("navTheme").style.boxShadow = "inset 2px 2px 6px rgba(0, 0, 0)";
    document.getElementById("nav_Units").style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    document.getElementById("nav_Units").style.boxShadow = "inset 2px 2px 6px rgba(0, 0, 0)";
    document.querySelectorAll('.semiTranspBlack').forEach((element) => {element.classList.add('semiTranspWhite');});
    document.querySelectorAll('.semiTranspBlack').forEach((element) => {element.classList.remove('semiTranspBlack');});
    Array.from(document.getElementsByClassName("hoverBlack")).forEach((element) => {element.classList.add("hoverWhite");});
    Array.from(document.getElementsByClassName("hoverBlack")).forEach((element) => {element.classList.remove("hoverBlack");});});


// Checks units status at page load
////////////////////////////////////////////////////////////////////////////////////////
if (sessionStorage.Units == "imperial") {
    sessionStorage.Rain = "in";
    sessionStorage.Temp = "°F";
    sessionStorage.Wind = "mph"
    document.getElementById("units-Fahren").click();
} else {
    sessionStorage.Rain = "mm";
    sessionStorage.Temp = "°C";
    sessionStorage.Wind = "km/h"
    document.getElementById("units-Celsius").click();};


// Checks theme status at page load
////////////////////////////////////////////////////////////////////////////////////////
if (sessionStorage.Theme == "Dark") {
    document.getElementById("dark-Area").click();
} else {
    document.getElementById("light-Area").click();};
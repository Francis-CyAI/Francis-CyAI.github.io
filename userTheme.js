if (localStorage.getItem('theme') == null); {
    //localStorage.setItem('theme', "luminary");
    localStorage.setItem('theme', "theme");
};

if (localStorage.theme == "luminary") {
    setLuminary();
} else if (localStorage.theme == "eclipse") {
    setEclipse();
} else if (hrs < 18  && hrs > 6 || hrs == 18 && mins <= 14) {
    setLuminary();
} else if (hrs > 18 || hrs < 6 || hrs == 18 && mins >= 15) {
    setEclipse();
} else {
    //default
    setLuminary();
}

function setLuminary() {
    document.getElementById("styleSheetLink").href = "luminary.css";
    localStorage.theme = "luminary";
};

function setEclipse() {
    document.getElementById("styleSheetLink").href = "eclipse.css";
    localStorage.theme = "eclipse";
};


function getScreenWidth() {
    return document.querySelector('body').offsetWidth;
}

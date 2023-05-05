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

    document.getElementById("siteLogo").src = "luminary_campmar_icon.png";
    
    localStorage.theme = "luminary";
};

function setEclipse() {
    document.getElementById("styleSheetLink").href = "eclipse.css";

    document.getElementById("siteLogo").src = "eclipse_campmar_icon.png";

    localStorage.theme = "eclipse";
};


document.getElementById('homeLink').addEventListener('click', () => {
    window.open('index.html', '_self');
});
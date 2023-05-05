var ExpVMNIcon = '';
var RetVMNIcon = '';




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

document.getElementById('themeBtn').addEventListener('click', () => {
    if (localStorage.theme == "luminary") {
        //change to eclipe theme
        setEclipse();

    } else if (localStorage.theme == "eclipse") {
        //change to luminary theme
       setLuminary();
    }
});


function setLuminary() {
    document.getElementById("styleSheetLink").href = "luminary.css";

    document.getElementById("siteLogo").src = "icons/luminary_campmar_icon.png";
    document.getElementById("userIcon").src = "icons/luminary_user_icon.png";
    document.getElementById("themeIcon").src = "icons/luminary_theme_icon.png";
    document.getElementById("modeIcon").src = "icons/luminary_mode_icon.png";
    document.getElementById("categIcon").src = "icons/luminary_category_icon.png";
    document.getElementById("helpIcon").src = "icons/luminary_help_icon.png";
    document.getElementById("aboutIcon").src = "icons/luminary_about_icon.png"; 

	document.getElementById('themeName').innerHTML = 'Eclipse';

    document.getElementById("svExpIcon").src = "icons/luminary_expanded_view_icon.png";
    document.getElementById("svRetIcon").src = "icons/luminary_retracted_view_icon.png";

    ExpVMNIcon = "icons/luminary_expanded_view_icon.png";
    RetVMNIcon = "icons/luminary_retracted_view_icon.png"

    localStorage.theme = "luminary";
};

function setEclipse() {
    document.getElementById("styleSheetLink").href = "eclipse.css";

    document.getElementById("siteLogo").src = "icons/eclipse_campmar_icon.png";
    document.getElementById("userIcon").src = "icons/eclipse_user_icon.png";
    document.getElementById("themeIcon").src = "icons/eclipse_theme_icon.png";
    document.getElementById("modeIcon").src = "icons/eclipse_mode_icon.png";
    document.getElementById("categIcon").src = "icons/eclipse_category_icon.png";
    document.getElementById("helpIcon").src = "icons/eclipse_help_icon.png";
    document.getElementById("aboutIcon").src = "icons/eclipse_about_icon.png";

	document.getElementById('themeName').innerHTML = "Luminary";

    document.getElementById("svExpIcon").src = "icons/eclipse_expanded_view_icon.png";
    document.getElementById("svRetIcon").src = "icons/eclipse_retracted_view_icon.png";

    ExpVMNIcon = "icons/eclipse_expanded_view_icon.png";
    RetVMNIcon = "icons/eclipse_retracted_view_icon.png"

    localStorage.theme = "eclipse";
};

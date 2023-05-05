function getScreenWidth() {
    return document.querySelector('body').offsetWidth;
}


//mm: mini menu
const mmNormalHeight = '220px';

var inCatFromTop = 60;
var menuWidth = 0;
var mmForCatWidth = 0;
var mmForCatHeight = 0;
var mmForCatRight = 0;
var mmForCatTop = 0;
var mmForModeTop = 0;
var mmForHelpTop = 0;
var mmForAboutTop = 0;


if (getScreenWidth() <= 560) {
    //For small screens

    inCatFromTop = 40;
    menuWidth = 45;
    mmForCatWidth = 90;
    mmForCatRight = 5;
    mmForCatHeight = 90;
    mmForCatTop = 5;
    mmForModeTop = 80 + (2 * 45) + 65;
    mmForHelpTop = 80 + (4 * 45) + 65;
    mmForAboutTop = 80 + (5 * 45) + 65;

} else if (getScreenWidth() > 560 && getScreenWidth() <= 820) {
    //For medium-sized screens

    menuWidth = 35;
    mmForCatWidth = 75;
    mmForCatRight = 12.5;
    mmForCatHeight = 85;
    mmForCatTop = 12.5;
    mmForModeTop = 100 + (2 * 45) + 85;
    mmForHelpTop = 100 + (4 * 45) + 85;
    mmForAboutTop = 100 + (5 * 45) + 85;

} else {
    //For large screens

    menuWidth = 35;
    mmForCatWidth = 60;
    mmForCatRight = 20;
    mmForCatHeight = 80;
    mmForCatTop = 10;
    mmForModeTop = 120 + (2 * 45) + 85;
    mmForHelpTop = 120 + (4 * 45) + 85;
    mmForAboutTop = 120 + (5 * 45) + 85;

}


let categories = [
	`<a href="#" class="specialA">Apparel</a>`,
	`<a href="#" class="specialA">Auto</a>`,
	`<a href="#" class="specialA">Electronics</a>`,
	`<a href="#" class="specialA">Fashion</a>`,
	`<a href="#" class="specialA">Foods</a>`,
	`<a href="#" class="specialA">Footwear</a>`,
	`<a href="#" class="specialA">Health</a>`,
	`<a href="#" class="specialA">Sport</a>`,
	`<a href="#" class="specialA">Other</a>`,
	`<a href="#" class=""></a>`
];

const navInst = `

`;



document.getElementById('catBtn').addEventListener('click', () => {
	loadCover();
	changeTB('miniMenu', `${mmForCatTop}%`, -1);
	changeWHOZ('miniMenu', `${mmForCatWidth}%`, `${mmForCatHeight}%`, '1', '5');
	changeLR('miniMenu', -1,  `${mmForCatRight}%`);

	var divNumber = 0;
	for (let i =  0; i < categories.length; i++) {
		if (getScreenWidth() <= 560) {
			//add one thing per line

			if (divNumber == 0) {
				divNumber = 1;
				populate('contentContainer', 'change', `<div id="catDiv${divNumber}"  class="specialDiv">${categories[i]}</div>`);
			} else {
				populate('contentContainer', 'add', `<div id="catDiv${divNumber}"  class="specialDiv">${categories[i]}</div>`);
			}
			divNumber++;

		} else {
			//add two things per line
				if (divNumber == 0) {
					divNumber = 1;
					populate('contentContainer', 'change', `<div id="catDiv${divNumber}"  class="specialDiv">${categories[i]}</div>`);
					populate(`catDiv${divNumber}`, 'add', `${categories[i + 1]}`);
				} else {
					populate('contentContainer', 'add', `<div id="catDiv${divNumber}"  class="specialDiv">${categories[i]}</div>`);
					populate(`catDiv${divNumber}`, 'add', `${categories[i + 1]}`);
				}
			divNumber++;
			i++;
		}	
	}
});



document.getElementById('helpBtn').addEventListener('click', () => {
	changeTB('miniMenu', `${mmForHelpTop}px`, -1);
	populate('contentContainer', 'change', `
	<a href="javascript:void(0)" onClick="showNavHelp()" class="centerContent opt firstOpt">Navigation</a>
    <a href="#" class="centerContent opt secondOpt">FAQ</a>
    <a href="#" class="centerContent opt thirdOpt">Contact Us</a>
	`);
	openMiniMenu();
});

document.getElementById('aboutBtn').addEventListener('click', () => {
	changeTB('miniMenu', `${mmForAboutTop}px`, -1);
	populate('contentContainer', 'change', `<a href="campmar.html" class="centerContent opt firstOpt">Campmar</a>
    <a href="locations.html" class="opt centerContent secondOpt">Locations</a>`);
	openMiniMenu();
});


function resetNavHelpTextColor() {
    const allElements = ['i&s-switchHlLink', 'vfsHlLink', 'upload-i&sHlLink', 'log-statHlLink', 'sign-i&uHlLink', 'i&s-switch', 'vfs', 'upload-i&s', 'log-stat', 'sign-i&u'];

    for (var i = 0; i < allElements.length; i++) {
        changeC(allElements[i], 'orange');
    }
}

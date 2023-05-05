/* Vars */
var menuClosed = true;
var shouldKeepLoading = false;


/*Event listeners and other*/




/* ----------------------------------------------------------------------------------------------------------------------------*/

function showNavHelp() { 
    changeWHOZ('navHelpWH', -1, -1,  '1', '5');
}
function closeNavHelp() { 
    changeWHOZ('navHelpWH', -1, -1,  '0', '-1');
}


function openLoader() {
	document.getElementById('loaderStylesheet').href = 'loaderStylesheet.css';
}
function closeLoader() {
	document.getElementById('loaderStylesheet').href = '';
}


function loadAlert() {
	loadCover();
	changeWHOZ('alertBox', -1, -1, '1', '5');
}
function loadAlert2(message) {
	loadCover();
	changeWHOZ('alertBox', -1, -1, '1', '5');
	populate('alertMsg', 'change', message);
}
function closeAlert() {
	changeWHOZ('alertBox', -1, -1, '0', '-1');
	closeCover();
}

// WARNING!! Code below is asynchronous
async function delayCloseAlert(timeLength) {
	await new Promise(r => setTimeout(r, timeLength));
	closeAlert();
}

function delay(timeLength) {
	setTimeout(() => {
		//Do nothing
	}, timeLength);
}
function loadCover() {
	changeWHOZ('cover', -1, -1, '1', '4');
}
function closeCover() {
	changeWHOZ('cover', -1, -1, '0', '-1');
}

function loadMiniCover() {
	changeWHOZ('miniCover', -1, -1, '1', '2');
}
function closeMiniCover() {
	changeWHOZ('miniCover', -1, -1, '0', '-1');
}


function openMenu() {
	changeWHOZ('menu', `${menuWidth}%`, -1, '1', '3');
}

function closeMenu() {
	changeWHOZ('menu', '0%', -1, '0', '-1');
}

function openMiniMenu() {
	changeWHOZ('miniMenu', '40%', mmNormalHeight, '1', '3');
	changeLR('miniMenu', -1, `${menuWidth}%`);

}

function closeMiniMenu() {
	changeWHOZ('miniMenu', '0%', -1, '0', '-1');
	closeCover();
}

function openResultBoard() {
	changeWHOZ('resultBoard', -1, '60px', '1', '3');
}

function closeResultBoard() {
	changeWHOZ('resultBoard', -1, '0px', '0', '-1');
}

function loadCover() {
	changeWHOZ('cover', -1, -1, '1', '4');
}
function closeCover() {
	changeWHOZ('cover', -1, -1, '0', '-1');
}

function loadMiniCover() {
	changeWHOZ('miniCover', -1, -1, '1', '2');
}
function closeMiniCover() {
	changeWHOZ('miniCover', -1, -1, '0', '-1');
}


function tranformMenuIcon() {

	document.getElementById('line1').style.transform = 'rotate(-45deg)';
	
	document.getElementById('line2').style.transform = 'rotate(45deg)';
	document.getElementById('line2').style.top = '5px';
}

function restoreMenuIcon() {

	document.getElementById('line1').style.transform = 'rotate(0deg)';
	
	document.getElementById('line2').style.transform = 'rotate(0deg)';
	document.getElementById('line2').style.top = '15px';
}

function unavailable() {
	document.getElementById('alertMsg').innerHTML = 'This feature is currently unavailable. Website is 3% complete. Feel free to explore!'
}


function loadLogForm() {
		changeWHOZ('logDiv', -1, -1, '1', '5');
}
function closeLogForm() {
	changeZ('LLSCover', '-1');
	changeWHOZ('logDiv', -1, -1, '0', '-1');
}

function showSignInForm() {
	if (hrs < 18  && hrs >= 6 || hrs == 18 && mins <= 14) {
		//luminary period
		changeBgC('signinFormBtn', '#eee');
		changeC('signinFormBtn', '#aaa');
		changeBgC('signupFormBtn', '#aaa');
		changeC('signupFormBtn', '#fff');

	} else if (hrs > 18 || hrs < 6 || hrs == 18 && mins >= 15) {
		//eclipse period
		changeBgC('signinFormBtn', '#bbb');
		changeC('signinFormBtn', '#888');
		changeBgC('signupFormBtn', '#888');
		changeC('signupFormBtn', '#ddd');

	}
	changeWHOZ('signupForm', '0', '0', '0', '-1');
	changeWHOZ('signinForm', '100%', '100%', '1', '0');

	changeZ('LLSCover', '-1');
}
function showSignUpForm() {
	if (hrs < 18  && hrs >= 6 || hrs == 18 && mins <= 14) {
		//lumianry period
		changeBgC('signupFormBtn', '#eee');
		changeC('signupFormBtn', '#aaa');
		changeBgC('signinFormBtn', '#aaa');
		changeC('signinFormBtn', '#fff');
	} else if (hrs > 18 || hrs < 6 || hrs == 18 && mins >= 15) {
		//eclipse period
		changeBgC('signupFormBtn', '#bbb');
		changeC('signupFormBtn', '#888');
		changeBgC('signinFormBtn', '#888');
		changeC('signinFormBtn', '#ddd');
	}
	changeWHOZ('signinForm', '0', '0', '0', '-1');
	changeWHOZ('signupForm', '100%', '100%', '1', '0');

	changeZ('LLSCover', '6');
}


function goBack() {
	history.back();
}

function appreciate() {
	alert('Thanks for testing the site. Most features are unavailable because it is still being developed.')
}


function showSVButtons() {
	changeWHOZ('SVBH', -1, '145px', '1', '1');

	changeWHOZ('svRetBtn', -1, -1, '1', '1');
	changeTB('svRetBtn', -1, `${151.25 + 1 * 45 + 1 * 2.5}px`);

	changeWHOZ('svExpBtn', -1, -1, '1', '1');
	changeTB('svExpBtn', -1, `${151.25 + 2 * 45 + 2 * 2.5}px`);
}
function hideSVButtons() {
	changeWHOZ('SVBH', -1, '51px', '1', '1');

	changeWHOZ('svRetBtn', -1, -1, '0', '-1');
	changeTB('svRetBtn', -1, '151.25px');

	changeWHOZ('svExpBtn', -1, -1, '0', '-1');
	changeTB('svExpBtn', -1,'151.25px');

	setTimeout(() => {
		changeWHOZ('SVBH', -1, '51px', '0', '-1');
	}, 1000);
}
function hideSVButtonQuick() {
	changeWHOZ('SVBH', -1, '51px', '1', '1');

	changeWHOZ('svRetBtn', -1, -1, '0', '-1');
	changeTB('svRetBtn', -1, '151.25px');

	changeWHOZ('svExpBtn', -1, -1, '0', '-1');
	changeTB('svExpBtn', -1,'151.25px');

	changeWHOZ('SVBH', -1, '51px', '0', '-1');
}


function showVMN() {
	changeWHOZ('VMN', -1, '50px', '1', '5');
}
function hideVMN() {
	changeWHOZ('VMN', -1, '0px', '0', '-1');
}

/*---------------------------------------------------------------------------------------------------------------*/


//Simple functions

function changeW(ident, val1) {
	//Width-changing function
	document.getElementById(ident).style.width = val1;
}

function changeH(ident, val2) {
	//Height-changing function
	document.getElementById(ident).style.height = val2;
}

function changeO(ident, val3) {
	//Opacity-changing function
	document.getElementById(ident).style.opacity = val3;
}

function changeZ(ident, val4) {
	//zIndex-changing function
	document.getElementById(ident).style.zIndex = val4;
}

function changeWH(ident, val1, val2) {
	//Width and Height - changing function
	changeW(ident, val1);
	changeH(ident, val2);
}

//Compound functions

function changeWHO(ident, val1, val2, val3) {
	//Width, Height and Opacity - changing function
	if (val1 === -1) {
        changeH(ident, val2); 
		changeO(ident, val3);
	} else if (val2 === -1) {	
		changeW(ident, val1);
		changeO(ident, val3);
    } else {
		changeW(ident, val1);
	    changeH(ident, val2);
		changeO(ident, val3);
	}
}

function changeWHZ(ident, val1, val2, val4) {
	if (val1 === -1) {
		changeH(ident, val2);
		changeZ(ident, val4);
	} else if (val2 === -1) {
		changeW(ident, val1);
		changeZ(ident, val4);
	} else {
		changeW(ident, val1);
	    changeH(ident, val2);
		changeZ(ident, val4);
	}
}

function changeWHOZ(ident, val1, val2, val3, val4) {
	//Width, Height, Opacity and zIndex - changing function
	if (val1 === -1) {
		if (val2 === -1) { 
		    //If both Width and Height changes are not needed then change only Opacity and zIndex
			changeO(ident, val3); 
		    changeZ(ident, val4);
		} else {	
            //else change Height, Opacity and zIndex if only Width change is not needed			
			changeH(ident, val2);
			changeO(ident, val3);
			changeZ(ident, val4);
		}	
	} else if (val1 != -1 && val2 === -1) {
		changeW(ident, val1);
		changeO(ident, val3);
		changeZ(ident, val4);
	} else {
		changeW(ident, val1);
		changeH(ident, val2);
		changeO(ident, val3);
		changeZ(ident, val4);
	}	
}	


function changeTB(ident, val1, val2) {
	//Top-Bottom-changing function
	if (val1 == -1 && val2 != -1) {
		document.getElementById(ident).style.bottom = val2;
	} else if (val2 == -1 && val1 != -1) {
		document.getElementById(ident).style.top = val1;
	} else {
		return;
	}
}

function changeLR(ident, val1, val2) {
	//Left-Right-changing function
	if (val1 == -1 && val2 != -1) {
		document.getElementById(ident).style.right = val2;
	} else if (val2 == -1 && val1 != -1) {
		document.getElementById(ident).style.left = val1;
	} else {
		return;
	}
}

function changeC(ident, val) {
	//Color-changing function
	document.getElementById(ident).style.color = val;
}

function changeBgC(ident, val) {
	//Background-color-changing function
	document.getElementById(ident).style.backgroundColor = val;
}


function populate(ident, signal, content) {
	if (signal == 'add') {
		document.getElementById(ident).innerHTML += content;
	} else if (signal == 'change') {
		document.getElementById(ident).innerHTML = content;
	} else {
		return; 

	}
}

function dePopulate(ident, signal, content) {
	if (signal == 'one') {
		document.getElementById(ident).innerHTML -= content;
	} else if (signal == 'all') {
		document.getElementById(ident).innerHTML = '';
	} else {
		return; 
	}
}

function goHome() {
	window.open("index.html", "_self");
}

function getIpAddress() {
	const mockIP = '192.168.200.104';
	return mockIP;
}

document.getElementById('logBtn').addEventListener('click', () => {
	window.open("sign.html", "_self");

});


document.getElementById('menuBtn').addEventListener('click', () => {
	if (menuClosed == true)  {
		 tranformMenuIcon();
		 loadMiniCover();
		 openMenu();
		 menuClosed = false;
	} else if (menuClosed == false) {
		 closeMiniMenu();
		 closeMenu();
		 closeMiniCover();
		 restoreMenuIcon();
		 menuClosed = true;
	} 
 });


document.getElementById('closeMiniMenuBtn').addEventListener('click', () => {
	closeMiniMenu();
})





/* Functions */

function openSearchResultsWindow() {
	changeWHOZ('searchResultsDH', -1, -1, '1', '5');
}
function closeSearchResultsWindow() {
	populate('searchResultsDiv', 'change', '');
	changeWHOZ('searchResultsDH', -1, -1, '0', '-1');
}

function showItems() {
	changeWHOZ('container1', '100%', 'auto', '1', '0');
	document.getElementById('itemsBtn').style.textDecoration = "underline";
}
function hideItems() {
	changeWHOZ('container1', '0', '0', '0', '-1');
	document.getElementById('itemsBtn').style.textDecoration = "none";
}

function showServices() {
	changeWHOZ('container2', '100%', 'auto', '1', '0');
	document.getElementById('servicesBtn').style.textDecoration = "underline";
}
function hideServices() {
	hideSVButtonQuick();

	changeWHOZ('container2', '0', '0', '0', '-1');
	document.getElementById('servicesBtn').style.textDecoration = "none";
}

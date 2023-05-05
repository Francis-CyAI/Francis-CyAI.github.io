/* Constants and Variables */

var chosenCategory = '';
var chosenSubCategory = '';


const apparelCatHtml = `
<label class="add-sub-category">Apparel:
    <select class="add-input" id="apparelType">
        <option label="Choose" value="">
        <option label="Bras / Underwears" value="brasAndUnderwears">
        <option label="Coats / Jackets" value="coatsAndJackets">
        <option label="Shirts / T-Shirts" value="shirtsAndTShirts">
        <option label="Shorts / Trousers" value="shortsAndTrousers">
        <option label="Socks" value="socks">
        <option label="Sweaters / Hoodies" value="sweatersAndHoodies">
        <option label="Vests" value="vests">
        <option label="Other" value="other">
    </select>
</label>
`;
var apparelCatJS = `
	chosenSubCategory = document.getElementById('apparelType').value;
`;


const electronicsCatHtml = `
<label class="add-sub-category">Electronics:
	<select class="add-input" id="electronicsType">
        <option label="Choose" value="">
        <option label="Bluetooth Speakers" value="BTSpeakers">
        <option label="Computers / Laptops" value="conputersAndLaptops">
        <option label="Chargers" value="chargers">
        <option label="Digital Cameras" value="digitalCameras">
        <option label="Flash Drives" value="flashDrives">
        <option label="Game Consoles" value="gameConsoles">
        <option label="Hard Drives / SSD" value="hardDrives">
        <option label="Headsets" value="headsets">
        <option label="Memory Cards" value="memoryCards">
        <option label="Mobile Phones" value="mobilePhones">
        <option label="Monitors / TVs" value="monitorsAndTVs">
        <option label="RAM" value="ram">
        <option label="Smart Watches" value="smartWatches">
        <option label="Tablets" value="tablets">
        <option label="USB Cables" value="USBCables">
        <option label="Other" value="other">
	</select>
</label>
`;
var electronicsCatJS = `
	chosenSubCategory = document.getElementById('electronicsType').value;
`;


const foodsCatHtml = `
<label class="add-sub-category">Foods:
    <select class="add-input" id="foodType">
        <option label="Choose" value="">
        <option label="Beverages" value="beverages">
        <option label="Confectioneries" value="confectioneries">
        <option label="Dairy" value="dairy">
        <option label="Dry Foods" value="dry">
        <option label="Fresh Foods" value="fresh">
        <option label="Frozen Foods" value="frozen">
        <option label="Fruits" value="fruits">
        <option label="Grains" value="grains">
        <option label="Veggies" value="vegetables">
        <option label="Other" value="other">
    </select>
</label>
`;
var foodsCatJS = `
	chosenSubCategory = document.getElementById('foodType').value;
`;


const nameHtml = `
<label>Item Name: <input type="text" size="25" class="add-input" id="itemName"></label>
`;


const priceHtml = `
<label>Price (ZMW): <input type="number" min="5" size="5" class="add-input" id="itemPrice" placeholder="ZMW" required></label>
`;


const pictureInputHtml = `
<label>Picture(s) '.png/.jpg':<input type="file" accept="image/png, image/jpg, image/jpeg" class="add-input add-img-input" label="Tap to select" multiple required></label>
`;


const itemDetsHtml = `
<label>Details:
    <textarea class="add-input add-text-area" id="itemDets" placeholder="Pull down bottom-right corner to adjust"></textarea>
</label>
`;




/* Event Listeners */

/*
document.getElementById('').addEventListener('event', () => {
})
*/


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


document.getElementById('openNWBtn').addEventListener('click', () => {
	loadCover();
	changeWHOZ('notifWindHolder', -1, -1, '1', '5');
	changeWHOZ('NIHCover', -1, -1, '1', '6');
})
document.getElementById('NWHCloseBtn').addEventListener('click', () => {
	closeNotifWindow();	
	closeCover();
})
document.getElementById('SNIBtn').addEventListener('click', () => {
	closeNotifWindow();	
	closeCover();
})
document.getElementById('NIHCover').addEventListener('click', () => {
	closeNotifWindow();
	loadAlert();
	populate('alertMsg', 'change', `Feature not yet implemented`);
	delayCloseAlert(2000);	
})


document.getElementById('openAIWBtn').addEventListener('click', () => {
	loadCover();
	changeWHOZ('addItemHolder', -1, -1, '1', '5');
})
document.getElementById('AIWHCloseBtn').addEventListener('click', () => {
	changeWHOZ('addItemHolder', -1, -1, '0', '-1');
	closeCover();
})


document.getElementById('openASWBtn').addEventListener('click', () => {
	loadCover();
	changeWHOZ('addServiceHolder', -1, -1, '1', '5');
})
document.getElementById('ASWHCloseBtn').addEventListener('click', () => {
	changeWHOZ('addServiceHolder', -1, -1, '0', '-1');
	closeCover();
})


document.getElementById('openUIWBtn').addEventListener('click', () => {
	loadCover();
	changeWHOZ('userInfoDiv', -1, -1, '1', '5');
})
document.getElementById('UIWCloseBtn').addEventListener('click', () => {
	changeWHOZ('userInfoDiv', -1, -1, '0', '-1');
	closeCover();
})


document.getElementById('goHomeBtn').addEventListener('click', () => {
	goHome();

})



document.getElementById('delAccBtn').addEventListener('click', () => {
	loadCover();
	changeWHOZ('delAlertBox', -1, -1, '1', '5');
})
document.getElementById('yedDelAccBtn').addEventListener('click', () => {
	changeWHOZ('delAlertBox', -1, -1, '0', '-1');
	loadAlert();
	populate('alertMsg', 'change', 'Sad to see you go. Hope you can change your mind and come back...');
	setTimeout(() => {
		populate('alertMsg', 'change', 'You may still log in within 60 days from the date of deletion');
	}, 4000);
	setTimeout(() => {
		window.open('sign.html', '_self');
	}, 7000);
})
document.getElementById('cancelDelAccBtn').addEventListener('click', () => {
	changeWHOZ('delAlertBox', -1, -1, '0', '-1');
	loadAlert();
	populate('alertMsg', 'change', `Glad you could stay!`);
	delayCloseAlert(1500);
})




document.getElementById('catChoice').addEventListener('change', () => {

	chosenCategory = document.getElementById('catChoice').value;

	switch (chosenCategory) {
		case 'apparel':
			populate('addItemForm', 'add', apparelCatHtml);
			populate('otherJS', 'add', apparelCatJS);
		break;
		case 'auto':
			
		break;
		case 'electronics':
			populate('addItemForm', 'add', electronicsCatHtml);
			populate('otherJS', 'add', electronicsCatJS);
		break;
		case 'fashion':

		break;
		case 'foods':
			populate('addItemForm', 'add', foodsCatHtml);
			populate('otherJS', 'add', foodsCatJS);
		break;
		case 'footwear':

		break;
		case 'health':

		break;
		case 'sport':

		break;
		default:
	} 
	populate('addItemForm', 'add', nameHtml);
	populate('addItemForm', 'add', priceHtml);
	populate('addItemForm', 'add', pictureInputHtml);
	populate('addItemForm', 'add', itemDetsHtml);
})






/* Functions */

function addContent(holder, number, content) {
	for (var i = 0; i < number; i++) {
		populate(holder, 'add', content);
	}
}

function closeNotifWindow() {
	changeWHOZ('NIHCover', -1, -1, '0', '-1');
	changeWHOZ('notifWindHolder', -1, -1, '0', '-1');
}

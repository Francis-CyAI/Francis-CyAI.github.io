const url = 'http://127.0.0.1:8080/q04';

var items = [];
var services = [];
fetch(url)
	.then(response => response.json())
	.then(object => {
		items = object["items"];
		services = object["services"];
		//TODO: this needs removal
		console.log('Number of items is  ', items.length);
		console.log(items);
		console.log('Number of serrvices is  ', services.length);
		console.log(services);
	})
	.catch(error => {
		console.error(error);
	});

setTimeout(() => {
	initiateRender(items, services);
}, 1500);

{
	//Creating scope

	var logStatMsg = 'You\'re currently logged out';

	fetch(`http://127.0.0.1:8080/q01+${getIpAddress()}+`)
	.then(response => response.json())
	.then(object => {
		if (object['autoLoggin'] || object['Loggin']) {
			document.getElementById('logStatIcon').src = 'icons/logged_in_icon.png';
			logStatMsg = 'You\'re currently logged in';

		} else {
			//Do nothing and stick to defaults
		}
	})
	.catch(error => {
		console.error(error);
	});

	document.getElementById('logStat').addEventListener('click', () => {
		loadAlert();
		populate('alertMsg', 'change', logStatMsg);
		delayCloseAlert(1500);
	});
}

let demoSearchResultsNumber = 0;

document.getElementById('searchBtn').addEventListener('click', () => {
	if (menuClosed == false) {
		closeMenu();
		restoreMenuIcon();
	}
	demoSearchResultsNumber = prompt('How many demo search results should we add?');
	document.getElementById('resultNumber').innerHTML = `${demoSearchResultsNumber}`;
	openResultBoard();
});

document.getElementById('viewResultBtn').addEventListener('click', () => {

	var number = document.getElementById('resultNumber').textContent;

	if (number <= 0) {

		loadAlert();
		populate('alertMsg', 'change', 'No results found.');
		delayCloseAlert(1000);

		closeResultBoard();
	} else {
		loadCover();
		openLoader();
		setTimeout (() => {
			addSearchResults(demoSearchResultsNumber);
			closeResultBoard();
			openSearchResultsWindow();
			closeLoader();
			closeCover();
		}, 250);
		
	}
	
});

document.getElementById('closeBoardBtn').addEventListener('click', () => {
	closeResultBoard();
});


document.getElementById('closeSearchWinBtn').addEventListener('click', () => {
	closeSearchResultsWindow();
});



document.getElementById('itemsBtn').addEventListener('click', () => {
	hideServices();
	showItems();	
})

document.getElementById('servicesBtn').addEventListener('click', () => {
	hideItems();
	showServices();
})

document.getElementById('modeBtn').addEventListener('click', () => {
	changeTB('miniMenu', `${mmForModeTop}px`, -1);
	populate('contentContainer', 'change',`<a href="#" class="underlined centerContent opt firstOpt">Buying</a>
    <a href="user.html" class="opt centerContent secondOpt">Selling</a>`);
	openMiniMenu();
    changeH('miniMenu', '140px');
});



document.getElementById('container2').addEventListener('click', () => {
	showSVButtons();
})
document.getElementById('hvVBBtn').addEventListener('click', () => {
	hideSVButtons();
})
document.getElementById('svRetBtn').addEventListener('click', () => {
	document.getElementById('expSservicesCSS').href = '';

	document.getElementById('VMNIcon').src = RetVMNIcon
	populate('VMMsg', 'change', 'Retracted Service View');
	showVMN();
	setTimeout(() => {
		hideVMN();
	}, 2500)
})
document.getElementById('svExpBtn').addEventListener('click', () => {
	document.getElementById('expSservicesCSS').href = 'expServices.css';

	document.getElementById('VMNIcon').src = ExpVMNIcon
	populate('VMMsg', 'change', 'Expanded Service View');
	showVMN();
	setTimeout(() => {
		hideVMN();
	}, 2500)
})


async function initiateRender(itemsArray, servicesArray) {
	await new Promise(r => renderItemsAndServices(itemsArray, servicesArray))
}

function renderItemsAndServices(itemsArray, servicesArray) {
	var numberOfItems = itemsArray.length;
	var numberOfServices = servicesArray.length;
	
	var leftNumberOfItems = numberOfItems;
	var numberOfDivs = Math.ceil(numberOfItems / 20); // therefore, 20 items per div
	let i = 1;
	while (leftNumberOfItems > 0) {
		var itemIndex = 0;
		for (; i <= numberOfDivs; ) {
			populate('container1', 'add', `
			<div id="IRD-${i}" class="itemRowDiv"> 
			</div>
			`);
			if (leftNumberOfItems >= 20) {
				for (let j = 20; j > 0; j--) {
					let item = itemsArray[itemIndex];
					itemIndex++;
					populate(`IRD-${i}`, 'add', `
						<span class="item">
							<img class="itemImg" src="${item["Picture"]}"/>
							<h6 class="minorDets">
								K${item["Price"]} | ${item["Name"]}
							</h6>
							<p class="item-subMinorDets">
								<span><img class="location-icon" src="icons/google_maps_icon.png" /></span> &nbsp; Location
							</p>
							<p class="item-mainDets">
								${item["Details"]}
							</p> 
							<p class="item-contact-btn whatsapp-btn">
								<img class="whatsapp-icon" src="icons/whatsapp.png" /> Whatsapp
							</p>
							<p class="item-contact-btn call-btn">
								<img class="call-icon" src="icons/call_icon.png" /> Call
							</p>  
						</span>
					`);
					leftNumberOfItems--
				}
			} else {
				for (let j = leftNumberOfItems; j > 0; j--) {
					let item = itemsArray[itemIndex];
					itemIndex++;
					populate(`IRD-${i}`, 'add', `
						<span class="item">
							<img class="itemImg" src="${item["Picture"]}"/>
							<h6 class="minorDets">
								K${item["Price"]} | ${item["Name"]}
							</h6>
							<p class="item-subMinorDets">
								<span><img class="location-icon" src="icons/google_maps_icon.png" /></span> &nbsp; Location
							</p>
							<p class="item-mainDets">
								${item["Details"]}
							</p> 
							<p class="item-contact-btn whatsapp-btn">
								<img class="whatsapp-icon" src="icons/whatsapp.png" /> Whatsapp
							</p>
							<p class="item-contact-btn call-btn">
								<img class="call-icon" src="icons/call_icon.png" /> Call
							</p>  
						</span>
					`);
					leftNumberOfItems--
				}
			}
			i++;
		}
	}

	var leftNumberOfServices = numberOfServices;
	var numberOfDivs = Math.ceil(numberOfServices / 10); // therefore, 10 services per div
	let k = 1;
	while (leftNumberOfServices > 0) {
		var serviceIndex = 0;
		for (; k <= numberOfDivs; ) {
			populate('container2', 'add', `
			<div id="SRD-${k}" class="serviceRowDiv"> 
			</div>
			`);
			if (leftNumberOfServices >= 10) {
				for (let j = 10; j > 0; j--) {
					let service = servicesArray[serviceIndex];
					serviceIndex++;
					populate(`SRD-${k}`, 'add', `
						<span id="#" class="link service">
							<img class="serviceImg" src="${service["Picture"]}"/>
							<h6 id="#" class="serviceName SD-field">${service["Name"]}</h6> 
							<p class="service-locat-info">
								<span><img class="location-icon" src="icons/google_maps_icon.png" /></span> &nbsp; Location
							</p>
							<p class="SD-field  service-dets">
								${service["Details"]}
							</p> 
							<p class="service-HT">
								Working Hours
							</p>
							<p class="service-HF">
								Weekdays:  <span class="SD-field SHF-field SHF-B-1">${service["WeekdaysFrom"]}</span> - <span class="SD-field SHF-field">${service["WeekdaysTo"]}</span>
							</p>
							<p class="service-HF">
								Saturdays:  <span class="SD-field SHF-field SHF-B-2">${service["SaturdaysFrom"]}</span> - <span class="SD-field SHF-field">${service["SaturdaysTo"]}</span>
							</p>
							<p class="service-HF">
								Sundays:  <span class="SD-field SHF-field SHF-B-3">${service["SundaysFrom"]}</span> - <span class="SD-field SHF-field">${service["SundaysTo"]}</span>
							</p>
							<p class="service-HF">
								Holidays:  <span class="SD-field SHF-field SHF-B-4">${service["HolidaysFrom"]}</span> - <span class="SD-field SHF-field">${service["HolidaysTo"]}</span>
							</p>
							<p class="service-contact-btn whatsapp-btn">
								<img class="whatsapp-icon" src="icons/whatsapp.png" /> &nbsp; Whatsapp
							<p>
							<p class="service-contact-btn call-btn">
								<img class="call-icon" src="icons/call_icon.png" /> &nbsp; Call
							</p>
						</span>
					`);
					leftNumberOfServices--
				}
			} else {
				for (let j = leftNumberOfServices; j > 0; j--) {
					let service = servicesArray[serviceIndex];
					serviceIndex++;
					populate(`SRD-${k}`, 'add', `
						<span id="#" class="link service">
							<img class="serviceImg"  src="${service["Picture"]}"/>
							<h6 id="#" class="serviceName SD-field">${service["Name"]}</h6> 
							<p class="service-locat-info">
								<span><img class="location-icon" src="icons/google_maps_icon.png" /></span> &nbsp; Location
							</p>
							<p class="SD-field  service-dets">
								${service["Details"]}
							</p> 
							<p class="service-HT">
								Working Hours
							</p>
							<p class="service-HF">
								Weekdays:  <span class="SD-field SHF-field SHF-B-1">${service["WeekdaysFrom"]}</span> - <span class="SD-field SHF-field">${service["WeekdaysTo"]}</span>
							</p>
							<p class="service-HF">
								Saturdays:  <span class="SD-field SHF-field SHF-B-2">${service["SaturdaysFrom"]}</span> - <span class="SD-field SHF-field">${service["SaturdaysTo"]}</span>
							</p>
							<p class="service-HF">
								Sundays:  <span class="SD-field SHF-field SHF-B-3">${service["SundaysFrom"]}</span> - <span class="SD-field SHF-field">${service["SundaysTo"]}</span>
							</p>
							<p class="service-HF">
								Holidays:  <span class="SD-field SHF-field SHF-B-4">${service["HolidaysFrom"]}</span> - <span class="SD-field SHF-field">${service["HolidaysTo"]}</span>
							</p>
							<p class="service-contact-btn whatsapp-btn">
								<img class="whatsapp-icon" src="icons/whatsapp.png" /> &nbsp; Whatsapp
							<p>
							<p class="service-contact-btn call-btn">
								<img class="call-icon" src="icons/call_icon.png" /> &nbsp; Call
							</p>
						</span>
					`);
					leftNumberOfServices--
				}
			}
			k++;
		}
	}
	setTimeout(() => {
		closeLoader();
	}, 1000);
}


function addSearchResults(numberOfItems) {
	for (var i = 1; i <= numberOfItems; i++) {
		populate('searchResultsDiv', 'add', `
<span class="item">
    <img class="itemImg" />
    <h6 class="minorDets">
        Price | Item Name
    </h6>
    <p class="item-subMinorDets">
        <span><img class="location-icon" src="icons/google_maps_icon.png" /></span> &nbsp; Location
    </p>
    <p class="item-mainDets">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p> 
    <p class="item-contact-btn whatsapp-btn">
		<img class="whatsapp-icon" src="icons/whatsapp.png" /> Whatsapp
	<p>
	<p class="item-contact-btn call-btn">
		<img class="call-icon" src="icons/call_icon.png" /> Call
	</p>  
</span>
`
);
	}
}

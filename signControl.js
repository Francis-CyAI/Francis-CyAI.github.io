
//url query format: q00+username+password+whatsappNumber+location+membership+
fetch(`http://127.0.0.1:8080/q01+${getIpAddress()}+`)
	.then(response => response.json())
	.then(object => {
		if (object['autoLoggin']) {
			window.open(object['url'], "_self");
		} else {
			alert('Couldn\'t log you in. Please sign up.');
		}
	})
	.catch(error => {
		//shhould be changed to report instead of log
		console.error(error);
	});
/* Constants and Variables */

const otherLocatHtml = `
&nbsp; <input name="other-locat" type="text" class="logInput log-other-locat-input" placeholder="Please enter here">
`;


/* Event Listeners */

document.getElementById('logBackBtn').addEventListener('click', () => {
	goHome();
})
document.getElementById('signinFormBtn').addEventListener('click', () => {
	showSignInForm();
})
document.getElementById('signupFormBtn').addEventListener('click', () => {
	showSignUpForm();
})


document.getElementById('signinFormBtn').addEventListener('click', () => {
	showSignInForm();
})
document.getElementById('signupFormBtn').addEventListener('click', () => {
	showSignUpForm();
})
document.getElementById('signinBtn').addEventListener('click', () => {
	
	var userName = document.getElementById('signInUsername').value;
	var passW = document.getElementById('signInPassword').value;

	var send = () => {
		//url query format: q00+username+password+whatsappNumber+location+membership+
		fetch(`http://127.0.0.1:8080/q02+${userName}+${passW}+`)
		.then(response => response.json())
		.then(object => {
			if (object['Loggin']) {
				window.open(object['url'], "_self");
			} else {
				alert('Couldn\'t log you in. Please check your details, and try again. If the problem persists, try signing up instead.');
			}
		})
		.catch(error => {
			//shhould be remoevd
			console.error(error);
		});
	}

	if (passW == '' || userName == '') {
		// do nothing
	} else {
		send();
	}
	
	
	event.preventDefault();
	
});

document.getElementById('signupBtn').addEventListener('click', () => {

	var userName = document.getElementById('userName').value;
	var whatsappNumber = document.getElementById('waNum').value;
	var passW = document.getElementById('password').value;
	var membership = document.getElementById('logMembershipChoice').value;
	var locat = document.getElementById('logLocatChoice').value;

	var send = () => {
		//url query format: q00+username+password+whatsappNumber+location+membership+
		fetch(`http://127.0.0.1:8080/q00+${userName}+${passW}+${whatsappNumber}+${locat}+${membership}+${getIpAddress()}+`)
		.then(response => response.json())
		.then(object => {
			if (object['autoLoggin']) {
				window.open(object['url'], "_self");
			} else {
				alert('Couldn\'t log you in. Please try loggin in manually');
			}
		})
		.catch(error => {
			//shhould be remoevd
			console.error(error);
		});
	}

	if (passW == '' || membership == '') {
		// do nothing
	} else {
		send();
	}
	
	
	event.preventDefault();
})



document.getElementById('logMembershipChoice').addEventListener('change', () => {

	let chosenMembership = document.getElementById('logMembershipChoice').value;

	switch (chosenMembership) {
		case 'student':
			//remove cover
			changeZ('LLSCover', '-1');
			changeO('logLocatLabel', '1');
		break;
		default:
			changeZ('LLSCover', '6');
			changeO('logLocatLabel', '0');
	} 
	
})

document.getElementById('logLocatChoice').addEventListener('change', () => {

	let chosenLocation = document.getElementById('logLocatChoice').value;

	switch (chosenLocation) {
		case 'other':
			populate('otherLocatChoice', 'change', otherLocatHtml);
		break;
		default:
			populate('otherLocatChoice', 'change', ``);
	} 
	
})



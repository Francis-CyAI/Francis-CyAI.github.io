
if (getScreenWidth() <= 560) {
    //For small screens
    mmForHelpTop = 170;
    mmForAboutTop = 220;

} else if (getScreenWidth() > 560 && getScreenWidth() <= 820) {
    //For medium-sized screens

    mmForHelpTop = 230;
    mmForAboutTop = 260;

} else {
    //For large screens
    mmForHelpTop = 250;
    mmForAboutTop = 280;

}


//url query format: q00+username+password+whatsappNumber+location+membership+
fetch(`http://127.0.0.1:8080/q01+${getIpAddress()}+`)
	.then(response => response.json())
	.then(object => {
		if (object['autoLoggin'] || object['Loggin']) {
			populate('userName', 'change', `${object['userName']}`);

		} else {
			window.open('sign.html', '_self');
		}
	})
	.catch(error => {
		window.open('sign.html', '_self');
	});
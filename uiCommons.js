const highlightColor = 'green';

document.getElementById('i&s-switchHlLink').addEventListener('click', () => {
    resetNavHelpTextColor();
    changeC('i&s-switchHlLink', highlightColor);
    changeC('i&s-switch', highlightColor);
});
document.getElementById('vfsHlLink').addEventListener('click', () => {
    resetNavHelpTextColor();
    changeC('vfsHlLink', highlightColor);
    changeC('vfs', highlightColor);
});
document.getElementById('upload-i&sHlLink').addEventListener('click', () => {
    resetNavHelpTextColor();
    changeC('upload-i&sHlLink', highlightColor);
    changeC('upload-i&s', highlightColor);
});
document.getElementById('log-statHlLink').addEventListener('click', () => {
    resetNavHelpTextColor();
    changeC('log-statHlLink', highlightColor);
    changeC('log-stat', highlightColor);
});
document.getElementById('sign-i&uHlLink').addEventListener('click', () => {
    resetNavHelpTextColor();
    changeC('sign-i&uHlLink', highlightColor);
    changeC('sign-i&u', highlightColor);
});
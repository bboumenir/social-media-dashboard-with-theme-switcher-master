

const toogle = document.querySelector('#barre');
let darkMode = false ;

toogle.addEventListener('click', function (e) {

	if (!darkMode) {
		document.body.classList.add('dark')
		darkMode = true
	} else {
		document.body.classList.remove('dark')
		darkMode = false   
	}
});
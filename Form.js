const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
let formularioCorrecto = false;
let nombreChecked = 0;
let emailChecked = 0;
let passwordChecked = 0;
let password2Checked = 0;

form.addEventListener('submit', e => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	// trim para remover espacios en blanco
	const nombreValue = nombre.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	//comprobacion de formulario
	if (nombreValue === '') {
		setErrorFor(nombre, 'No puede dejar el nombre en blanco');
	} else {
		setSuccessFor(nombre);
		nombreChecked = 1;
	}

	if (emailValue === '') {
		setErrorFor(email, 'No puede dejar el email en blanco');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'No ingresó un email válido');
	} else {
		setSuccessFor(email);
		emailChecked = 1;
	}

	if (passwordValue === '') {
		setErrorFor(password, 'La contraseña no debe quedar en blanco.');
	} else {
		setSuccessFor(password);
		passwordChecked = 1;
	}

	if (password2Value === '') {
		setErrorFor(password2, 'La contraseña no debe quedar en blanco');
	} else if (passwordValue !== password2Value) {
		setErrorFor(password2, 'Las contraseñas no coinciden');
	} else {
		setSuccessFor(password2);
		password2Checked = 1;
	}
	if (nombreChecked + emailChecked + passwordChecked + password2Checked === 4) {
		formularioCorrecto = true;
	}
	if (formularioCorrecto === true) {
		console.log("Formulario correcto");
		console.log("Nombre: ", nombre.value);
		console.log("Email: ", email.value);
		console.log("Contraseña: ", password.value);
		nombreChecked = 0;
		emailChecked = 0;
		passwordChecked = 0;
		password2Checked = 0;
		formularioCorrecto = false;
	} else {
		console.log("Formulario incorrecto");
	}

}
//funciones para cambiar y mostrar el texto de error de los small del HTML
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
//funcion para comprobar si el formato del email ingresado es correcto
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
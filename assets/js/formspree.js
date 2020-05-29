let form = document.getElementById('contact-form');
let sending = false;
let statusMessage = document.getElementById('contact-form-status');

function resetForm() {
	statusMessage.textContent = ' ';
	sending = false;
}

function resetFormAndRedirect() {
	resetForm();
	const url = window.location.href;
	window.location.href = url.replace('#contact', '#');
}

function handleResponse(status) {
	if (200 <= status && status < 300) {
		statusMessage.textContent = 'Thank you! Message sent.';
		setTimeout(resetFormAndRedirect, 2000);
	} else if (400 <= status && status < 500) {
		statusMessage.textContent = "Uh oh! There's been an error. Please try again.";
		setTimeout(resetForm, 2000);
	} else {
		statusMessage.textContent = "There's a problem with the servers. Try again later.";
		setTimeout(resetForm, 2000);
	}
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	if (!sending) {
		sending = true;
		const data = new FormData(form);
		ajax(form.method, form.action, data, handleResponse);
	}
});

function ajax(method, url, data, handleResponse) {
	const xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.setRequestHeader('Accept', 'application/json');
	xhr.onreadystatechange = () => {
		if (xhr.readyState !== XMLHttpRequest.DONE) return;
		handleResponse(xhr.status, xhr.response, xhr.responseType);
	};
	xhr.send(data);
}

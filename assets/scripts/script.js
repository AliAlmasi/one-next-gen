"use strict";

const msgbox = document.querySelector(`.msgbox`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-msgbox`);
const btnOpenModal = document.querySelectorAll(`.show-msgbox`);

const closeModal = function () {
	msgbox.classList.add(`hidden`);
	overlay.classList.add(`hidden`);
};

const openModal = function () {
	msgbox.classList.remove(`hidden`);
	overlay.classList.remove(`hidden`);
};

for (let i = 0; i < btnOpenModal.length; i++) {
	btnOpenModal[i].addEventListener(`click`, openModal);
}

btnCloseModal.addEventListener(`click`, closeModal);

overlay.addEventListener(`click`, closeModal);

document.addEventListener(`keydown`, function (e) {
	if (e.key === "Escape" && !msgbox.classList.contains(`hidden`)) {
		closeModal();
	}
});

const userTime = new Date().getHours();
let serviceStatus;
const generateRandomString = (length) =>
	Math.random().toString(20).substr(2, length);

const changeUUID = document.querySelector(`#changeUUID`);
const codeEl = document.querySelector(`.side__code`);
const statusEl = document.getElementById("status");

if (userTime > 23 || userTime < 3) {
	serviceStatus = false;
} else {
	serviceStatus = true;
}


if (userTime > 23 || userTime < 3) serviceStatus = false;
else serviceStatus = true;

if (serviceStatus) {
	statusEl.textContent = "Online";
	if (!localStorage.getItem("lastKey")) {
		localStorage.setItem("lastKey", generateRandomString(5));
		codeEl.textContent = localStorage.getItem("lastKey");
	} else {
		codeEl.textContent = localStorage.getItem("lastKey");
	}
} else {
	statusEl.textContent = "Offline";
	codeEl.textContent = "Error";
}

changeUUID.addEventListener(`click`, () => {
	if (serviceStatus) {
		localStorage.removeItem("lastKey");
		codeEl.textContent = generateRandomString(5);
		localStorage.setItem("lastKey", codeEl.textContent);
		codeEl.classList.add("apply-shake");
	} else {
		statusEl.classList.add("apply-shake");
	}
});

codeEl.addEventListener("animationend", (e) => {
	codeEl.classList.remove("apply-shake");
});

statusEl.addEventListener("animationend", (e) => {
	statusEl.classList.remove("apply-shake");
});

document.getElementById("share-qr").addEventListener(`click`, () => {
	document.querySelector(`.side__qrcode-frame`).classList.add("apply-shake");
});

document
	.querySelector(`.side__qrcode-frame`)
	.addEventListener("animationend", () => {
		document
			.querySelector(".side__qrcode-frame")
			.classList.remove("apply-shake");
	});

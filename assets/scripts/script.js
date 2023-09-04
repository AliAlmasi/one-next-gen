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

const generateRandomString = (length) =>
	Math.random().toString(20).substr(2, length);

const changeUUID = document.querySelector(`.changeUUid`);
const codeEl = document.querySelector(`.side__code`);
codeEl.textContent = generateRandomString(5);

changeUUID.addEventListener(`click`, () => {
	let x = generateRandomString(5);
	codeEl.textContent = x;
	codeEl.classList.add("apply-shake");
});

codeEl.addEventListener("animationend", (e) => {
	codeEl.classList.remove("apply-shake");
});

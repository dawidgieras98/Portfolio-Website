// POP UP
const SHOWCASE = document.querySelectorAll(".thumbnail img");
const POPUP = document.querySelector(".project_popup");
const POPUP_CLOSE = document.querySelector(".project_popup_close");
const POPUP_IMG = document.querySelector(".project_popup_img");
const ARROW_LEFT = document.querySelector(".project_popup_arrow--left");
const ARROW_RIGHT = document.querySelector(".project_popup_arrow--right");
const BUTTONS_BOX = document.querySelector(".buttons_box");
const INFO_BOX = document.querySelector(".info_box");

const nextSlide = () => {
	if (currentImgIndex === SHOWCASE.length - 1) {
		currentImgIndex = 0;
	} else {
		currentImgIndex++;
	}
	POPUP_IMG.src = SHOWCASE[currentImgIndex].src;
	targetsId = currentImgIndex;
	checkId(targetsId);
};

const previousSlide = () => {
	if (currentImgIndex === 0) {
		currentImgIndex = SHOWCASE.length - 1;
	} else {
		currentImgIndex--;
	}
	POPUP_IMG.src = SHOWCASE[currentImgIndex].src;
	targetsId = currentImgIndex;
	checkId(targetsId);
};

const closePopup = () => {
	POPUP.classList.add("fade-out");
	setTimeout(() => {
		POPUP.classList.add("hidden");
		POPUP.classList.remove("fade-out");
		SHOWCASE.forEach((element) => {
			element.setAttribute("tabindex", 1);
		});
	}, 300);
};

const checkId = (targetsId) => {
	console.log(targetsId);
	switch (+targetsId) {
		case 0:
			INFO_BOX.innerHTML =
				"<h2>Magic 8Ball</h2><p>An application that allows you to ask any question of the magic ball number 8.</p>";
			BUTTONS_BOX.innerHTML =
				'<div class="project_buttons d-flex justify-content-between"><a target="_blank" href="https://github.com/dawidgieras98/8-Ball"><button class="btn_git">Source code</button></a><a target="_blank" href="https://dawidgieras98.github.io/8-Ball/"><button class="btn_code">Live code</button></a></div>';
			break;
		case 1:
			INFO_BOX.innerHTML =
				"<h2>Billsplitter</h2><p>An application that allows you to divide any bill into any number of people and charge a tip for the service.</p>";
			BUTTONS_BOX.innerHTML =
				'<div class="project_buttons d-flex justify-content-between"><a target="_blank" href="https://github.com/dawidgieras98/Billsplitter-"><button class="btn_git">Source code</button></a><a target="_blank" href="https://dawidgieras98.github.io/Billsplitter-/"><button class="btn_code">Live code</button></a></div>';
			break;
		case 2:
			INFO_BOX.innerHTML =
				"<h2>Wallet</h2><p>The Wallet app allows you to manage your expenses based on the distinction between expenses and income.</p>";
			BUTTONS_BOX.innerHTML =
				'<div class="project_buttons d-flex justify-content-between"><a target="_blank" href="https://github.com/dawidgieras98/Wallet-App"><button class="btn_git">Source code</button></a><a target="_blank" href="https://dawidgieras98.github.io/Wallet-App/"><button class="btn_code">Live code</button></a></div>';
			break;
		case 3:
			INFO_BOX.innerHTML =
				"<h2>To do list</h2><p>The To Do app allows you to manage your daily chores. It was created on the basis of HTML CSS and javascript.</p>";
			BUTTONS_BOX.innerHTML =
				'<div class="project_buttons d-flex justify-content-between"><a target="_blank" href="https://github.com/dawidgieras98/Todo-List"><button class="btn_git">Source code</button></a><a target="_blank" href="https://dawidgieras98.github.io/Todo-List/"><button class="btn_code">Live code</button></a></div>';
			break;
		case 4:
			INFO_BOX.innerHTML =
				"<h2>Time counter</h2><p>Time counter an application that allows you to set a countdown to the date and the name of the event, and allows you to set an image that reflects the event.</p>";
			BUTTONS_BOX.innerHTML =
				'<div class="project_buttons d-flex justify-content-between"><a target="_blank" href="https://github.com/dawidgieras98/Time-Counter"><button class="btn_git">Source code</button></a><a target="_blank" href="https://dawidgieras98.github.io/Time-Counter/"><button class="btn_code">Live code</button></a></div>';
			break;
		case 5:
			INFO_BOX.innerHTML =
				"<h2>Stopwatch</h2><p>The application, a stopwatch, is a copy of the most ordinary stopwatch, which is located, e.g. on your smartphone</p>";
			BUTTONS_BOX.innerHTML =
				'<div class="project_buttons d-flex justify-content-between"><a target="_blank" href="https://github.com/dawidgieras98/Stopwatch"><button class="btn_git">Source code</button></a><a target="_blank" href="https://dawidgieras98.github.io/Stopwatch/"><button class="btn_code">Live code</button></a></div>';
			break;
		case 6:
			INFO_BOX.innerHTML =
				"<h2>Sign Up form</h2><p>Registration form that checks the accuracy of completing the form using a validator.</p>";
			BUTTONS_BOX.innerHTML =
				'<div class="project_buttons d-flex justify-content-between"><a target="_blank" href="https://github.com/dawidgieras98/Register-form"><button class="btn_git">Source code</button></a><a target="_blank" href="https://dawidgieras98.github.io/Register-form/"><button class="btn_code">Live code</button></a></div>';
			break;
		case 7:
			INFO_BOX.innerHTML =
				"<h2>Sticky notes</h2><p>Sticky Notes application, the operation of which is based on the Sticky Notes application, which is found on the Windows operating system. The application allows us to distinguish notes into three categories 'work', 'shopping' and 'study'.</p>";
			BUTTONS_BOX.innerHTML =
				'<div class="project_buttons d-flex justify-content-between"><a target="_blank" href="https://github.com/dawidgieras98/MyNotes"><button class="btn_git">Source code</button></a><a target="_blank" href="https://dawidgieras98.github.io/MyNotes/"><button class="btn_code">Live code</button></a></div>';
			break;
		case 8:
			INFO_BOX.innerHTML =
				"<h2>Exchange app</h2><p>The Exchange application is a virtual exchange office that allows us to convert currency by using the API from exchangeratesapi.io.<br><br><strong>Note:</strong> The code that is preloaded on Github does not have an API key, therefore the application does not download any information.</p>";
			BUTTONS_BOX.innerHTML =
				'<div class="project_buttons d-flex justify-content-between"><a target="_blank" href="https://github.com/dawidgieras98/Exchange-App"><button class="btn_git">Source code</button></a><a target="_blank" href="https://dawidgieras98.github.io/Exchange-App/"><button class="btn_code">Live code</button></a></div>';
			break;
	}
};

SHOWCASE.forEach((thumbnail, index) => {
	const showPopup = (e) => {
		targetsId = e.target.id;
		POPUP.classList.remove("hidden");
		POPUP_IMG.src = e.target.src;
		currentImgIndex = index;
		checkId(targetsId);
		SHOWCASE.forEach((element) => {
			element.setAttribute("tabindex", -1);
		});
	};

	thumbnail.addEventListener("click", showPopup);

	thumbnail.addEventListener("keydown", (e) => {
		if (e.code === "Enter" || e.keyCode === 13) {
			showPopup(e);
		}
	});
});

POPUP_CLOSE.addEventListener("click", closePopup);

ARROW_RIGHT.addEventListener("click", nextSlide);

ARROW_LEFT.addEventListener("click", previousSlide);

document.addEventListener("keydown", (e) => {
	if (!POPUP.classList.contains("hidden")) {
		if (e.code === "ArrowRight" || e.keyCode === 39) {
			nextSlide();
		}

		if (e.code === "ArrowLeft" || e.keyCode === 37) {
			previousSlide();
		}

		if (e.code === "Escape" || e.keyCode === 27) {
			closePopup();
		}
	}
});

POPUP.addEventListener("click", (e) => {
	if (e.target === POPUP) {
		closePopup();
	}
});

// Create variables for later use

let inject = document.createElement('iframe');
let answerIds = [];

// For this example, window.location.href = https://edpuzzle.com/assignments/65d68dfa819e4cf633b55342/watch

const assignmentId = window.location.href.split("/")[4];

// Inject scripts into the website so we can use the YT and Vimeo streaming service API's

function allowVideoAPIs() {
	let ytScript = document.createElement('script');
	document.body.append(ytScript);
	ytScript.src = "https://www.youtube.com/iframe_api";

	let vimeoScript = document.createElement('script');
	document.body.append(vimeoScript);
	vimeoScript.src = "https://player.vimeo.com/api/player.js";
}

document.body.append(inject);
inject.hidden = true;
inject.id = 'inject';

const console = inject.contentWindow.console;

// Simple fetch request to get the data for the current attempt of the assignment

async function getAttempt() {
	const apiUrl = `https://edpuzzle.com/api/v3/assignments/${assignmentId}/attempt`;

	return await fetch(apiUrl).then(response => {
		if (response.ok) {
			return response.json().then(data => {
				return data;
			});
		}
	});
}

// Get the client side data for the assignment

async function getClientMedia() {
	const apiUrl = `https://edpuzzle.com/api/v3/assignments/${assignmentId}`;

	return fetch(apiUrl).then(response => {
		if (response.ok) {
			return response.json().then(data => {
				return data;
			});
		}
	});
}

// Get the server side data for the assignment

async function getMediaSource(mediaId) {
	const apiUrl = `https://edpuzzle.com/api/v3/media/${mediaId}`;

	return await fetch(apiUrl, {credentials: "omit"}).then(response => {
		if (response.ok) {
			return response.json().then(data => {
				return data.questions;
			});
		}
	});
}

// Chooses the correct answers found in getMediaSource() when the questions pop up

async function selectCorrectAnswers(correctIds) {
	const answersBox = document.querySelectorAll('ul[aria-label="List of answer choices"] > li');
	const promises = [];

	for (const answerBox of answersBox) {
		const answerId = answerBox.querySelector("input");

		if (correctIds.includes(answerId.getAttribute("id"))) {
			const promise = new Promise((resolve) => {
				setTimeout(function() {
					answerId.click();

					resolve();

					console.log("answering question");
				}, 1000); 
			});

			promises.push(promise);
		}
	}

	await Promise.all(promises);

	function pressNextButton() {
		if (window.nullbyteClearNextButtonInterval) {
			clearInterval(intervalId);

			window.nullbyteClearNextButtonInterval = false;
		}

		const continueButtons = document.querySelectorAll('button > span > span');

		if (!document.querySelector("textarea.XH4PgdrXSN")) for (const conButton of continueButtons) {
			if (conButton.innerText === "Continue") {
				conButton.closest('button').click();

				clearInterval(intervalId);

				return;
			} else if (conButton.innerText === "Next question") {
				setTimeout(function() {
					conButton.closest('button').click();
				}, 1000); 

				return;
			} else if (conButton.innerText === "Submit") {
				setTimeout(function() {
					conButton.closest('button').click();
				}, 1000); 

				return;
			}

			console.log("trying to click button");
		}
	}

	const intervalId = setInterval(pressNextButton, 10);
}

// Checks if the rewatch button is visible and calls selectCorrectAnswers() if true
	
function checkForRewatchButton() {
	let found = false;
	const rewatchButton = Array.from(document.querySelectorAll("button")).find(button => button.innerText === "Rewatch");

	if (rewatchButton && !window.nullbyteQuestionAlreadyFound) {
		window.nullbyteQuestionAlreadyFound = true;
		selectCorrectAnswers(answerIds);
		found = true;
	} else if (!rewatchButton && window.nullbyteQuestionAlreadyFound) {
		window.nullbyteQuestionAlreadyFound = false;
	}

	return found;
}

// Interval to call checkForRewatchButton()

function pollForRewatchButton() {
	setInterval(checkForRewatchButton, 100);
}

// Forces a change in speed to the video

function forceVideoSpeed(source) {
	let speed = 16;
	
	if (source == "edpuzzle") {
		const video = document.querySelector("video");

		Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, "playbackRate").set.call(video, speed);
		
		try {
			Object.defineProperty(video, "playbackRate", {writable: false});
		}
		catch (e) {
			console.log(e);
		}
	}
	
	else if (source == "youtube") {
		const iframe = Array.from(document.querySelectorAll("iframe")).filter(iframe => iframe.id !== 'inject');

		const player = new YT.get(iframe[0]?.id ? iframe[0].id : iframe?.[1].id);
		let speed = 2;

		player.setPlaybackRate(speed);
	}
	
	else if (source == "vimeo") {
		const iframe = Array.from(document.querySelectorAll("iframe")).filter(iframe => iframe.id !== 'inject');
		const player = new Vimeo.Player(iframe[0]); 
		let speed = 2;

		player.off("playbackratechange");
		player.setPlaybackRate(speed);
	}
}

// Initialize the process

async function nullbyte() {
	window.nullbyteQuestionAlreadyFound = false
	window.nullbyteClearNextButtonInterval = true
	
	// Call getAttempt(), call getMediaSource(), search through correct answers, call sendOutAnswers(), call finishVideo()

	await getAttempt().then(attemptData => getMediaSource(attemptData.mediaId).then(questions => {
        console.log(attemptData);

		questions.filter(question => question.type == "multiple-choice").forEach(question => {
			question.choices.filter(choice => choice.isCorrect).forEach(choice => answerIds.push(choice._id));
		});

		// Call pollForRewatchButton()

		pollForRewatchButton();
	}));

	// Call allowVideoAPIs() and forceVideoSpeed() with the data from getClientMedia()

	allowVideoAPIs();
	getClientMedia().then(data => forceVideoSpeed(data.medias[0].source));
}  

nullbyte();

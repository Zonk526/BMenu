// Create variables for later use

let inject = document.createElement('iframe');
let answerIds = [];

// For this example, window.location.href = https://edpuzzle.com/assignments/65d68dfa819e4cf633b55342/watch

const assignmentId = window.location.href.split("/")[4];

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

async function getMediaSource(mediaId, assignmentId) {
	const apiUrl = `https://edpuzzle.com/api/v3/media/${mediaId}`;

	return await fetch(apiUrl, {
		credentials: "omit",
		headers: {
			'X-Edpuzzle-Preferred-Language': 'en',
			'X-Edpuzzle-Referrer': `https://edpuzzle.com/assignments/${assignmentId}/watch`,
			'X-Edpuzzle-Web-Version': '7.35.126.9991233182693272'
		}
		}).then(response => {
		if (response.ok) {
			return response.json().then(data => {
				return data.questions;
			});
		}
	});
}

// Function to get the temporary CSRF token for upcoming post requests, sendOutAnswers() and finishVideo()

async function getToken() {
	const apiUrl = `https://edpuzzle.com/api/v3/csrf`;

	return fetch(apiUrl).then(response => {
		if (response.ok) {
			return response.json().then(data => {
				return data.CSRFToken;
			});
		}
	});
}

// Posts the correct answers found in getMediaSource() to the api

async function sendOutAnswers(id, attemptAnswer, csrf) {
	const apiUrl = `https://edpuzzle.com/api/v3/attempts/${id}/answers`;

	return await fetch(apiUrl, {
		"headers": {
			"accept": "application/json, text/plain, */*",
			"accept-language": "en-US,en;q=0.9",
			"content-type": "application/json",
			"x-requested-with": "XMLHttpRequest",
			'x-csrf-token': csrf,
		},
		"referrer": `https://edpuzzle.com/assignments/${assignmentId}/watch`,
		"referrerPolicy": "strict-origin-when-cross-origin",
		body: JSON.stringify({
			answers: [attemptAnswer]
		}),
		"method": "POST",
		"mode": "cors",
		"credentials": "include",
	}).then(response => {
		if (response.ok) {
			return response.json().then(data => {
				return data;
			});
		}
	}).catch(error => {
		console.error('Error:', error);
	});
	
}

// Posts 11 different 'timeIntervalNumber' values to the api so it thinks you completed the video

async function finishVideo(aId, csrf, i) {
	const apiUrl = `https://edpuzzle.com/api/v4/media_attempts/${aId}/watch`;

	await fetch(apiUrl, {
		headers: {
			'x-edpuzzle-referrer': `https://edpuzzle.com/assignments/${assignmentId}/watch`,
			'x-csrf-token': csrf,
			'x-edpuzzle-preferred-language': 'en',
			"accept": "application/json, text/plain, */*",
			"accept-language": "en-US,en;q=0.9",
			"content-type": "application/json"
		},
		body: JSON.stringify({'timeIntervalNumber': i}),
		method: 'POST'
	}).catch(error => console.log('Error', error));
}

// Initialize the process

async function nullbyte() {
	window.nullbyteQuestionAlreadyFound = false
	window.nullbyteClearNextButtonInterval = true
	
	// Call getAttempt(), call getMediaSource(), search through correct answers, call sendOutAnswers(), call finishVideo()

	await getAttempt().then(attemptData => getMediaSource(attemptData.mediaId, attemptData.teacherAssignmentId).then(questions => {
        console.log(attemptData);

		questions.filter(question => question.type == "multiple-choice").forEach(question => {
			question.choices.filter(choice => choice.isCorrect).forEach(choice => answerIds.push(choice._id));

			// Sets up variables to send to the api with "sendOutAnswers()"

			const choice = Array.from(question.choices.filter(choice => choice.isCorrect).map(choice => choice._id));
			const type = question.type;
			const questionId = question._id;
		
			const answerObject = {
				choices: choice,
				questionId: questionId,
				type: type
			};

			// Sends answerObject created with the data from getMediaSource()

			getToken().then(csrf => sendOutAnswers(attemptData._id, answerObject, csrf).then(consoleData => console.log(consoleData)));
		});

		// Start the finishVideo() process, runs 11 times from 0-10

		for (let i = 0; i <= 10; i++) {
			setTimeout(() => {
				getToken().then(csrf => {
					finishVideo(attemptData._id, csrf, i);
					getAttempt().then(data => console.log(data));
				});

				if (i == 10) setTimeout(() => {
					window.location.reload();
				}, 3000);
			}, i * 100);
		}
	}));
}  

nullbyte();

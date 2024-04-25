let questionType, nextBtn, answerWrapperChildren, typing = false

// get rid of "Try not to rush!" for vocabtrainer
window.alert = null

function caesarDecode(str) {
    var decoded = '';
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c >= 65 && c <= 90) {
            decoded += String.fromCharCode(((c - 65 + 13) % 26) + 65);
        } else if (c >= 97 && c <= 122) {
            decoded += String.fromCharCode(((c - 97 + 13) % 26) + 97);
        } else {
            decoded += str.charAt(i);
        }
    }
    return decoded;
}

function startingTimer(answer) {
    setTimeout(() => {
        const answerWrapperChildren = Array.from((document.querySelector(".questionPane > div:nth-last-child(1)") 
        || document.querySelector(".box-question-mode-points") 
        || document.createElement("div")).querySelectorAll(".choices > a")
        );
      
        console.log(answerWrapperChildren);
        answerWrapperChildren.forEach(child => {
            if (child.nonce == answer) child.click();
        });
    }, 700);
}

function answerQuestion() {
    fetch("https://www.vocabulary.com/challenge/nextquestion.json", {
        "headers": {
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "x-requested-with": "XMLHttpRequest"
        },
        "referrer": "http://www.vocabulary.com/challenge/start/1/1/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "secret=&t=1620591322",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let answerData = JSON.parse(caesarDecode(atob(data["adata"])));
        console.log(answerData);

        if (Array.isArray(answerData.acceptedAnswers)) {
            setTimeout(() => {
                const answer = answerData.acceptedAnswers[0];
                answerWrapperChildren = document.querySelector(".questionPane > div:nth-last-child(1)") || document.querySelector(".box-question-mode-points");
                Array(answerWrapperChildren.querySelector(".wordspelling"))[0].value = answer;
                answerWrapperChildren.querySelector(".spellit").click();
            }, 2200);
        }

        if (Array.isArray(answerData.nonces) && answerData.nonces.length === 4) {
            setTimeout(() => {
                const answer = answerData.nonces[0];
                startingTimer(answer);
            }, 2200);
        }
    })
    .catch(error => console.error(error));
}

function nullbyte() {
    let clickRandom;

    setInterval(() => {
        try {
            if (document.querySelector('.enabled.selected > span').innerHTML == "1") typing = false;
            else if (document.querySelector('.play-in-progress').innerHTML == "1") typing = false;
        } catch {}

        nextBtn = document.querySelector(".next.active") || document.querySelector(".btn-next");
        answerWrapperChildren = document.querySelector(".questionPane > div:nth-last-child(1)") || document.querySelector(".box-question-mode-points");
    
        if (nextBtn) {
            typing = false;
            clearInterval(clickRandom);

            answerQuestion();
            setTimeout(() => {
                nextBtn.click();
            }, 1700);
        } 
        else if (!nextBtn && typing == false) {

            if (answerWrapperChildren.querySelector(".spelltheword")) {
                Array(answerWrapperChildren.querySelector(".wordspelling"))[0].value = "abc";
                let spellItBtn = answerWrapperChildren.querySelector('.spellit');
                spellItBtn.click();
                spellItBtn.click();
                spellItBtn.click();
                answerWrapperChildren.querySelector(".surrender").click();
            } 
            else {
                const randomAnswer = (document.querySelector(".questionPane > div:nth-last-child(1)") && Array.from(document.querySelectorAll(".questionPane > div:nth-last-child(1).choices > a"))) 
                || (document.querySelector(".box-question-mode-points") && Array.from(document.querySelectorAll(".box-question-mode-points.choices > a")));
                
                randomAnswer.forEach(a => {
                    clickRandom = setInterval(() => {
                        a.click();
                    }, 700);
                });
            }
        }
    }, 2000);
}

nullbyte()

setInterval(() => {
    let btnNext = document.querySelector(".btn-next");

    if (document.querySelector(".next.active")) {
        document.querySelector(".next.active > span").remove();
    } else if (btnNext) {
      btnNext.style.width = "0px";
      btnNext.style.height = "0px";
      btnNext.innerHTML = "";
    }
}, 10);

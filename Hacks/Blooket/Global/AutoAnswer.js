const autoAnswer = () => {
    setInterval(() => {
        const { stateNode : {questions, state} } = Object.values((function react(potentialDiv = document.querySelector('body>div')) 
            {return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
        })())[1].children[0]._owner;

        if (state.stage == "question") if (state.question.qType != "typing") {
            [...document.querySelectorAll(`[class*=answerContainer]`)][questions[state.question.number - 1].answers.map((x, i) => questions[state.question.number - 1].correctAnswers.includes(x) ? i : null).filter(x => x !== null)[0]]?.click?.();
        } else {
            Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(questions[state.question.number - 1].answers[0]);
        }
    }, 500);
}

autoAnswer();

const autoAnswer = () => {
    setInterval(() => {
        const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')) 
            {return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
        })())[1].children[0]._owner;

        let answerContainers = document.querySelectorAll(`[class*='answerContainer']`);

        if (stateNode.state.stage && stateNode.state.stage == "question") if (stateNode.state.question.qType != "typing") {
            stateNode.onAnswer ? stateNode.onAnswer('shitty website lol') : 
            [...answerContainers][Array.from(answerContainers).map((x, i) => x.innerHTML.includes(stateNode.state.question.correctAnswers[0]) ? i :
            null)[0]]?.click()

        } else {
            Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(stateNode.state.question.answers[0]);

        } else if (window.location.href.includes('battleroyale')) {
            if (document.querySelector("[class*='typingAnswerWrapper']")) {
                Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(stateNode.props.client.question.answers[0]);

            } else if (answerContainers) {
                [...answerContainers][Array.from(answerContainers).map((x, i) => x.innerHTML.includes(stateNode.props.client.question.correctAnswers[0]) ? i : null).filter(i => i !== null)[0]].click();
            }
        }
    }, 450);
}

autoAnswer();

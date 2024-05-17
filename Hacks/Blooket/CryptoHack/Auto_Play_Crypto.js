const autoPlayCrypto = () => {
    const divClickTimeout = () => {
        setTimeout(() => {
            document.querySelector(`[class*='feedbackContainer'] > div`).click();
        }, 1000);
    }

    setInterval(() => {
        const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')) 
            {return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
        })())[1].children[0]._owner;

        let answerContainers = document.querySelectorAll(`[class*='answerContainer']`);

        if (stateNode.state.stage && stateNode.state.stage == "question") if (stateNode.state.question.qType != "typing") {
            stateNode.onAnswer ? stateNode.onAnswer('shitty website lol') : 
            [...answerContainers][Array.from(answerContainers).map((x, i) => x.innerHTML.includes(stateNode.state.question.correctAnswers[0]) ? i :
            null).filter(x => x !== null)[0]]?.click()
            
            divClickTimeout();

        } else {
            stateNode.onAnswer ? stateNode.onAnswer('this one too lmao') : 
            Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(stateNode.state.question.answers[0]);
            
            divClickTimeout();

        } else if (window.location.href.includes('battleroyale')) {
            if (document.querySelector("[class*='typingAnswerWrapper']")) {
                Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(stateNode.props.client.question.answers[0]);
                
                divClickTimeout();

            } else if (answerContainers) {
                [...answerContainers][Array.from(answerContainers).map((x, i) => x.innerHTML.includes(stateNode.props.client.question.correctAnswers[0]) ? i : null).filter(i => i !== null)[0]].click();
                
                divClickTimeout();
            }
        }

        if (stateNode.state.stage == 'prize') {
            stateNode.choosePrize(1);

            divClickTimeout();
        }

        if (stateNode.state.stage == 'hack') stateNode.guessPassword(stateNode.state.correctPassword);

        stateNode.setState({
            bites: 0,
            ads: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            hazards: ['', '', '', '', ''],
            color: "",
            lol: false,
            joke: false,
            slow: false,
            dance: false,
            glitch: "",
            glitcherName: "",
            glitcherBlook: ""
        });

        clearTimeout(stateNode.adTimeout);
        clearInterval(stateNode.hazardInterval);
        clearTimeout(stateNode.nightTimeout);
        clearTimeout(stateNode.glitchTimeout);
        clearTimeout(stateNode.lolTimeout);
        clearTimeout(stateNode.jokeTimeout);
        clearTimeout(stateNode.slowTimeout);
        clearTimeout(stateNode.danceTimeout);
    }, 450);
}

autoPlayCrypto();

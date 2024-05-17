const autoChoosePassword = () => {
    setInterval(() => {
        const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')){
            return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
        })())[1].children[0]._owner;

        if (stateNode.state.stage == 'hack') stateNode.guessPassword(stateNode.state.correctPassword)
    }, 400);
}

autoChoosePassword();

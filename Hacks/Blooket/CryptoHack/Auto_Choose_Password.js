const autoChoosePassword = () => {
    setInterval(() => {
        const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')){
            return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
        })())[1].children[0]._owner;

        if (stateNode.state.stage == 'hack') {
            const passwordButtons = document.querySelectorAll(`[class*='_buttonContainer'] > [class*='_button_']`);

            stateNode.guessPassword(stateNode.state.correctPassword)
        }
    }, 400);
}

autoChoosePassword();

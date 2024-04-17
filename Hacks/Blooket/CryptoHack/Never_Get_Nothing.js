let alreadySetPrizeGH;

setInterval(() => {
    let { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')){
        return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'))
    })())[1].children[0]._owner;

    if (stateNode.state.stage == "hack" && alreadySetPrizeGH != true) {
        document.querySelector(`div[class^='styles__introHeader']`).textContent = stateNode.state.correctPassword;

        alreadySetPrizeGH = true;
    } else {
        alreadySetPrizeGH = false;
    }

    if (stateNode.state.stage == "prize" && stateNode.state.choices[0].type == "nothing") {

        stateNode.setState({
            choices: [
                {
                    type: 'triple',
                    blook: 'Brainy Bot',
                    text: 'Triple Crypto',
                    type: 'mult',
                    val: 3
                }
            ]
        });
    }
}, 25);

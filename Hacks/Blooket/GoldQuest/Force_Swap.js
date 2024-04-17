const forceSwap = () => {
    const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')) 
        {return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
    })())[1].children[0]._owner;

    stateNode.props.liveGameController.getDatabaseVal('c', players => {
        stateNode.setState({
            players: (players ? Object.entries(players).map(([name, { b, g }]) => ({name, blook: b, gold: g})) : []),
            ready: true,
            phaseTwo: true,
            stage: "prize",
            choiceObj: { type: "swap", text: 'SWAP!', blook: 'King' }
        });
    });
}

forceSwap();

const resetPlayerGold = () => {
    const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')) 
        {return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
    })())[1].children[0]._owner;

    let inject = document.createElement('iframe');
    document.body.append(inject);
    window.prompt = inject.contentWindow.prompt.bind(window);
    inject.remove();

    let target = prompt("Whose gold would you like to reset?");

    stateNode.props.liveGameController.getDatabaseVal('c', players => {
        let [player, { g }] = Object.entries(players).find(([name]) => name.toLowerCase() == target.toLowerCase());

        stateNode.setState({
            players: (players ? Object.entries(players).map(([name, { b, g }]) => ({name, blook: b, gold: g})) : []),
            choiceObj: { type: 'take', val: 0.25, text: 'Take 25%', blook: 'Wizard' }
        });
            
        stateNode.props.liveGameController.setVal({
            path: `c/${stateNode.props.client.name}`,
            val: {
                b: stateNode.props.client.blook,
                g: stateNode.state.gold,
                tat: `${player}:${g}`
            }
        })
    });

    console.log("done");
}

resetPlayerGold();

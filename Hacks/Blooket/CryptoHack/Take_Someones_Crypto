const takePlayersCrypto = () => {
    const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')){
        return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
    })())[1].children[0]._owner;

    let inject = document.createElement('iframe');
    document.body.append(inject);
    window.prompt = inject.contentWindow.prompt.bind(window);
    inject.remove();

    let target = prompt("Whose crypto would you like to take?");

    stateNode.props.liveGameController.getDatabaseVal('c', players => {
        let [player, { cr }] = Object.entries(players).find(([name, { cr } ]) => {
            if (name.toLowerCase() == target.toLowerCase()) if (cr) return [name, { cr }];
        });

        stateNode.setState({
            choiceObj: { type: 'hack', rate: 0.2, blook: 'Mega Bot', text: 'HACK' },
            crypto: stateNode.state.crypto + cr,
            crypto2: stateNode.state.crypto2 + cr
        });

        stateNode.props.liveGameController.setVal({
            path: `c/${stateNode.props.client.name}`,
            val: {
                b: stateNode.props.client.blook,
                p: stateNode.state.password,
                cr: stateNode.state.crypto,
                tat: `${player}:${cr}`
            }
        });
    });
}

takePlayersCrypto();

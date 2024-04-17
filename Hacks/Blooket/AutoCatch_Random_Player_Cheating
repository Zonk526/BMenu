const catchSomeoneCheating = () => {
    let { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')){
        return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
    })())[1].children[0]._owner;

    stateNode.props.liveGameController.getDatabaseVal('c', players => {
        let [player, { f }] = Object.entries(players).find(([name, { f, ic }]) => {
            if (ic === true) if (f) return [name, { f }];
        }) || [null, {}];

        if (f) stateNode.setState({
            fossils: stateNode.state.fossils + Math.round(f * 0.5)
        });

        if (f) stateNode.props.liveGameController.setVal({
            path: `c/${stateNode.props.client.name}`,
            val: {
                b: stateNode.props.client.blook,
                f: stateNode.state.fossils,
                ic: false,
                tat: `${player}:true`
            }
        });

    });

    stateNode.state.isCheating = false;
}

catchSomeoneCheating();

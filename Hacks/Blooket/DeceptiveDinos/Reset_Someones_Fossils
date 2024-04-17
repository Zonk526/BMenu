const resetFossils = () => {
    let { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')){
        return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
    })())[1].children[0]._owner;

    let inject = document.createElement('iframe');
    document.body.append(inject);
    window.prompt = inject.contentWindow.prompt.bind(window);
    inject.remove();

    let target = prompt("Whose fossils would you like to reset?");

    stateNode.props.liveGameController.getDatabaseVal('c', players => {
        let [ player, { f }] = Object.entries(players).find(([name, { f } ]) => {
            if (name.toLowerCase() == target.toLowerCase()) if (f) return [name, { f }];
        });

        stateNode.props.liveGameController.setVal({
            path: `c/${stateNode.props.client.name}`,
            val: {
                b: stateNode.props.client.blook,
                f: stateNode.state.fossils,
                ic: false,
                tat: `${player}:${f}`
            }
        });
    });
}

resetFossils();

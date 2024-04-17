const setWeight = () => {
    const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')) 
        {return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
    })())[1].children[0]._owner;

    let inject = document.createElement('iframe');
    document.body.append(inject);
    window.prompt = inject.contentWindow.prompt.bind(window);
    inject.remove();

    let amount = prompt("Whose fossils would you like to reset?");

    if (typeof parseInt(amount) == "number") {
        stateNode.state.weight = parseInt(amount);
        stateNode.state.weight2 = parseInt(amount);
    }

    stateNode.props.liveGameController.setVal({
        path: `c/${stateNode.props.client.name}`,
        val: {
            b: stateNode.props.client.blook,
            w: stateNode.state.weight
        }
    });
}

setWeight();

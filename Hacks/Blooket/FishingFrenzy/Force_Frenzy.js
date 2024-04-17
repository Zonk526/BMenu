const forceFrenzy = () => {
    const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')) 
        {return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
    })())[1].children[0]._owner;

    stateNode.props.liveGameController.setVal({
        path: `c/${stateNode.props.client.name}`,
        val: {
            b: stateNode.props.client.blook,
            w: stateNode.state.weight,
            f: "Frenzy",
            s: true
        }
    })
}

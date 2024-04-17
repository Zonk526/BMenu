const noMoreGettingCaught = () => {
    let { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')){
        return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
    })())[1].children[0]._owner;

    setInterval(() => {
        if (stateNode.state.isCheating) { 
            stateNode.props.liveGameController.setVal({
                path: `c/${stateNode.props.client.name}/ic`,
                val: false
            });
    
            stateNode.state.isCheating = false;
        }
    }, 25);
}

noMoreGettingCaught();

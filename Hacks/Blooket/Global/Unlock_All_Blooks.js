const unlockAllBlooks = () => {
    const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')){
        return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'))
    })())[1].children[0]._owner;
    
    stateNode.setState({unlocks: Object.values(document.querySelector(`[class*='blooksHolder']`))[1].children[0].map(x => x.key)});
}

unlockAllBlooks();

const forceCashFromAllBlooks = () => {
    const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')) 
        {return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
    })())[1].children[0]._owner;

    stateNode.state.blooks.forEach(blook => {
        stateNode.addCash(blook);
    });
}

forceCashFromAllBlooks();

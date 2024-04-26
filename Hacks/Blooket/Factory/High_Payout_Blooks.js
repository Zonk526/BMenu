const highPayoutBlooks = () => {
    const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')) 
        {return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
    })())[1].children[0]._owner;

    stateNode.setState({ blooks: stateNode.state.blooks.map(b => ({ ...b, cash: b.price.map(p =>  p = p*10)})) })
}

highPayoutBlooks();

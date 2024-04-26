const neverLoseCryptoFromHacking = () => {
    setInterval(() => {
        const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')) 
            {return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
        })())[1].children[0]._owner;

        stateNode.state.hackerAmount ? (stateNode.props.liveGameController.setVal({
            path: `c/${stateNode.props.client.name}`,
            val: {
                cr: stateNode.state.crypto += parseInt(stateNode.state.hackerAmount)
            }
        }), stateNode.state.hackerAmount = "", console.log('we got hacked but i fixed it')) : null; 
    }, 1000);
}

neverLoseCryptoFromHacking();

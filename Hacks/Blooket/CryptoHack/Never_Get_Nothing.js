const neverGetNothing = () => {
    setInterval(() => {
        const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')) 
            {return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
        })())[1].children[0]._owner;

        if (stateNode.state.choices[0].type) 
        stateNode.state.choices[0].type == 'nothing' ? (stateNode.setState({ choices: [{type: 'mult', val: 3, rate: 0.075, blook: 'Brainy Bot', text: 'Triple Crypto'}] }), 
        console.log('nerds tried to give me nothing LMAO')) : null;
    }, 1000);
}

neverGetNothing();

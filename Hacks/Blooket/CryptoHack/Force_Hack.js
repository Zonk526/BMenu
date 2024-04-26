const forceHack = () => {
    const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')) 
        {return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
    })())[1].children[0]._owner;

    let inject = document.createElement('iframe');
    document.body.append(inject);
    window.alert = inject.contentWindow.alert.bind(window);
    inject.remove();

    stateNode.state.stage == 'prize' ? stateNode.setState({ 
        choices: [{type: 'hack', rate: 0.2, blook: 'Mega Bot', text: 'HACK'}]  
    }) : alert('You need to enter this in the prize stage');
}

forceHack();

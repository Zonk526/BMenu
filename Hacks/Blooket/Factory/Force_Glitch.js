const forceGlitch = () => {
    const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')) 
        {return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
    })())[1].children[0]._owner;

    let inject = document.createElement('iframe');
    document.body.append(inject);
    window.alert = inject.contentWindow.alert.bind(window);
    inject.remove();

    let glitch = prompt("Choose a glitch: Lunch Break, Ad Spam, Error 37, Night Time, #LOL, Jokester, Slow Mo, Dance Party, Vortex, Reverse, Flip, Micro");

    const t = {
        name: glitch
    }

    stateNode.chooseGlitch(t);
}

forceGlitch();

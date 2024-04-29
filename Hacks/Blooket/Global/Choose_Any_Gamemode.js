const chooseAnyGamemode = () => {
    const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')) 
        {return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
    })())[1].children[0]._owner;

    let inject = document.createElement('iframe');
    document.body.append(inject);
    window.alert = inject.contentWindow.alert.bind(window);
    window.prompt = inject.contentWindow.prompt.bind(window);
    inject.remove();

    const gamemodes = ["Racing", "Classic", "Factory", "Cafe", "Defense2", "Defense", "Royale", "Gold", "Candy", "Brawl", "Hack", "Pirate", "Fish", "Dino", "Toy", "Rush"];

    if (location.pathname == "/host/settings") {
        const type = prompt(`Which gamemode do you want to switch to? (Case sensitive)\n${gamemodes.slice(0, gamemodes.length - 1).join(", ")} or ${gamemodes[gamemodes.length - 1]}`);

        if (type == 'Pirate' && !window.location.href.includes('goldquest')) {
            alert('To switch to pirate run this in the goldquest host screen'); 
            window.location.href = 'https://goldquest.blooket.com/host/settings';
        }

        gamemodes.includes(type) ? stateNode.setState({ settings: { type } }) : alert("Gamemode not found, make sure you spelled and capitalized it right.");
    } else alert("Run this script on the host settings page");
}

chooseAnyGamemode();

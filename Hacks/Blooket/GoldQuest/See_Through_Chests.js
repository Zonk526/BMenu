const seeThroughChests = () => {
    let notSet = true;

    const blookImages = {
        gold: `https://ac.blooket.com/games-l/assets/gold-DFRCSqw9.svg`,
        Dragon: `https://ac.blooket.com/marketassets/blooks/dragon.svg`,
        Unicorn: `https://ac.blooket.com/marketassets/blooks/unicorn.svg`,
        Fairy: `https://ac.blooket.com/marketassets/blooks/fairy.svg`,
        Wizard: `https://ac.blooket.com/marketassets/blooks/wizard.svg`,
        King: `https://ac.blooket.com/marketassets/blooks/king.svg`,
        'Slime Monster': `https://ac.blooket.com/marketassets/blooks/slimemonster.svg`,
        Elf: `https://ac.blooket.com/marketassets/blooks/elf.svg`,
        Jester: `https://ac.blooket.com/marketassets/blooks/jester.svg`
    };

    setInterval(() => {
        const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')){
            return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'))
        })())[1].children[0]._owner;

        if (stateNode.state.stage == 'prize') if (notSet) stateNode.state.choices.forEach((choice, i) => {
            notSet = false;
            const choices = document.querySelectorAll(`[class*='choice']`);
            
            choices[i].innerHTML = '';

            let text = document.createElement('p');
            let div = document.createElement('div');
            let img = document.createElement('img');
            
            text.textContent = `${choice.text}`;
            text.style.color = 'white';
            text.style.fontSize = '20px';
            text.style.textAlign = 'center';
            text.style.fontWeight = 'bold';
            text.style.fontFamily = 'Nunito, sans-serif';

            div.style.height = '76.55px';
            div.style.width = '88px';
            div.style.position = 'relative';
            div.style.display = 'flex';
            div.style.justifyContent = 'flex-end';
            div.style.marginLeft = '30%';

            choices[i].appendChild(div);

            if (choice.blook) {
                img.style.objectFit = 'contain';
                img.style.width = '100%';
                img.src = blookImages[choice.blook];

                div.appendChild(img);
            } else {
                img.style.objectFit = 'contain';
                img.style.width = '100%';
                img.src = blookImages.gold;

                div.appendChild(img);
            }

            choices[i].appendChild(text);
        });
        
        if (stateNode.state.stage != 'prize') notSet = true;
    }, 100);
}

seeThroughChests();

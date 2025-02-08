//General

const autoAnswer = () => {
    setInterval(() => {
        const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')) 
            {return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
        })())[1].children[0]._owner;

        let answerContainers = document.querySelectorAll(`[class*='answerContainer']`);

        if (stateNode.state.stage && stateNode.state.stage == "question") if (stateNode.state.question.qType != "typing") {
            stateNode.onAnswer ? stateNode.onAnswer('shitty website lol') : 
            [...answerContainers][Array.from(answerContainers).map((x, i) => x.innerHTML.includes(stateNode.state.question.correctAnswers[0]) ? i :
            null).filter(x => x !== null)[0]]?.click()

        } else if (window.location.href.includes('battleroyale')) {
            if (document.querySelector("[class*='typingAnswerWrapper']")) {
                Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(stateNode.props.client.question.answers[0]);

            } else if (answerContainers) {
                [...answerContainers][Array.from(answerContainers).map((x, i) => x.innerHTML.includes(stateNode.props.client.question.correctAnswers[0]) ? i : null).filter(i => i !== null)[0]].click();
            }
        } else {
            stateNode.onAnswer ? stateNode.onAnswer('this one too lmao') : 
            Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(stateNode.state.question.answers[0]);

        }
    }, 450);
}

const unlockAllBlooks = () => {
    const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')){
        return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'))
    })())[1].children[0]._owner;
    
    stateNode.setState({unlocks: Object.values(document.querySelector(`[class*='blooksHolder']`))[1].children[0].map(x => x.key)});
}

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



//Gold Quest



const resetAPlayersGold = () => {
    const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')) 
        {return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
    })())[1].children[0]._owner;

    let inject = document.createElement('iframe');
    document.body.append(inject);
    window.prompt = inject.contentWindow.prompt.bind(window);
    inject.remove();

    let target = prompt("Whose gold would you like to reset?");

    stateNode.props.liveGameController.getDatabaseVal('c', players => {
        let [player, { g }] = Object.entries(players).find(([name]) => name.toLowerCase() == target.toLowerCase());

        stateNode.setState({
            players: (players ? Object.entries(players).map(([name, { b, g }]) => ({name, blook: b, gold: g})) : []),
            choiceObj: { type: 'take', val: 0.25, text: 'Take 25%', blook: 'Wizard' }
        });
            
        stateNode.props.liveGameController.setVal({
            path: `c/${stateNode.props.client.name}`,
            val: {
                b: stateNode.props.client.blook,
                g: stateNode.state.gold,
                tat: `${player}:${g}`
            }
        })
    });

    console.log("done");
}

const transparentChests = () => {
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

            div.style.position = 'relative';
            div.style.display = 'flex';
            div.style.justifyContent = 'center';

            img.style.objectFit = 'contain';
            img.style.width = '40%';

            choices[i].appendChild(div);

            if (choice.blook) {
                img.src = blookImages[choice.blook];
            } else {
                img.src = blookImages.gold;                
            }

            div.appendChild(img);
            choices[i].appendChild(text);
        });
        
        if (stateNode.state.stage != 'prize') notSet = true;
    }, 100);
}

const forceSwap = () => {
    const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')) 
        {return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
    })())[1].children[0]._owner;

    stateNode.props.liveGameController.getDatabaseVal('c', players => {
        stateNode.setState({
            players: (players ? Object.entries(players).map(([name, { b, g }]) => ({name, blook: b, gold: g})) : []),
            ready: true,
            phaseTwo: true,
            stage: "prize",
            choiceObj: { type: "swap", text: 'SWAP!', blook: 'King' }
        });
    });
}



//CryptoHack



const forceGlitch = () => {
    const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')) 
        {return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
    })())[1].children[0]._owner;

    let inject = document.createElement('iframe');
    document.body.append(inject);
    window.alert = inject.contentWindow.alert.bind(window);
    inject.remove();

    const glitches = ["Lunch Break", "Ad Spam", "Error 37", "Night Time", "#LOL", "Jokester", "Slow Mo", "Dance Party", "Vortex", "Reverse", "Flip", "Micro"];

    if (location.pathname == "/host/settings") {
        const type = prompt(`Which gamemode do you want to switch to? (Case sensitive)\n${gamemodes.slice(0, gamemodes.length - 1).join(", ")} or ${gamemodes[gamemodes.length - 1]}`);

        if (type == 'Pirate' && !window.location.href.includes('goldquest')) {
            alert('To switch to pirate run this in the goldquest host screen'); 
            window.location.href = 'https://goldquest.blooket.com/host/settings';
        }

        gamemodes.includes(type) ? stateNode.setState({ settings: { type } }) : alert("Gamemode not found, make sure you spelled and capitalized it right.");
    } else alert("Run this script on the host settings page");

    let glitch = prompt("Choose a glitch: Lunch Break, Ad Spam, Error 37, Night Time, #LOL, Jokester, Slow Mo, Dance Party, Vortex, Reverse, Flip, Micro");

    const t = {
        name: glitch
    }

    stateNode.chooseGlitch(t);
}

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

const constantlyChangePasswords = () => {
    setInterval(() => {
        const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')) 
            {return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
        })())[1].children[0]._owner;

        const passwords = ["uncommonCommoner56", "imABirdGirl56", "redBird32", "blueBird63", "snek_lol", "xqcFanBoy68", "IOwnAJaguar_Dude", "Tax@Toucan@INC", "wakanda63", "gimmeBananasNoaw", "im_very_cold", "someone_gimme_fish", "articBuddies366", "littlePengy23", "FROSTY_PAY65", "bigPengy754", "oMEGAMEWo", "aRabbitIsAHare", "sealYouLater32", "!walruses_are_cool!", "~~~cool~~~", "youAWitch?", "who_dis???", "not_this_one", "password2", "blooketPassword", "0000", "x_MagicalWizard_x", "~TheSORCERER~", "ArchyTheArcher60", "fairy~dust!", "slimeeeee", "just_a_jester(lol)", "CarCarCarCar75", "ROAR_DRAGON_ROAR", "unicorn345739", "2Of@Spades@", "yummy_biscuit323", "koolAid!!!ok", "i_dont_know_dude", "daQUEEN_is_here", "mouseInTeacup345", "rabbitWithStopwatch523", "pinkCat_ok_cool", "cuteyCaterpillar89", "toast_toast_toast3", "XÆA-Xii", "orangeJUICEEEE643", "_milk_61", "ILOVEWAFFLESSSSSS", "pancakes_w_syrup", "PancakesvVvWaffles", "PizzaKing2555", "around~the~world!", "boomGoesMeteor52", "starsAreCoool!!", "ALIENS_ARE_REAL???", "outOfThisWorldDude", "ufo_idk_lol_wut", "boomChickaBang324", "blast_off6438", "beaches21", "astronaut&cool", "123hot_cocoa123", "spookyGhostIsReal", 
        "theQueenHasArrived26", "king333", "hatterISmad91", "kingOfMyHeart2000", "areYouCereal???", "iWantSomeMoreYougrt", "eggsToast&Bacon-pls", "minecraft-kid3", "MINECRAFT", "realGAMER*", "aishaIsVeryLost", "enderII-3482", "_zigzag314_", "jeeeessssseeeeee", "moo_37", "nobody_cares_dave", "notsafe", "living-on-the-edge", "sPoNGeBOb4537", "345catInAMemeHat", "leagueOfRockets5423", "WoW", "pick-this-one", "&_radGamer_&", "abcdefghijk", "zoomies9384", "dont-steal-my-gold", "TowerOfDoomAscender", "FactoryCEO4363", "BattleRoyaleChampion45", "5StarCafeChefBTW", "RD438-TowerDefense", "friendlyPerson000", "baseball972", "soccerStar35", "tennisPlayers438", "footballAthlete72", "swimmer0320", "agent007", "JCGCS", "LeaveMeAlone", "ImTheTeacher737", "ThisIsFun462", "RobotLeader325", "KingOfRobots321", "g00d-p@55W0rD", "verycool", "STOP_PLS", "player2", "marbles643", "tree333333", "pencilz99", "book_lover65", "MATHMATHMATHMATH", "bubbleKnightJS83", "aqua_hacker88", "Blanketfort_47", "_wide_gerald_28", "coconut49", "just-the-burger4", "9000ofCayden?!", "N0T-S0pH!@", "NeHemIaS_009", "i-Eat-GGs_??", "-nOt_piNgAble-", "PiTa-4-WabbitZ", "giL_5223!", "1-crAZY-Day", "@poly_08", "PABLOcked_554", "WaterMEL0N_J0hN:)", "the_SEEr432", "IM_Bl00ket_G0d", "R@nDY_#233", "OR_WiLLy8345", "Qu1cK_VARun95", "y0sh3n", "kl8yt0N_SluShy-", "p10tR", "c00L_C0R3", "t0@d-c4pt@1n", "Az@yU"];

        stateNode.setState({ password: passwords[Math.round(Math.random(0, 1) * passwords.length - 1)] })

        stateNode.props.liveGameController.setVal({
            path: `c/${stateNode.props.client.name}/p`,
            val: passwords[Math.round(Math.random(0, 1) * passwords.length - 1)]
        })
    }, 1000);
}

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

const neverLoseCrypto = () => {
    setInterval(() => {
        const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')) 
            {return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
        })())[1].children[0]._owner;

        stateNode.state.hackerAmount ? (stateNode.props.liveGameController.setVal({
            path: `c/${stateNode.props.client.name}`,
            val: {
                cr: stateNode.state.crypto += parseInt(stateNode.state.hackerAmount)
            }
        }), stateNode.setState({hackerAmount: ""}), console.log('we got hacked but i fixed it')) : null; 
    }, 1000);
}

const takePlayersCrypto = () => {
    const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')){
        return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
    })())[1].children[0]._owner;

    let inject = document.createElement('iframe');
    document.body.append(inject);
    window.prompt = inject.contentWindow.prompt.bind(window);
    inject.remove();

    let target = prompt("Whose crypto would you like to take?");

    stateNode.props.liveGameController.getDatabaseVal('c', players => {
        let [player, { cr }] = Object.entries(players).find(([name, { cr } ]) => {
            if (name.toLowerCase() == target.toLowerCase()) if (cr) return [name, { cr }];
        });

        stateNode.setState({
            choiceObj: { type: 'hack', rate: 0.2, blook: 'Mega Bot', text: 'HACK' },
            crypto: stateNode.state.crypto + cr,
            crypto2: stateNode.state.crypto2 + cr
        });

        stateNode.props.liveGameController.setVal({
            path: `c/${stateNode.props.client.name}`,
            val: {
                b: stateNode.props.client.blook,
                p: stateNode.state.password,
                cr: stateNode.state.crypto,
                tat: `${player}:${cr}`
            }
        });
    });
}

const autoPlayCrypto = () => {
    const divClickTimeout = () => {
        setTimeout(() => {
            document.querySelector(`[class*='feedbackContainer'] > div`).click();
        }, 1000);
    }

    setInterval(() => {
        const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')) 
            {return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
        })())[1].children[0]._owner;

        let answerContainers = document.querySelectorAll(`[class*='answerContainer']`);

        if (stateNode.state.stage && stateNode.state.stage == "question") if (stateNode.state.question.qType != "typing") {
            stateNode.onAnswer ? stateNode.onAnswer('shitty website lol') : 
            [...answerContainers][Array.from(answerContainers).map((x, i) => x.innerHTML.includes(stateNode.state.question.correctAnswers[0]) ? i :
            null).filter(x => x !== null)[0]]?.click()
            
            divClickTimeout();

        } else {
            stateNode.onAnswer ? stateNode.onAnswer('this one too lmao') : 
            Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(stateNode.state.question.answers[0]);
            
            divClickTimeout();

        } else if (window.location.href.includes('battleroyale')) {
            if (document.querySelector("[class*='typingAnswerWrapper']")) {
                Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(stateNode.props.client.question.answers[0]);
                
                divClickTimeout();

            } else if (answerContainers) {
                [...answerContainers][Array.from(answerContainers).map((x, i) => x.innerHTML.includes(stateNode.props.client.question.correctAnswers[0]) ? i : null).filter(i => i !== null)[0]].click();
                
                divClickTimeout();
            }
        }

        if (stateNode.state.stage == 'prize') {
            stateNode.choosePrize(1);

            divClickTimeout();
        }

        if (stateNode.state.stage == 'hack') stateNode.guessPassword(stateNode.state.correctPassword);
    }, 450);
}

const neverGetGlitches = () => {
    setInterval(() => {
        const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')) 
            {return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
        })())[1].children[0]._owner;

        stateNode.setState({
            bites: 0,
            ads: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            hazards: ['', '', '', '', ''],
            color: "",
            lol: false,
            joke: false,
            slow: false,
            dance: false,
            glitch: "",
            glitcherName: "",
            glitcherBlook: ""
        });

        clearTimeout(stateNode.adTimeout);
        clearInterval(stateNode.hazardInterval);
        clearTimeout(stateNode.nightTimeout);
        clearTimeout(stateNode.glitchTimeout);
        clearTimeout(stateNode.lolTimeout);
        clearTimeout(stateNode.jokeTimeout);
        clearTimeout(stateNode.slowTimeout);
        clearTimeout(stateNode.danceTimeout);
    }, 500);
}

const autoGuessPassword = () => {
    setInterval(() => {
        const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')){
            return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
        })())[1].children[0]._owner;

        if (stateNode.state.stage == 'hack') stateNode.guessPassword(stateNode.state.correctPassword);
    }, 400);
}



//Deceptive Dinos


const noMoreGettingCaught = () => {
    setInterval(() => {
        let { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')){
            return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
        })())[1].children[0]._owner;

        if (stateNode.state.isCheating) { 
            stateNode.props.liveGameController.setVal({
                path: `c/${stateNode.props.client.name}/ic`,
                val: false
            });
    
            stateNode.state.isCheating = false;
        }
    }, 25);
}

const setFossilMultiplier = () => {
    let { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')){
        return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
    })())[1].children[0]._owner;

    let inject = document.createElement('iframe');
    document.body.append(inject);
    window.prompt = inject.contentWindow.prompt.bind(window);
    inject.remove();

    let val = prompt("What would you like your nultiplier to be?");

    stateNode.setState({fossilMult : parseInt(val)})
}

const catchSomeoneCheating = () => {
    let { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')){
        return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
    })())[1].children[0]._owner;

    stateNode.props.liveGameController.getDatabaseVal('c', players => {
        let [player, { f }] = Object.entries(players).find(([name, { f, ic }]) => {
            if (ic === true) if (f) return [name, { f }];
        }) || [null, {}];

        if (f) stateNode.props.liveGameController.setVal({
            path: `c/${stateNode.props.client.name}`,
            val: {
                b: stateNode.props.client.blook,
                f: stateNode.state.fossils + Math.round(f * 0.5),
                ic: false,
                tat: `${player}:true`
            }
        });

    });

    stateNode.state.isCheating = false;
}

const resetAPlayersFossils = () => {
    let { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')){
        return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
    })())[1].children[0]._owner;

    let inject = document.createElement('iframe');
    document.body.append(inject);
    window.prompt = inject.contentWindow.prompt.bind(window);
    inject.remove();

    let target = prompt("Whose fossils would you like to reset?");

    stateNode.props.liveGameController.getDatabaseVal('c', players => {
        let [ player, { f }] = Object.entries(players).find(([name, { f } ]) => {
            if (name.toLowerCase() == target.toLowerCase()) if (f) return [name, { f }];
        });

        stateNode.props.liveGameController.setVal({
            path: `c/${stateNode.props.client.name}`,
            val: {
                b: stateNode.props.client.blook,
                f: stateNode.state.fossils,
                ic: false,
                tat: `${player}:${f}`
            }
        });
    });
}



//Fishing Frenzy



const setWeight = () => {
    const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')) 
        {return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
    })())[1].children[0]._owner;

    let inject = document.createElement('iframe');
    document.body.append(inject);
    window.prompt = inject.contentWindow.prompt.bind(window);
    inject.remove();

    let amount = prompt("Whose fossils would you like to reset?");

    if (typeof parseInt(amount) == "number") {
        stateNode.state.weight = parseInt(amount);
        stateNode.state.weight2 = parseInt(amount);
    }

    stateNode.props.liveGameController.setVal({
        path: `c/${stateNode.props.client.name}`,
        val: {
            b: stateNode.props.client.blook,
            w: stateNode.state.weight
        }
    });
}

const forceFrenzy = () => {
    const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')) 
        {return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
    })())[1].children[0]._owner;

    stateNode.props.liveGameController.setVal({
        path: `c/${stateNode.props.client.name}`,
        val: {
            b: stateNode.props.client.blook,
            w: stateNode.state.weight,
            f: "Frenzy",
            s: true
        }
    })
}



//Cafe



const unlockAllFoods = () => {
    const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')) 
        {return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
    })())[1].children[0]._owner;

    stateNode.setState({ foods: stateNode.state.foods.map(e => ({ ...e, stock: e.stock, level: 1 })) })
}

const maxLevelFood = () => {
    const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')) 
        {return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
    })())[1].children[0]._owner;

    stateNode.setState({ foods: stateNode.state.foods.map(e => ({ ...e, stock: e.stock, level: 5 })) })
}

const maxStockFood = () => {
    const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')) 
        {return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
    })())[1].children[0]._owner;

    stateNode.setState({ foods: stateNode.state.foods.map(e => e.level == 1 ? ({ ...e, stock: 99, level: e.level }) : ({ ...e, stock: e.stock, level: e.level })) })
}



// Needs work vvvvv



const autoPlayCafe = () => {
    let alreadyProcessingCustomer, processStarted;
    const foodIndex = {
        'Toast' : 0,
        'Cereal' : 1,
        'Yogurt' : 2,
        'Breakfast Combo' : 3,
        'Orange Juice' : 4,
        'Milk' : 5,
        'Waffle' : 6,
        'Pancakes' : 7,
        'French Toast' : 8,
    }

    setInterval(() => {
        const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')) 
            {return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
        })())[1].children[0]._owner;
    
        function serve(i) {
            setTimeout(() => {
                const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')) 
                    {return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
                })())[1].children[0]._owner;

                if (!alreadyProcessingCustomer) {
                    alreadyProcessingCustomer = true;

                    if (stateNode.state.customers[i]) {
                        Object.entries(stateNode.state.customers[i].order).forEach(([food, amount], i) => {
                            if (amount) {
                                stateNode.selectFood(foodIndex[food])
            
                                setTimeout(() => {
                                    stateNode.selectCustomer(i);
                                }, 100);
                            }
                        });
                    }

                    setTimeout(() => {
                        alreadyProcessingCustomer = false;

                        if (i == 2) serve(0);
                        else serve(i + 1);
                    }, 500);

                }
            }, 3000);
        }

        if (stateNode.state.customers.length && !processStarted) serve(0);  processStarted = true;
    }, 300);
}



//Factory



const forceCashFromAllBlooks = () => {
    const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')) 
        {return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
    })())[1].children[0]._owner;

    stateNode.state.blooks.forEach(blook => {
        stateNode.addCash(blook);
    });
}

const maxLevelBlooks = () => {
    const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')) 
        {return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
    })())[1].children[0]._owner;

    stateNode.setState({ blooks: stateNode.state.blooks.map(b => ({ ...b, level: 4})) })
}

const lowPricedBlooks = () => {
    const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')) 
        {return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
    })())[1].children[0]._owner;

    stateNode.setState({ blooks: stateNode.state.blooks.map(b => ({ ...b, price: b.price.map(p => ([p/50])) })) })
}

const highPayoutBlooks = () => {
    const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')) 
        {return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
    })())[1].children[0]._owner;

    stateNode.setState({ blooks: stateNode.state.blooks.map(b => ({ ...b, cash: b.cash.map(c =>  c = c*10)})) })
}

const allBlooksToMegaBot = () => {
    const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')) 
        {return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
    })())[1].children[0]._owner;

    stateNode.setState({blooks: new Array(10).fill({
        name: "Mega Bot",
        color: "#d71f27",
        class: "🤖",
        rarity: "Legendary",
        cash: [8e4, 43e4, 42e5, 62e6, 1e9],
        time: [5, 5, 3, 3, 3],
        price: [7e6, 12e7, 19e8, 35e9],
        active: false,
        level: 4,
        bonus: 5.5
    })});
}



//Survival



const maxLevelAbilities = () => {
    const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')){
        return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'))
    })())[1].children[0]._owner;

    Object.entries(stateNode.state.abilities).forEach(([name, level]) => {
        for (let i = level; i < 10; i++) {
            stateNode.levelUp(name, i);
        }

        stateNode.state.abilities[name] = 10;
    });
}



//Menu



const generalScripts = [autoAnswer, unlockAllBlooks, chooseAnyGamemode];
const menuHtml = 
`<div class="BMenu">
    <div class="theMenu">
        <div class="bHeader">
            BMenu
        </div>
        <hr class="lines">
        <div class="buttonsHolder"></div>
        <hr class="lines">
        <div class="injectButton">
            <button onclick="inject()" class="injectButtons">Inject</button>
        </div>
    </div>
    <style>
        .BMenu {
            z-index: 9999;
            top: 0px;
            left: 0px;
            position: absolute;
        }

        .theMenu {
            color:white;
            background: hsl(0, 0%, 15%);
            width: 400px;
            height: 470px;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: bold;
            border-radius: 8px;
            border-style: solid;
            border-color: hsl(0, 0%, 8%);
            border-width: 8px;
        }

        .bHeader {
            padding: 20px;
            font-size: 35px;
            text-align: center;
        }

        .bHeader:hover {
            cursor: move;
        }

        .injectButton {
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 20px;
        }

        .buttonsHolder {
            display: grid;
            align-items: center;
            justify-content: center;
            row-gap: 10px;
            padding-bottom: 20px;
            padding-top: 30px;
            max-height: 210px;
            overflow: overlay;
        }

        .buttonsHolder::-webkit-scrollbar {
            width: 16px;
            inset:inherit;
        }

        .buttonsHolder::-webkit-scrollbar-track {
            border-radius: 8px;
            background-color: hsl(0, 0%, 15%);
            border: 1px solid hsl(0, 0%, 10%);
        }

        .buttonsHolder::-webkit-scrollbar-thumb {
            border-radius: 8px;
            border: 3px solid transparent;
            background-clip: content-box;
            background-color: hsl(0, 0%, 8%);
        }

        .lines {
            color:white;
            width: 90%;
        }
        
        .injectButtons {
            color:white;
            background: hsl(0, 0%, 20%);
            font-family: Arial, Helvetica, sans-serif;
            font-weight: bold;
            font-size: 15px;
            padding: 10px;
            width: 125px;
            height: 45px;
            box-shadow: none;
            border-radius: 8px;
            border: none;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            position: relative; 
        }

        .buttons {
            color:white;
            background: hsl(0, 0%, 20%);
            font-family: Arial, Helvetica, sans-serif;
            font-weight: bold;
            font-size: 15px;
            padding: 10px;
            width: 245px;
            height: 45px;
            box-shadow: none;
            border-radius: 8px;
            border: none;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            position: relative;
        }

        .buttons:hover, .injectButtons:hover {
            cursor: pointer;
            background-color: hsl(0, 0%, 30%);
        }
    </style>
</div>`;

let bindWindow = document.createElement('iframe');
document.body.append(bindWindow);
window.prompt = bindWindow.contentWindow.prompt.bind(window);
window.alert = bindWindow.contentWindow.alert.bind(window);
bindWindow.remove();

function inject() {
    console.log('Injecting...');

    document.body.innerHTML += menuHtml;

    let url = document.location.host.split('.')[0];
    let buttonsHolder = document.querySelector('.buttonsHolder');
    const gamemodeScripts = {
        "deceptivedinos" : [noMoreGettingCaught, catchSomeoneCheating, resetAPlayersFossils, setFossilMultiplier],
        "goldquest" : [resetAPlayersGold, transparentChests, forceSwap],
        "cryptohack" : [neverGetNothing, neverLoseCrypto, forceHack, forceGlitch,
                constantlyChangePasswords, takePlayersCrypto, autoPlayCrypto, neverGetGlitches, autoGuessPassword],
        "factory" : [forceCashFromAllBlooks, maxLevelBlooks, lowPricedBlooks, highPayoutBlooks, allBlooksToMegaBot],
        "cafe" : [unlockAllFoods, maxLevelFood, maxStockFood],
        "fishingfrenzy" : [setWeight, forceFrenzy], 
        "Survival" : [maxLevelAbilities]
    }

    let scripts = gamemodeScripts[url];
    
    try {
        buttonsHolder.innerHTML = "";
        scripts.forEach(script => {
            let button = document.createElement('button');
            let scriptName = script.name
            let upperCaseIndex = [];
            let finalName = "";

            for (let i = 0; i < scriptName.length - 1; i++) {
                if (scriptName[i] == scriptName[i].toUpperCase()) {
                    upperCaseIndex.push(i)
                }
            }

            finalName = `${scriptName[0].toUpperCase() + scriptName.slice(1, upperCaseIndex[0])}`;

            upperCaseIndex.forEach((i, index) => {
                if (index + 1) {
                    finalName = `${finalName} ${scriptName.slice(i, upperCaseIndex[index + 1])}`;
                }
            });

            button.setAttribute('onClick', `fireScript(${script.name})`);
            button.innerHTML = finalName;
            button.classList.add('buttons');
            buttonsHolder.appendChild(button);
        });
    } catch {
        alert('Could not find gamemode');
        throw new Error('Could not find gamemode');
    }
}

inject();

const fireScript = (script) => {
    if (typeof script != 'function') { 
        throw new Error(`fireScript(); the parameters are empty or lacks a valid function`);
    }

    javascript:(function() {
        script();
    }());
}

let bMenu = document.querySelector('.BMenu'), bHeader = document.querySelector('.bHeader');

function onDrag({movementX, movementY}) {
    let getStyle = window.getComputedStyle(bMenu);
    let left = parseInt(getStyle.left);
    let topp = parseInt(getStyle.top);

    bMenu.style.left = "" + (left + movementX) + "px";
    bMenu.style.top = "" + (topp + movementY) + "px";
}

bHeader.addEventListener("mousedown", () => {
    bHeader.addEventListener("mousemove", onDrag);
});

document.addEventListener("mouseup", () => {
    bHeader.removeEventListener("mousemove", onDrag);
});

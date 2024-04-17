var blooksArraySelect = Object.values(document.querySelector(`div[class^='styles__blooksHolder']`))[1].children[0];
let listOfBlookNames = [];

// unlock all blooks

let { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')){
    return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'))
})())[1].children[0]._owner;

for (let child of blooksArraySelect) {
    let childsKey = child.key;

    listOfBlookNames.push(childsKey);
}

stateNode.state.unlocks = listOfBlookNames;

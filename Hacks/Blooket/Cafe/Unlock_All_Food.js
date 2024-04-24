const unlockAllFoods = () => {
    const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')) 
        {return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
    })())[1].children[0]._owner;

    stateNode.setState({ foods: stateNode.state.foods.map(e => ({ ...e, stock: e.stock, level: 1 })) })
}

unlockAllFoods();

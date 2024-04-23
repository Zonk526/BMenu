const unlockAllFoods = () => {
    const { stateNode : { state } } = Object.values((function react(potentialDiv = document.querySelector('body>div')) 
        {return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
    })())[1].children[0]._owner;

    state.foods.forEach(food => {
        food.level = 1;
    });
}

unlockAllFoods();

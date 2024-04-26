const constantlyChangePassword = () => {
    setInterval(() => {
        const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')) 
            {return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
        })())[1].children[0]._owner;

        const passwords = ['king333', 'areYouCereal???', '1-crAZY-Day', 'ALIENS_ARE_REAL???', 'iHaveStripes324', 'not_this_one', 'verycool', 'NeHemIaS_009', 'g00d-p@55W0rD', 'eggsToast&Bacon-pls', 'rabbit2342', 'ImTheTeacher737', 'slimeeeee', 'aqua_hacker88', 'aishaIsVeryLost'];

        stateNode.setState({ password: passwords[Math.round(Math.random(0, 1) * passwords.length - 1)] })

        stateNode.props.liveGameController.setVal({
            path: `c/${stateNode.props.client.name}/p`,
            val: passwords[Math.round(Math.random(0, 1) * passwords.length - 1)]
        })
    }, 1000);
}
  
constantlyChangePassword();

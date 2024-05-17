const tempUnlockAllBlooks = () => {
    const blooks = [        "Chick",        "Chicken",        "Cow",        "Goat",        "Horse",        "Pig",        "Sheep",        "Duck",        "Alpaca",        "Dog",        "Cat",        "Rabbit",        "Goldfish",        "Hamster",        "Turtle",        "Kitten",        "Puppy",        "Bear",        "Moose",        "Fox",        "Raccoon",        "Squirrel",        "Owl",        
        "Hedgehog",        "Deer",        "Wolf",        "Beaver",        "Tiger",        "Orangutan",        "Cockatoo",        "Parrot",        "Anaconda",        "Jaguar",        "Macaw",        "Toucan",        "Panther",        "Capuchin",        "Gorilla",        "Hippo",        "Rhino",        "Giraffe",        "Snowy Owl",        "Polar Bear",        "Arctic Fox",        "Baby Penguin",        
        "Penguin",        "Arctic Hare",        "Seal",        "Walrus",        "Witch",        "Wizard",        "Elf",        "Fairy",        "Slime Monster",        "Jester",        "Dragon",        "Queen",        "Unicorn",        "King",        "Two of Spades",        "Eat Me",        "Drink Me",        "Alice",        "Queen of Hearts",        "Dormouse",        "White Rabbit",        "Cheshire Cat",        
        "Caterpillar",        "Mad Hatter",        "King of Hearts",        "Toast",        "Cereal",        "Yogurt",        "Breakfast Combo",        "Orange Juice",        "Milk",        "Waffle",        "Pancakes",        "French Toast",        "Pizza",        "Earth",        "Meteor",        "Stars",        "Alien",        "Planet",        "UFO",        "Spaceship",        "Astronaut",        "Lil Bot",        "Lovely Bot",        "Angry Bot",        "Happy Bot",        "Watson",        
        "Buddy Bot",        "Brainy Bot",        "Mega Bot",        "Old Boot",        "Jellyfish",        "Clownfish",        "Frog",        "Crab",        "Pufferfish",        "Blobfish",        "Octopus",        "Narwhal",        "Dolphin",        "Baby Shark",        "Megalodon",        "Panda",        "Sloth",        "Tenrec",        "Flamingo",        "Zebra",        "Elephant",        
        "Lemur",        "Peacock",        "Chameleon",        "Lion",        "Amber",        "Dino Egg",        "Dino Fossil",        "Stegosaurus",        "Velociraptor",        "Brontosaurus",        "Triceratops",        "Tyrannosaurus Rex",        "Ice Bat",        "Ice Bug",        "Ice Elemental",        "Rock Monster",        "Dink",        "Donk",        "Bush Monster",        "Yeti",        
        "Dingo",        "Echidna",        "Koala",        "Kookaburra",        "Platypus",        "Joey",        "Kangaroo",        "Crocodile",        "Sugar Glider",        "Deckhand",        "Buccaneer",        "Swashbuckler",        "Treasure Map",        "Seagull",        "Jolly Pirate",        "Pirate Ship",        "Kraken",        "Captain Blackbeard",        "Snow Globe",        "Holiday Gift",        "Hot Chocolate",        "Holiday Wreath",        "Stocking",        "Gingerbread Man",        "Gingerbread House",        "Reindeer",        "Snowman",        "Santa Claus"    
    ];

    const { stateNode } = Object.values((function react(potentialDiv = document.querySelector('body>div')) 
        {return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
    })())[1].children[0]._owner;

    if (location.pathname == '/blooks') stateNode.setState({ blookData: blooks.reduce((v, blook) => {
        v[blook] = 1;
        return v;
      }, {})});
}

tempUnlockAllBlooks();

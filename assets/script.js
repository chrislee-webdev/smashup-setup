let coreSetCheckBox = document.getElementById("coreSet");
let awesomeLevelCheckBox = document.getElementById("awesomeLevel9000");
let sciFiCheckBox = document.getElementById("sciFi");
let monsterSmashCheckBox = document.getElementById("monsterSmash");
let prettyCheckBox = document.getElementById("pretty");
let yourFaultCheckBox = document.getElementById("yourFault");
let ceaseDesistCheckBox = document.getElementById("ceaseDesist");
let thinkingCheckBox = document.getElementById("thinking");
let japanCheckBox = document.getElementById("japan");
let cthuluCheckBox = document.getElementById("cthulu");
let sheepCheckBox = document.getElementById("sheep");
let allStarsCheckBox = document.getElementById("allStars");
let selected = document.getElementsByClassName('sets');
let finalSetup = document.getElementById("finalSetup")

// Select all expansions
function selectAll() {
    for (let i = 0; i < selected.length; i++) {
        if (selected[i].type == 'checkbox') {
            selected[i].checked = true;
        }
    }
};

// Unselect all expansions
function unSelectAll() {
    for (let i = 0; i < selected.length; i++) {
        if (selected[i].type == 'checkbox') {
            selected[i].checked = false;
        }
    }
};

// Reset all selections


// SmashUp Sets
const coreSet = [
    'Aliens',
    'Dinosaurs',
    'Ninjas',
    'Pirates',
    'Robots',
    'Tricksters',
    'Wizards',
    'Zombies'
];

const awesomeLevel = [
    'Killer Plants',
    'Ghost',
    'Steampunk',
    'Bear Cavalry'
];

const cthulu = [
    'Elder Things',
    'Innsmouth',
    'Minions of Cthulu',
    'Miskatonic University'
];

const sciFi = [
    'Cyborg Apes',
    'Shapeshifters',
    'Super Spies',
    'Time Travelers'
];

const monsterSmash = [
    'Giant Ants',
    'Mad Scientists',
    'Vampires',
    'Werewolves'
];

const pretty = [
    'Fairies',
    'Kitty Cats',
    'Mythic Horses',
    'Princesses'
]

const yourFault = [
    'Dragons',
    'Mythic Greeks',
    'Sharks',
    'Superheroes',
    'Tornados'
];

const ceaseDesist = [
    'Astroknights',
    'Changerbots',
    'Ignobles',
    'Star Roamers'
];

const thinking = [
    'Explorers',
    'Grannies',
    'Rock Stars',
    'Teddy Bears'
];

const japan = [
    'Itty Critters',
    'Kaiju',
    'Magical Girls',
    'Mega Troopers'
];

const sheep = [
    'Sheep'
];

const bigInJapan = [
    'Itty Critters',
    'Kaiju',
    'Magical Girls',
    'Mega Troopers'
];

const thatSeventiesExpansion = [
    'Disco Dancers',
    'Kung Fu Fighters',
    'Truckers',
    'Vigilantes'
];

const theBiggerGeekierBox = [
    'Geeks',
    'Smash Up All Stars'
];

const oopsYouDidItAgain = [
    'Ancient Egyptians',
    'Cowboys',
    'Samurai',
    'Vikings'
];

const worldTour = [
    'Luchadors',
    'Mounties',
    'Musketeers',
    'Sumo Wrestlers'
];

const smashUpPenguins = [
    'Penguins'
];

const worldTourCultureShock = [
    'Anansi Takes',
    'Ancient Incas',
    "Grimm's Fairy Tales",
    "Polynesian Voyagers",
    "Russian Fairy Tales",
];

const smashUpMarvel = [
    'Avengers',
    'Hydra',
    'Kree',
    'Masters of Evil',
    'S.H.I.E.L.D.',
    'Sinister Six',
    'Spider-Verse',
    'Ultimates'
];

const smashUpGoblins = [
    'Goblins'
];

const knightsOfTheRoundTable = [
    'Knights of the Round Table'
];

const smashUpDisney = [
    'Aladdin',
    'Beauty and the Beast',
    'Big Hero 6',
    'Frozen',
    'Mulan',
    'The Lion King',
    'The Nightmare Before Christmas',
    'Wreck-It Ralph'
];

const tenthAnniversary = [
    'Mermaids',
    'Sheep',
    'Skeletons',
    'World Champs',
    'Titans'
];

const theBigGeekyBox = [
    'Geeks'
];

const munchkin = [
    'Clerics',
    'Dwarves',
    'Elves',
    'Halflings',
    'Mages',
    'Orcs',
    'Thieves',
    'Warriors'
];

const allStarsEventKit = [
    'Smash Up All Stars'
];

const titansEventKit = [
    'Titans'
];

const allStars = [
    'All Stars'
]
// Empty arrays
let expansions = [];

// Get number of players and player arrays
let n 
function getPlayers() {
    n = document.getElementById('players').value;
};

let player1 = [];
let player2 = [];
let player3 = [];
let player4 = [];

// trying to change set background color change on click
function click() {
    
}

function ifSelected() {
    // Check to see if expansion has been checked. If so, add expansion to expansions array
    if (coreSetCheckBox.checked) {
        expansions.push(coreSet)
    };
    if (awesomeLevelCheckBox.checked) {
        expansions.push(awesomeLevel)
    };
    if (cthuluCheckBox.checked) {
        expansions.push(cthulu)
    };
    if (sciFiCheckBox.checked) {
        expansions.push(sciFi)
    };
    if (monsterSmashCheckBox.checked) {
        expansions.push(monsterSmash)
    };
    if (prettyCheckBox.checked) {
        expansions.push(pretty)
    };
    if (yourFaultCheckBox.checked) {
        expansions.push(yourFault)
    };
    if (ceaseDesistCheckBox.checked) {
        expansions.push(ceaseDesist)
    };
    if (thinkingCheckBox.checked) {
        expansions.push(thinking)
    };
    if (japanCheckBox.checked) {
        expansions.push(japan)
    };
    if (sheepCheckBox.checked) {
        expansions.push(sheep)
    };
    if (allStarsCheckBox.checked) {
        expansions.push(allStars)
    };

    // merge all elements in array in to one array
    let flattened = expansions.flatMap(factions => factions);
  
    // shuffle flattened array and choose n * 2 elements from the shuffledArray
    let shuffledArray = flattened.sort(() => 0.5 - Math.random())
    console.log(shuffledArray);
    let results = shuffledArray.slice(0, n * 2);

    console.log(n + " players are playing")

    // factions get distributed to player

    function twoPlayerGame() {
        document.getElementById('playerOneFactions').innerHTML = `<h2>Player 1 is blessed (or cursed) with ${results[0]} and ${results[2]}</h2>`;

        document.getElementById('playerTwoFactions').innerHTML = `<h2>Player 2 is going to lose with ${results[1]} and ${results[3]}</h2>`
    }

    function threePlayerGame() {
       document.getElementById('playerOneFactions').innerHTML = `<h2>Player 1 is stuck with ${results[0]} and ${results[3]}</h2>`;

       document.getElementById('playerTwoFactions').innerHTML = `<h2>Player 2 gets ${results[1]} and ${results[4]}! Good luck with that!</h2>`;

       document.getElementById('playerThreeFactions').innerHTML = `<h2>Player 3 gets ${results[2]} and ${results[5]}. Oh god why?</h2>`;
    };

    function fourPlayerGame() {
       document.getElementById('playerOneFactions').innerHTML = `<h2>Player 1 is doomed with ${results[0]} and ${results[4]}</h2>`;

       document.getElementById('playerTwoFactions').innerHTML = `<h2>Player 2 should just give up because they get ${results[1]} and ${results[5]}</h2>`;

       document.getElementById('playerThreeFactions').innerHTML = `<h2>Player 3 is crying in the corner with ${results[2]} and ${results[6]}<h2>`;

       document.getElementById('playerFourFactions').innerHTML = `<h2>Player 4 is cursed with ${results[3]} and ${results[7]}`;
    };
   
   if (n == 2) {
     // 2 player game
    player1.push(results[0])
    player1.push(results[2])
    player2.push(results[1])
    player2.push(results[3])

    twoPlayerGame();

   } else if (n == 3) {
    //3 player game
    player1.push(results[0])
    player1.push(results[3])
    player2.push(results[1])
    player2.push(results[4])
    player3.push(results[2])
    player3.push(results[5])

    threePlayerGame();

   } else if (n == 4 ) {
    // 4 player game
    player1.push(results[0])
    player1.push(results[4])
    player2.push(results[1])
    player2.push(results[5])
    player3.push(results[2])
    player3.push(results[6])
    player4.push(results[3])
    player4.push(results[7])

    fourPlayerGame();
   }
} 

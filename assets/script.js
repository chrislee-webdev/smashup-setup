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
]

const sciFi = [
    'Cyborg Apes',
    'Shapeshifters',
    'Super Spies',
    'Time Travelers'
]

const monsterSmash = [
    'Giant Ants',
    'Mad Scientists',
    'Vampires',
    'Werewolves'
]

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
]

const ceaseDesist = [
    'Astroknights',
    'Changerbots',
    'Ignobles',
    'Star Roamers'
]

const thinking = [
    'Explorers',
    'Grannies',
    'Rock Stars',
    'Teddy Bears'
]

const japan = [
    'Itty Critters',
    'Kaiju',
    'Magical Girls',
    'Mega Troopers'
]

const sheep = [
    'Sheep'
]

const allStars = [
    'All Stars'
]

// Empty arrays
let expansions = []

// Get number of players and player arrays
let player1 = [];
let player2 = [];
let player3 = [];
let player4 = [];

let n 
function getPlayers() {
    n = document.getElementById('players').value;
}


function ifSelected() {
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
    console.log(flattened);

    // shuffle flattened array and choose n * 2 elements from the shuffledArray
    let shuffledArray = flattened.sort(() => 0.5 - Math.random())
    let results = shuffledArray.slice(0, n * 2);

    console.log(results)
    console.log(n + " players are playing")

    // factions get distributed to player
   if (n == 2) {
    player1.push(results[0])
    player1.push(results[1])
    player2.push(results[2])
    player2.push(results[3])
   }

   console.log('Player 1 gets ' + results[0] + ' and ' + results[1])
   console.log('Player 2 gets ' + results[2] + ' and ' + results[3])
} 


// const chooseRandom = (gameContents, num = 1) => {
//     const results = [];
//     for(let i = 0; i < num; ){
//        const random = Math.floor(Math.random() * gameContents.length);
//        if(results.indexOf(gameContents[random]) !== -1){
//           continue;
//        };
//        results.push(gameContents[random]);
//        i++;
//     };
//     return results;
//  };
 
// console.log(chooseRandom(gameContents, 2))

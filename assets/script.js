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

const sheep = [
    'Sheep'
]

const gameContents = [
    coreSet,
    awesomeLevel,
    cthulu
  ];

function getRandomSet(gameContents) {
    return gameContents[Math.floor(Math.random() * gameContents.length)];
}

console.log(getRandomSet(gameContents));


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

const allStars = [
    'All Stars'
]

const gameContents = [
    coreSet,
    awesomeLevel,
    cthulu
  ];

// this gets only one random element from the array 
// function getRandomSet(gameContents) {
//     return gameContents[Math.floor(Math.random() * gameContents.length)];
// }

const chooseRandom = (gameContents, num = 1) => {
    const res = [];
    for(let i = 0; i < num; ){
       const random = Math.floor(Math.random() * gameContents.length);
       if(res.indexOf(gameContents[random]) !== -1){
          continue;
       };
       res.push(gameContents[random]);
       i++;
    };
    return res;
 };
 console.log(chooseRandom(gameContents, 4));


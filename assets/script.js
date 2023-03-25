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

const misc = [
    'Sheep',
    'All Stars'
]



//Selected sets are placed in an array
function selectedSets() {
    let arr = [];
    let checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
    for (let i = 0 ; i < checkboxes.length; i++) {
    arr.push(checkboxes[i].value)
    }

    let newArr = arr.flatMap(set => set)

    console.log(arr[0]);
}

// store selected sets 
// const gameContents = [
//     coreSet,
//     awesomeLevel,
//     cthulu,
//     misc
//   ];

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

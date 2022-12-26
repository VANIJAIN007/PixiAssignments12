// const game = new PIXI.Application({
//     width: 1550,
//     height: 720,
//     backgroundColor: 0x3366ff,
//   });
//   document.getElementById("game").append(game.view);
//   loadAssets([

//     { name: "coinImage", url:"assets/con1.png"},
   
//   ], start);
// console.log("my"+coin);

// coin.x=500;
// coin.y=500;

// app.stage.addChild(coin);

import { FallDown } from 'falldown'
 
const falldown = new FallDown({
    parent: document.body,
    label: 'Choose a color:',
    options: [
        'black',
        'blue',
        'green',
        'purple',
        'yellow'
    ],
    addCSS: true,
    selected: 'black'
})
falldown.on('select', value => console.log(value))

const prompt = require('prompt-sync')()
let i = 0;
let fishAdj1 = ['Slippery', 'Scaly', 'Luminescent', 'Shiny', 'Delicious', 'Crispy', 'Golden', 'Juicy', 'Battered', 'Smelly']
let fishAdj2 = ['Fresh-Water','Great', 'Splendid', 'Lost', 'Straight ', 'Small', 'Fresh', 'First','Beautiful', 'Dead']
let fishKind = ['Betta', 'Goldfish', 'Catfish', 'Swordfish', 'Tigershark', 'Ocean-Sunfish', 'Kaluga', 'Tuna', 'Mahi-Mahi', 'Sturgeon']
// let to_Fish= prompt('Choose: [k]eep or [r]elease?')

let time = 0600 
// let currentFish = randomFish()
let fishValue = Math.floor(Math.random()*10.00)
let weight = Math.floor(Math.random()*10.00)

function randomFish () {
    let Adj1 = fishAdj1[Math.floor(Math.random()*10)]
    let Adj2 = fishAdj2[Math.floor(Math.random()*10)]
    let newKind = fishKind[Math.floor(Math.random()*10)]

    let newFish = {
     fishName :  Adj1 +  ' ' 
     + Adj2  +  ' '
     + newKind +  ' '
     + 'Value of ' + fishValue + '$  ' 
     + 'Weight of '+ weight+ 'lbs',

     }
     return newFish
 }




while (i < 6 ){
    console.log("Nice! You caught a "(randomFish())


//  if (toFish === 'k')  + i;



  

// // keep (add all dimensions to something)    or release fish. Generate new fish
// else if (toFish === 'r')

    
i++
}




// else {
//     console.log("Error")
// }






// //  //k or r
// // if (to_Fish === 'k')  {
// //     // fish, add to inventory
// // }
// //  else if  ( to_Fish === 'r'){

// // }


// // function addGrades (  student, newGrades){
// //     for (let i=0 ; i <  newGrades.length; i++  )
// //     student.grades.push(newGrades[i])
// // // creating a function


// // function newfish (fishKind, fishAdj1, fishAdj2) {
// //     let randomFish = {}; 
// //     for (let i = 0; i < fishKind.length; i++) {
       





// //     return randomFish;

// // }
















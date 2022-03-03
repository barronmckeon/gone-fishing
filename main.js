
const prompt = require('prompt-sync')({sigint:true});
let fishAdj1 = ['Slippery', 'Scaly', 'Luminescent', 'Shiny', 'Delicious', 'Crispy', 'Golden', 'Juicy', 'Battered', 'Smelly']
let fishAdj2 = ['Fresh-Water','Great', 'Splendid', 'Lost', 'Straight ', 'Small', 'Fresh', 'First','Beautiful', 'Dead']
let fishKind = ['Betta', 'Goldfish', 'Catfish', 'Swordfish', 'Tigershark', 'Ocean-Sunfish', 'Kaluga', 'Tuna', 'Mahi-Mahi', 'Sturgeon']
//let emptyBucket = [ ]
let currentBucket = [ ]
let currentBucketWeight = []
let hour = 0
//let currentWeight = 0


function randomWeight(){
    let fishWeight = Math.floor(Math.random()*1000 / 100);
    return fishWeight;
}
function randomValue(){
    let fishValue = Math.floor(Math.random()*1000 / 100);
    return fishValue;
}


function randomFish () {
    let Adj1 = fishAdj1[Math.floor(Math.random()*10)]
    let Adj2 = fishAdj2[Math.floor(Math.random()*10)]
    let newKind = fishKind[Math.floor(Math.random()*10)]
    let newFish = {
     fishName :  + Adj1 +  ' ' 
     + Adj2  +  ' '
     + newKind +  ' '
     }
     return newFish
    
    }
// if variable created inside a function, it needs to be called and then stored in another 
//variable outside the function.  ie random value creates fish value, call random value and then pass
//into a new variable
 
while (hour < 7 && currentBucketWeight <= 10  ){
randomFish();
randomValue();
randomWeight();
let fishValue=randomValue();
let fishWeight = randomWeight();
//console.log(currentBucket)

let to_Fish= prompt("Nice! You caught a " +  " This fish is worth " + fishValue + " and weighs " + fishWeight+ 'Choose: [k]eep or [r]elease this fish')
console.log('Current time is ' + hour + ":00")

    //let emptybucket = caught fishes

  if (to_Fish === 'k'){
currentBucket.push(randomFish);
hour++;
 
// increase weight

  }
// release fish
else if (to_Fish === 'r'){
    console.log("Fish on!")
 
}
else {
    console.log('not a valid inuput')
}
} 
// //  //k or r
// // if (to_Fish === 'k')  {
// //     // fish, add to inventory
// // }
// //  else if  ( to_Fish === 'r'){

// // }


// // // function addGrades (  student, newGrades){
// // //     for (let i=0 ; i <  newGrades.length; i++  )
// // //     student.grades.push(newGrades[i])
// // // // creating a function


// // //     for (let i = 0; i < fishKind.length; i++) {
       



// // // }







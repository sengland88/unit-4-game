let ranNum = Math.floor(Math.random() * (120 - 19)) + 19;

let fireStone = Math.floor(Math.random() * (12 - 1)) + 1;
let waterStone = Math.floor(Math.random() * (12 - 1)) + 1;
let thunderStone = Math.floor(Math.random() * (12 - 1)) + 1;
let leafStone = Math.floor(Math.random() * (12 - 1)) + 1;

let totalScore = 0;

let wins = 0;
let losses = 0; 

console.log(`the random number is ${ranNum}`)
console.log(`the fire stone is ${fireStone}`)
console.log(`the leaf stone is ${leafStone}`)
console.log(`the thunder stone is ${thunderStone}`)
console.log(`the water stone is ${waterStone}`)

$("#gio").text(ranNum)

$(document).ready(function() {

    $("#fire").on("click", function(){
        totalScore = totalScore + fireStone
        console.log(totalScore)
        scoreChecker()
    })
    
    $("#leaf").on("click", function(){   
        totalScore = totalScore + leafStone
        console.log(totalScore)
        scoreChecker()
    })
    
    $("#water").on("click", function(){   
        totalScore = totalScore + waterStone
        console.log(totalScore)
        scoreChecker()
    })
    
    $("#thunder").on("click", function(){    
        totalScore = totalScore + thunderStone
        console.log(totalScore)
        scoreChecker()        
    })


    function scoreChecker() {
        $("#you").text(totalScore)


        if (totalScore > ranNum){
            console.log("you lost")
            losses++
            $("#lose").text(losses)
            reStart()
        }

        if (totalScore === ranNum) {
            console.log("you won")
            wins++
            $("#wins").text(wins)
            reStart()
        }
    }

    function reStart() {
        ranNum = Math.floor(Math.random() * (120 - 19)) + 19;

        fireStone = Math.floor(Math.random() * (12 - 1)) + 1;
        waterStone = Math.floor(Math.random() * (12 - 1)) + 1;
        thunderStone = Math.floor(Math.random() * (12 - 1)) + 1;
        leafStone = Math.floor(Math.random() * (12 - 1)) + 1;

        totalScore = 0;
        $("#gio").text(ranNum)
        $("#lose").text(losses)
        $("#win").text(wins)
        losses

        console.log(`the random number is ${ranNum}`)
        console.log(`the fire stone is ${fireStone}`)
        console.log(`the leaf stone is ${leafStone}`)
        console.log(`the thunder stone is ${thunderStone}`)
        console.log(`the water stone is ${waterStone}`)
        console.log(totalScore)
        console.log(`your wins are: ${wins}`)
        console.log(`your losses are: ${losses}`)

    }
    
    

}) //end bracket to document ready


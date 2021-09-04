var userInput = document.querySelectorAll(".user-input")
var check = document.querySelector(".btn")
var output = document.querySelector(".output")
var reset = document.querySelector(".reset")


function calcHypotenuse(){
    hyp(Number(userInput[0].value),Number(userInput[1].value))
}

function hyp(num1,num2){
    if(num1>0 && num2>0){
    sq1 = num1 * num1
    sq2 = num2 * num2
    var sqSum = sq1 + sq2
    var hypotenuse = Math.sqrt(sqSum)
    output.innerText = `The Hypotenuse of ${num1} and ${num2} is ${hypotenuse}`
    } else{
        output.innerText = 'Enter a valid input'
    }

}





check.addEventListener("click", calcHypotenuse)
reset.addEventListener("click", () => {
    location.reload()
} )
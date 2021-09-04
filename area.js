var userInput = document.querySelectorAll(".user-input")
var areaCheck = document.querySelector(".btn")
var output = document.querySelector(".output")


function areaOfTriangle(){
    area(Number(userInput[0].value),Number(userInput[1].value))
}

function area(num1,num2){
    if(num1>0 && num2>0){
    product = num1*num2
    var halfValue = 0.5 * product
    output.innerText = `The area of ${num1} and ${num2} is ${halfValue}`
    } else{
        output.innerText = 'Enter a valid input'
    }


}





areaCheck.addEventListener("click", areaOfTriangle)
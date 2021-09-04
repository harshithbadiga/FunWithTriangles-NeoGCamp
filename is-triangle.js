var userAngles = document.querySelectorAll(".angles")
var checkAnswer = document.querySelector(".checkme")
var output = document.querySelector(".output")
var reset = document.querySelector(".reset")

function triangleOrNot() {
    checkSum(Number(userAngles[0].value), Number(userAngles[1].value), Number(userAngles[2].value))
}

function checkSum(angle1, angle2, angle3) {
    if (angle1 > 0 && angle2 && angle3 > 0) {
        sum = angle1 + angle2 + angle3
        if (sum === 180) {
            output.innerText = "A traingle can be formed!"
        } else {
            output.innerText = " A traingle cannot be formed!"
        }
    } else {
        output.innerText = "Enter a value greater than 0 !"
    }


}




checkAnswer.addEventListener("click", triangleOrNot)
reset.addEventListener("click", () => {
    location.reload()
} )
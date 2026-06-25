const { log } = require("console")

let genderType = "Female"
function printGender() {
    let color = "Brown"
    console.log("Inside Funct:", color)
    if (genderType.startsWith("Female")) {
        var age = 30
        let color = "Pink"
        console.log("Inside If:", color)
    }
    console.log("Inside Funct, Outside IF:", age)
}
printGender()
console.log("Global genderType:", genderType);
genderType = "Male"
console.log("Global genderType1", genderType);
printGender()

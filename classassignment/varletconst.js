const { log } = require("console")

const browserName = "Chrome"
function getBrowserNameVar() {
console.log("Inside Var function:", browserName);

    if (browserName === "Chrome") {
        var browserName = "Microsoft Edge"
        console.log("Inside block - var:", browserName);
               
    }
    console.log("Inside function, Outside Block - Var:", browserName);
  
}
getBrowserNameVar()
console.log("After Var:", browserName);

function getBrowserNamelet() {
    console.log("Inside let function:", browserName);
    if (browserName === "Chrome") {
        let browserName = "Microsoft Edge"
        console.log("Inside block - let:", browserName);
               
    }
    console.log("Inside function, Outside Block - Let:", browserName);
  
}
getBrowserNamelet()
console.log("After let:", browserName);
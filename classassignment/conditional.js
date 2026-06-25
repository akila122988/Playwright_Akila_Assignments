function launchBrowser(browserName) {
    if (browserName === "Chrome") {
        console.log ("Browser Name in If:", browserName)
        
    } else {
        console.log ("Browser Name in else:", browserName)
        
    }
    
}

launchBrowser("Chrome")
launchBrowser("MicrosoftEdge")
function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("Test Type:",testType);
                        
            break;
        case "sanity":
            console.log("Test Type:",testType);
                        
            break;
        case "regression":
            console.log("Test Type:",testType);
                        
            break; 
    
        default:
            break;
    }
    
}
runTests("sanity")
runTests("regression")
runTests("parallel")
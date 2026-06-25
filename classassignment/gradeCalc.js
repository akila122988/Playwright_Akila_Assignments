function gradeCalc(score) {
    let grade
    switch (true) {
        case (score >= 90):
            grade = "A"
            console.log("Grade:", grade)
            
            break;
        case (score < 90 && score >= 75):
            grade = "B"
            console.log("Grade:", grade)
            
            break;
        case (score < 75 && score >= 40):
            grade = "C"
            console.log("Grade:", grade)
            
            break;
    
        default:
            grade = "F"
            console.log("Grade:",grade);
            
            break;
    }
    
}
gradeCalc(95)
gradeCalc(80)
gradeCalc(40)
gradeCalc(35)
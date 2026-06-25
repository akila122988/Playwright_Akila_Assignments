function stringPal(str){
let str1 = str.split("")
console.log("Original String:", str);
console.log(str1);
let rev =""
for (let index = str1.length-1; index >=0; index--) {
    rev += str1[index];
        console.log("Reverse String:", rev);  
}
if (str === rev) {
      console.log("True");
         
    } else {
        console.log("False");
        
    }
}

stringPal("Great")
stringPal("Eve")
stringPal("eve")

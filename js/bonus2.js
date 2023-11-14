var input1 = "Amor, Roma";
var n1 = input1.length;
var i=0;
var j=n1-1;
var t1 = false;
while(i < j){
    // A is different from a
    if(input1[i] != input1[j]){
        t1 = true;
        console.log("Not a palindrome");
        break;
    }
    i++,j--;
}
if(!t1){
        console.log("It is a palindrome");
        
}
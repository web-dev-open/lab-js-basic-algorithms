// Iteration 1: Names and Input
let hacker1="Baskar"
console.log("The driver's name is"+" "+hacker1)

let hacker2="BalaMurugan"
console.log("The navigator's name is"+" "+hacker2)

// Iteration 2: Conditionals
if(hacker1.length>hacker2.length){
    console.log("The driver has the longest name, it has"+" "+hacker1.length+" "+"characters.")
}
else if(hacker1.length<hacker2.length){
    console.log("It seems that the navigator has the longest name, it has"+" "+hacker2.length+" "+"characters.")
}
else{
    console.log("Wow, you both have equally long names,"+" "+hacker1.length+" "+"characters!.")
}

// Iteration 3: Loops
//DRIVER'S NAME
let driverNameInCaps='';
for(let i=0;i<hacker1.length;i++){
    driverNameInCaps+=hacker1[i].toUpperCase()+' '.trim();
}
console.log(driverNameInCaps.trim())
//NAVIGATOR'S NAME
let reversedNavigatorName='';
for(let a=hacker2.length-1;a>=0;a--)
{
    reversedNavigatorName+=hacker2[a]
}
console.log(reversedNavigatorName)
//lexicographic order
if(hacker1.localeCompare(hacker2)<0){
    console.log("The driver's name goes first.")
}
else if(hacker1.localeCompare(hacker2)>0){
    console.log("Yo, the navigator goes first definitely.")
}
else{
    console.log("What?! You both have the same name?")
}
//BONUS 1
let text=`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`
//no of words 
let newText=text.split(' ')
let textCount=newText.length
console.log(textCount)

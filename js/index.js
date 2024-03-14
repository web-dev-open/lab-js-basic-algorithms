// Iteration 1: Names and Input
const hacker1="Rutvik";
console.log(`The driver's name is ${hacker1}`)
const hacker2="Rushi";
console.log((`The navigator's name is ${hacker2}`))
// Iteration 2: Conditionals

if (hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else if (hacker1.length<hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}else if (hacker1.length===hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let str=''
for (let i = 0; i < hacker1.length; i++) {
    str=str+`${hacker1[i]} `
  }

  console.log(str.trim().toUpperCase())

let navstr=''
for (let i = hacker2.length; i>= 0; i--) {
    navstr=navstr+hacker2[i]
}
console.log(navstr)

let result=hacker1.localeCompare(hacker2)
if (result===-1){
    console.log('The driver\'s name goes first.')
}else if(result===1){
    console.log('Yo, the navigator goes first definitely.')
}else if(result===0){
    console.log('What?! You both have the same name?')
}

//Bonus 1

const text=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra diam magna, volutpat egestas nunc suscipit id. Nulla facilisi. Suspendisse turpis ipsum, maximus vel consectetur sit amet, posuere ut urna. Maecenas laoreet magna blandit est volutpat, at luctus risus scelerisque. Pellentesque auctor pharetra elit vel tempus. In vulputate libero in turpis pulvinar scelerisque. Cras nunc purus, convallis eget fermentum vitae, varius eget nulla. In facilisis metus dolor. Fusce a rutrum leo, eget posuere velit. Donec mattis nunc ut mauris bibendum imperdiet. Suspendisse egestas massa sed eros egestas, at cursus erat iaculis. Sed aliquam orci vel diam tristique, non imperdiet lectus bibendum. Maecenas aliquet elementum molestie.

Morbi suscipit nec odio vitae accumsan. Etiam bibendum bibendum urna, ut eleifend metus molestie venenatis. Pellentesque maximus rhoncus tincidunt. Curabitur convallis, sem vel imperdiet suscipit, lacus ligula fermentum nisi, viverra fermentum est augue quis elit. Nunc dapibus egestas efficitur. Duis dignissim eleifend laoreet. Fusce sit amet quam risus. Praesent cursus vel ante sed tempor. Suspendisse facilisis ultricies porta. Aliquam ut eros convallis, tincidunt quam eget, ultricies leo. In et vestibulum ex. Nullam a lacus at elit consequat egestas vitae vitae mi.

Curabitur ullamcorper arcu dolor, et tincidunt purus feugiat vitae. Nam fermentum dapibus enim, a dictum augue. Ut at nibh tellus. Vestibulum sodales dolor lectus, ut tempor elit sodales non. Morbi dignissim magna eu tellus rutrum, non viverra leo tincidunt. Donec placerat odio vitae ex rhoncus, at hendrerit quam pharetra. Nulla sit amet massa id purus facilisis gravida nec eu sapien. Quisque mattis molestie malesuada. Curabitur commodo auctor dui, sed elementum sapien mattis sed. Donec iaculis sagittis sodales. Vestibulum non consequat metus. Maecenas imperdiet, lorem sit amet porttitor lacinia, sem lorem facilisis metus, vitae accumsan neque augue eu mauris. Phasellus ultricies arcu et tellus rutrum, sit amet interdum nulla aliquet. Suspendisse rhoncus velit in felis maximus ultricies.`

const wordarr=text.split(' ')
const wordcount=wordarr.length
console.log(wordcount)

let etcount=0

wordarr.forEach(word => {
    if (word==='et'){
        etcount+=1
    }
});

console.log(etcount)
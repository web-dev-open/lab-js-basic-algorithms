// Iteration 1: Names and Input
const hacker1 = "John"
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Billy"
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} 
else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}
else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
// print driver's name spaced and uppercased
let transformedDriverName = ''
for(let i = 0; i < hacker1.length; i++) {
  transformedDriverName += hacker1[i].toUpperCase() 
  if(i < hacker1.length-1) {
    transformedDriverName += ' '
  }
}
console.log(transformedDriverName)

// print navigator's name reversed
let transformedNavigatorName = ''
for(let i = hacker2.length-1; i >= 0; i--) {
  transformedNavigatorName += hacker2[i]
}
console.log(transformedNavigatorName)

// print based on lexicographic order
if (transformedDriverName.charCodeAt(0) > transformedNavigatorName.charCodeAt(0)) {
  console.log('The driver\'s name goes first.')
}
else if(transformedDriverName.charCodeAt(0) < transformedNavigatorName.charCodeAt(0)) {
  console.log('Yo, the navigator goes first definitely.')
}
else {
  console.log('What?! You both have the same name?')
}



// bonus 1
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis efficitur turpis ut scelerisque. Suspendisse feugiat dolor ante, sit amet molestie leo laoreet vel. Donec mattis et risus quis rutrum. Phasellus vestibulum mollis ipsum sed finibus. Vestibulum fermentum, elit sit amet iaculis vehicula, libero urna hendrerit magna, vitae rutrum nisl ligula in felis. Phasellus molestie justo non condimentum dignissim. In posuere egestas purus, a tincidunt turpis eleifend eget. Phasellus ultrices mollis ligula, vitae consectetur tortor sodales nec. Nunc cursus volutpat venenatis. Suspendisse lacinia rhoncus sem, sed maximus turpis hendrerit ut. Duis hendrerit, arcu sollicitudin rutrum pulvinar, ipsum elit porttitor sem, ut lacinia lacus dui non nisl. Nullam at felis ut ipsum dignissim lobortis. Nulla gravida, nibh eu faucibus gravida, erat magna pulvinar diam, semper volutpat orci nulla eu velit. In porta volutpat urna id facilisis. Fusce molestie massa augue, id congue risus varius sit amet.

Cras eu odio in ante pretium ultrices quis in lectus. Vestibulum lacinia felis bibendum erat venenatis, hendrerit elementum sem elementum. Donec hendrerit ac erat quis euismod. Vivamus a ipsum lectus. Duis libero magna, pretium sed luctus vel, maximus lobortis tellus. Vestibulum a nulla sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce fringilla imperdiet urna nec rhoncus. Proin ultrices arcu ut ligula molestie, luctus sodales neque accumsan. Vestibulum vitae condimentum ligula. Pellentesque faucibus nulla vel maximus imperdiet. Vivamus suscipit nisl gravida sem luctus finibus. Duis eleifend ligula a nulla sollicitudin, eu vulputate orci interdum. Nam aliquet massa neque, a suscipit nibh lobortis et.

Quisque odio risus, porttitor et felis vel, porttitor tincidunt nunc. Vestibulum mattis felis orci, eget consectetur nunc consequat et. Pellentesque sollicitudin iaculis massa, sit amet pellentesque lectus suscipit vitae. Mauris egestas, mauris eget elementum dapibus, augue ante pulvinar turpis, iaculis euismod metus metus sed massa. Vestibulum commodo tincidunt tortor, a condimentum mi suscipit ac. Donec blandit dignissim risus quis malesuada. Curabitur eros nunc, porttitor ac fringilla a, suscipit sed est. Sed pulvinar dui eu libero dignissim auctor eget id magna. Sed a rhoncus ipsum. Cras rutrum tortor orci, ac eleifend libero pharetra non. Donec congue, elit quis sodales vehicula, eros justo rhoncus nulla, nec congue metus nisi ut arcu. Phasellus sed ultrices ligula. Suspendisse eget est quis nibh rhoncus cursus.`

// count num of words
const numOfWords = lorem.split(' ').length
console.log(numOfWords)

const filtered = lorem.split(' ').filter(word => word === 'et')
console.log(filtered.length)


// bonus 2 
const phrasesToCheck = [
  'Happy as a Clam',
  'What Am I, Chopped Liver?',
  'Back to Square One',
  'Elephant in the Room',
  'Give a Man a Fish',
  'A man, a plan, a canal, Panama!',
  'Amor, Roma',
  'race car',
  'stack cats'
]

phrasesToCheck.forEach(phrase => {
  const joined = phrase.toLowerCase().replace(/[^a-zA-Z]/g, '')
  const reversed = joined.split('').reverse().join('')
  if(reversed === joined) {
    console.log(`${phrase} is a Palindrome`)
  }
  else {
    console.log(`${phrase} is NOT a Palindrome`)
  }
});
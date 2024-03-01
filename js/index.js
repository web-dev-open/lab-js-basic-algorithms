// Iteration 1: Names and Input
const hacker1="Binod";
const hacker2="Joginder";
console.log("The drivers name is",hacker1);
console.log("The navigators name is",hacker2);
// Iteration 2: Conditionals
x=(hacker1.length);
y=(hacker2.length);
if (x>y)
{console.log("Driver has the most alphabets in his name:",x);}
else if(x<y)
{console.log("Navigator has the most alphabets in his name:",y);}
else 
{console.log("Wow both of you have same alphabets in your name",z);}

// Iteration 3: Loops
a=hacker1.toUpperCase().split("");
b=hacker2.toUpperCase().split("");
u=a.join(" ");
v=b.join(" ");
console.log(u,v);

c=a.reverse();
d=b.reverse();

console.log(c,d);

l=[u,v];
m=l.sort();
console.log(m);

// Iteration 1: Names and Input
hacker1 = "taylor"
print("The driver's name is", hacker1)
hacker2 = "lisa"
print("The navigator's name is", hacker2)


// Iteration 2: Conditionals
if len(hacker1) > len(hacker2):
    print("The driver has the longest name, it has", len(hacker1), "characters.")
elif len(hacker1) < len(hacker2):
    print("It seems that the navigator has the longest name, it has", len(hacker2), "characters.")
else:
    print("Wow, you both have equally long names,", len(hacker1), "characters!")


// Iteration 3: Loops
print(" ".join(hacker1.upper()))
print(hacker2[::-1])
if hacker1 < hacker2:
    print("The driver's name goes first.")
elif hacker1 > hacker2:
    print("Yo, the navigator goes first definitely.")
else:
    print("What?! You both have the same name?")


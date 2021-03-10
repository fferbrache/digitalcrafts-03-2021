# Assignment 2 - Even Odd
# Instructions: Write an app which asks a user for an input and then displays a message indicatin whether the number is even or odd

number = input("Please input a number (ex. 2)")
if (int(number) % 2 == 0):
    print("The number is even.")
else:
    print("The number is odd")

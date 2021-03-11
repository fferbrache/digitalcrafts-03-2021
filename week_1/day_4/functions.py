# Type of a function
# built in function
# print("")
# len(2)

# print(1 + 3)
# defining a function
# the word "def", the name of the function, parenthesis (), then a colon:
# in the body of the function, you need a return statement


# def printMessage():
#     return print("haiiiiii")


# def add(number1, number2):
#     return number1 + number2


# def multiply(number1, number2):
#     return number1 * number2


# def subtract(number1, number2):
#     return number1 - number2


# def division(number1, number2):
#     return number1 / number2


# printMessage()
# quitKey = ""
# Your assignment to redo your calculator
# getFirstNumber = input("Gimme a number")
# getSecondNumber = input("Gimme a second number")
# getOperand = input("Gimme an Operand")
# while (quitKey == ""):


# if (getOperand == "/"):
#     division(getFirstNumber, getSecondNumber)

# print(add(2, 3))

# def addition(num1, num2):
#     adding = num1 + num2
#     return adding


# def subtraction(num1, num2):
#     subtracting = num1 - num2
#     return subtracting


# def multiplication(num1, num2):
#     multiplying = num1 * num2
#     return multiplying


# def division(num1, num2):
#     dividing = num1 / num2
#     return dividing


# print(addition(2, 5))
# print(subtraction(9, 2))
# print(multiplication(1, 7))
# print(division(14, 2))


# length of string
# str = input("Please enter a string")


# def length_of_string(str):
#     str_length = len(str)
#     return str_length


# print(length_of_string(str))

# SCOPE
# SCOPE is about having access to certain things in your program
# Global scope, means anyone can access this variable, function, from anywhere inside your program
# Local scope, or LEXICAL SCOPE, means you only have access to certain variables INSIDE of a specific place

# Global variable outside of the function
askUsertoType = input("Type in a word: ")
askUsertoTypeAgain = input("Type in another word: ")


def printWhatUserTyped(firstMessageTyped, sedondMessageTyped):
    # Local Variable inside of the function
    combinedMessage = firstMessageTyped + " " + sedondMessageTyped
    return print(combinedMessage)


printWhatUserTyped(askUsertoType, askUsertoTypeAgain)

# Define Functions
def addition(num1, num2):
    return num1 + num2


def subtraction(num1, num2):
    return num1 - num2


def multiplication(num1, num2):
    return num1 * num2


def division(num1, num2):
    return num1 / num2


num1 = input("Please input a number")
sign = input("Please enter an operand (ex. +, -, *, /)")
num2 = input("Please input another number")

# numbers = []


def calculate(num1, num2):
    if (sign == "+"):
        print(addition(int(num1), int(num2)))
    elif (sign == "-"):
        print(subtraction(int(num1), int(num2)))
    elif (sign == "*"):
        print(multiplication(int(num1), int(num2)))
    elif (sign == "/"):
        print(division(int(num1), int(num2)))
    elif (sign == "q"):
        exit()


calculate(num1, num2)

# To quit I would append the numbers to an empty array and run a for loop. If the input is a 'q' I would break out of the loop or exit()

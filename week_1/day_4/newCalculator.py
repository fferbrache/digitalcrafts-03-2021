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


def calculate(num1, num2):
    if (sign == "+"):
        print(addition(int(num1), int(num2)))
    elif (sign == "-"):
        print(subtraction(int(num1), int(num2)))
    elif (sign == "*"):
        print(multiplication(int(num1), int(num2)))
    elif (sign == "/"):
        print(division(int(num1), int(num2)))


calculate(num1, num2)
# elif (sign == 'q'):
#     quit()

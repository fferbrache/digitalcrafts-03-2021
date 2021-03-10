# Assignment 1 - Calculator
# In this assignment you are going to build a calculator. You are going to take three inputs from the user
# Input 1 - Represents the first number
# Input 2 - Represents the operand (+, -, *, /)
# Input 3 - Represents the second number
# Based on the operand you are going to perform the math operation and print the result to the terminal
# Make sure each math operation in a separate function
import operator
allowed_operators = {
    "+": operator.add,
    "-": operator.sub,
    "*": operator.mul,
    "/": operator.truediv
}
# Input 1
first_num = input("Please input a number (ex: 2)")

# Input 2
symbol = input("Please enter the operand (ex. +, -, *, /)")

# Input 3
second_num = input("Please input a second whole number (ex: 2)")

result = allowed_operators[symbol](float(first_num), float(second_num))
print(result)

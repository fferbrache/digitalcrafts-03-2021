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
length_first_num = len(first_num)
while (length_first_num < 1):
    first_num = input("Please input a number (ex: 2)")
    length_first_num = len(first_num)

# Input 2
symbol = input("Please enter the operand (ex. +, -, *, /)")
length_symbol = len(symbol)
while (length_symbol < 1):
    symbol = input("Please enter the operand (ex. +, -, *, /)")
    length_symbol = len(symbol)

# Input 3
second_num = input("Please input a second whole number (ex: 2)")
length_second_num = len(second_num)
while (length_second_num < 1):
    second_num = input("Please input a second whole number (ex: 2)")
    length_second_num = len(second_num)

result = allowed_operators[symbol](float(first_num), float(second_num))
print(result)

print(divmod(19, 5))

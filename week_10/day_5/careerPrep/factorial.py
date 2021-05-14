# Write a function that accepts a number as an argument. The function should then return the factorial of that number. A factorial of a number means to multiply all whole numbers between that number in one. Example: 5! => 5 * 4 * 3 * 2 * 1 = 120.

# Pseudocode
# Need to define a function that takes a number as an input
# Function returns the factorial
# Need a for loop or while loop to while num is at a certain condition
# If num > 1, multiply by n - 1
# If num = 0, returns 1, if num = 1, returns 1


def factorial(num):
    result = 1
    if num <= 1:
        print(1)
    else:
        for i in range(1, num + 1):
            result = result*i
    return result


print(factorial(5))

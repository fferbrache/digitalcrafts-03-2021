nameOfUser = input("What is your name?")
lengthOfUserName = len(nameOfUser)

while (lengthOfUserName < 1):
    nameOfUser = input("What is your name?")

print("The user name is %s" % (nameOfUser))

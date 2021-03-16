# 1
# Create a User class, that has the ability to print the users name,
# the ability to print the users age
# Create a TempUser class, that has the ability to only print his name

# create a function that asks you to give the user a name, and give the user an age, and will then create the user for you, and print it to the screen. The user will have a choice to either be a temp user or a user

# 2
# Create a building class
# building class will height
# capacity
# sqft
# commercial or residential SKIP FOR NOW
# commercial
# Ask the user to create a building
# they will enter in height
# capacity (people)
# sqft

# 5 instances of a building
# print out the specs of the building everytime a building is made
# print statement needs to be a method


class User:
    def __init__(self, name, age):
        self.name = name
        self.age = age


class TempUser:
    def __init__(self, name):
        self.name = name


def userCreation():
    new_user = ""
    userClass = input(
        "What is your class? Choose exactly ((u)User, (t)TempUser)")

    if userClass == "u":
        userName = input("What is your name?")
        userAge = input("What is your age?")
        new_user = User(userName, userAge)
        print(f"{new_user.name} is {new_user.age} and is a permanent user.")
    elif userClass == "t":
        userName = input("What is your name?")
        new_user = TempUser(userName)
        new_user = print(f"{new_user.name} is a temporary user.")
    else:
        print("Please try again")
    return new_user


new_user = userCreation()

# print(new_user.userName, new_user.userAge)
frankie = User("frankie", 31)
# print("username:", frankie.name)
# print("age:", frankie.age)


joe = TempUser("joe")
# print("temp_user:", joe.name)

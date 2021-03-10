# Take the users first name
first_name_of_user = input("What is your first name?")
# Store the users first name into a number value that we can use
length_of_first_name_of_user = len(first_name_of_user)
while(length_of_first_name_of_user < 1):
    first_name_of_user = input("What is your first name?")
    length_of_first_name_of_user = len(first_name_of_user)

lastNameOfUser = input("What is your last name?")

length_of_last_name_of_user = len(lastNameOfUser)
while(length_of_last_name_of_user < 1):
    lastNameOfUser = input("What is your last name?")
    length_of_last_name_of_user = len(lastNameOfUser)
print("The user name is %s %s" % (first_name_of_user, lastNameOfUser))

# print("Users name is ", first_name_of_user)
# If statements. Do something if a certain condition happens or doesn't happen
# Underneath the if statement, you need to indent your code, to let the if statement know what code belongs to it
# If statements have if _your condition:
# else: code goes below it

# if length_of_first_name_of_user > 0:
#     # if this username length is greater than 0, aka it returns TRUE, we do the code in her
#     nameOfFriend = input("What is your friends name?")
#     print("Your friends name is", nameOfFriend)
# else:
#     print("Please enter at least one letter..literally one letter")

# # While loop
# # A condition will have to be True, then your loop will keep running
# while (length_of_first_name_of_user) < 0:
#     first_name_of_user = input("What is your first name?")
#     length_of_first_name_of_user = len(first_name_of_user)

# # Take the users last name
# lastNameOfUser = input("What is your last name?")
# # Store the users last name into a number value that we can use
# length_of_last_name_of_user = len(lastNameOfUser)


# print("This is the length of the users first name is ",
#       length_of_first_name_of_user)
# print("This is the length of the users last name is ", length_of_last_name_of_user)
# print("The user name is %s %s " % (first_name_of_user, lastNameOfUser))
# print("Hello %s %s, welcome to python." % (first_name_of_user, lastNameOfUser))

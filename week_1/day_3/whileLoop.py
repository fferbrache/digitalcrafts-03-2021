# Enter your first name
first_name = input("What is your first name?")
length_first_name = len(first_name)
while (length_first_name < 1):
    first_name = input("What is your first name?")
    length_first_name = len(first_name)

# Enter your last name
last_name = input("What is your last name?")
length_last_name = len(last_name)
while (length_last_name < 1):
    last_name = input("What is your last name?")
    length_last_name = len(first_name)

# Prints your full name
print("Your name is %s %s" % (first_name, last_name))

# Enter your friend's first name
friends_first_name = input("What is your friend's first name?")
length_friends_first_name = len(friends_first_name)
while (length_friends_first_name < 1):
    friends_first_name = input("What is your friend's first name?")
    length_friends_first_name = len(friends_first_name)

# Enter your friend's last name
friends_last_name = input("What is your friend's last name?")
length_friends_last_name = len(friends_last_name)
while (length_friends_last_name < 1):
    friends_last_name = input("What is your friend's last name?")
    length_friends_last_name = len(friends_last_name)

# Final print statement
print("%s %s is friends with %s %s" %
      (first_name, last_name, friends_first_name, friends_last_name))

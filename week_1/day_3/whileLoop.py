first_name = input("What is your first name?")
length_first_name = len(first_name)
while(length_first_name < 1):
    first_name = input("What is your first name?")

last_name = input("What is your last name?")
length_last_name = len(last_name)
while(length_last_name < 1):
    last_name = input("What is your last name?")

print("The user name is %s %s" % (first_name, last_name))

friends_first_name = input("What is your friend's first name?")
friends_last_name = input("What is your friend's last name?")
print("%s %s is friends with %s %s" %
      (first_name, last_name, friends_first_name, friends_last_name))

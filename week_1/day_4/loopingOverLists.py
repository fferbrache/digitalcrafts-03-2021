pets = ["doggo", "cat", "iguana", "pikachu"]
otherPets = ["mouse", "bird", "rabbit"]
people = ["bob", "sally", "will"]

cars = [{"name": "M3", "year": "2016", "color": "white"},
        {"name": "F-150", "year": "2014", "color": "blue"}]
# you can use len to find the length of the list
# print(len(pets))

# Loop over a list
# What stops a WHILE loop? A specific condition being met
# index = 0
# while index < len(pets):
#     pet = pets[index]
#     print("What pet are you? I'm a %s" % pet)
#     index += 1
# index = index + 1, same as above

# For loop, foreign, for...in
# count = 0
# How do I write a for LOOP? Write for, write the singular name of the lists you are looping over, write of, write the name of the list
# for pet in otherPets:
#     print(pet)
#     print(count)
#     count += 1

# for person in people:
#     print(person)
#     print(count)
#     count += 1

# How do we combine LISTS?
combinedLists = pets + otherPets
# print(combinedLists)

# How do we modify a LIST?
pets[0] = "otter"
print(pets)

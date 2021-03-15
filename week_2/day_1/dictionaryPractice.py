digitalCraftsStudent = {
    "name": "frankie",
    "city": "hotlanta",
    "computer": ["mac os big sur"],
}
# print out your computer information in the terminal

# add a platform, ps5, pc, xbox 1, switch, add your skill leverl ("noob", "not noob", "pwner")
gamer = {
    "platform": "xbox 1",
    "gamingHours": [{"weekday": "9-5"}, {"weekends": "anytime"}],
    "skill": 'noob'
}
# print on the terminal, what time would you game?
# 1. print out a list of engine choices (the whole list)
# 2. print out the horsepower values only (all of them)
# 3. check to see if the value "trim" exists in the car dictionary
# 4. add a new key to the dictionary called "colors" which will be a list of all possible colors (use 4 color strigs)
# 5 find an image and put the url into https://bitly.com/, and paste shortened url into the "image" value
car = {
    "model": "",
    "image": "http://bit.ly/3qTUNKy",
    "year": "",
    "engineChoices": [{"v4": {"horsepower": 230}}, {"v6": {"horsepower": 300}}, {"v8": {"horsepower": 400}}, {"v12": {"horsepower": 900}}],
    "colors": ['red', 'black', 'blue', 'gray'],
}

# print(digitalCraftsStudent["computer"][0])
# print("What time would you game?")
# print(gamer["gamingHours"][1]["weekends"])
# 1
print(car["engineChoices"])

# 2
print(car["engineChoices"][0]["v4"]["horsepower"])
print(car["engineChoices"][1]["v6"]["horsepower"])
print(car["engineChoices"][2]["v8"]["horsepower"])
print(car["engineChoices"][3]["v12"]["horsepower"])

# 3
if ("trim" in car):
    print(True)
else:
    print(False)

# 4
# Added "colors"

# 5
# Added shortened url to "image" value

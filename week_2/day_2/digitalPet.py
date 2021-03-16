petSpider = {
    "name": "peter",
    "strength": 20,
    "defense": 10,
    "hp": 100
}

otherPetSpider = {
    "name": "mercado",
    "strength": 25,
    "defense": 20,
    "hp": 90

}

# fed the spider


def feedSpider():
    print("Omm nomm nom nom")
    petSpider["strength"] += 5
    petSpider["hp"] += 5


def playedWithSpider():
    print("He is getting angry")
    petSpider["defense"] += 5


def howIsSpiderDoing():
    print("How you doing Spider?")
    print(petSpider)


def welcomeMessage():
    message = int(input("""
    1. Feed Spider
    2. Play with Spider (he gets angry)
    3. Check on Spider
    4. Stare
    5. Quit
    """))

    return message


choice = ""
while choice != 5:
    choice = welcomeMessage()
    if (choice == 1):
        feedSpider()
    elif (choice == 2):
        playedWithSpider()
    elif (choice == 3):
        howIsSpiderDoing()
    elif (choice == 4):
        print("Staring.....")
    else:
        pass
    # how to stop the loop
    # what about an if else? if elif

# print(petSpider)
# feedPeter()
# print(petSpider)

class Spider:
    def __init__(self, name, strength, defense, hp):
        self.name = name
        self.strength = strength
        self.defense = defense
        self.hp = hp
    pass


class OmegaSpider:
    def __init__(self, name, strength, defense, hp, size):
        self.name = name
        self.strength = strength
        self.defense = defense
        self.hp = hp
        self.size = size
    pass


# Dot notation
peter = Spider("Peter", 20, 10, 100)
mercado = Spider("Mercado", 25, 20, 90)
billybob = Spider("Billybob", 0, 0, 10)
beelzebub = OmegaSpider("Beelzebub", 1000, 200, 1000, "10 miles")
print(peter.name)
print(peter.strength)
print(peter.defense)
print(peter.hp)
print(mercado.name)
print(mercado.strength)
print(mercado.defense)
print(mercado.hp)
print(billybob.name)
print(billybob.strength)
print(billybob.defense)
print(billybob.hp)
print(beelzebub.name)
print(beelzebub.size)
# mercado = Spider()

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

# KEEPING YOURSELF ORGANIZED
# define global functions and variables first at the top of your program
# define Classes next and any uniqur methods inside of them
# then define your while loop if you need the user to keep doing task until a certain condition in met (remember your condition needs to be global, and needs to be re-assigned insid your while loop)
class Spider:
    def __init__(self, name, strength, defense, hp):
        self.name = name
        self.strength = strength
        self.defense = defense
        self.hp = hp

    def feedSpider(self):
        print("Omm nomm nom nom")
        self.strength += 5
        self.hp += 5

    def playedWithSpider(self):
        print("He is getting angry")
        self.defense += 5

    def smile(self):
        print(f"{self.name} smiled")

    # def howIsSpiderDoing(self):
    #     print("How you doing Spider?")
    #     print(petSpider)


class OmegaSpider:
    def __init__(self, name, strength, defense, hp, size):
        self.name = name
        self.strength = strength
        self.defense = defense
        self.hp = hp
        self.size = size

    def smileSmileSmile(self):
        print(f"{self.name} smiled")
    # pass


# Dot notation refers us to using the . and referencing something
# that exist on the class
peter = Spider("Peter", 20, 10, 100)
print("peters starting strength", peter.strength)
print("peters starting defense", peter.defense)
peter.feedSpider()
peter.playedWithSpider()
peter.smile()
print("peters ending strength", peter.strength)
print("peters ending defense", peter.defense)

venom = Spider("Venom", 30, 20, 200)
venom.smile()
carnage = OmegaSpider("Carnage", 1000, 200, 1000, "10 miles")
carnage.smileSmileSmile()
# mercado = Spider("Mercado", 25, 20, 90)
# print("mercado starting strength", mercado.strength)
# peter.feedSpider()
# print("mercado ending strength", mercado.strength)
# billybob = Spider("Billybob", 0, 0, 10)
# beelzebub = OmegaSpider("Beelzebub", 1000, 200, 1000, "10 miles")


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

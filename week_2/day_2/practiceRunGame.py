# You have two characters, a Hero and a Goblin
# Your goal is to let them fight, whoever wins, will be printed out
# in a victory message (fancy way of saying a function that prints)
# whoever is defeated can be printed out in that message as well

# Hero
# name
# attack
# defense
# hp

# Goblin
# name
# attack
# defense
# hp
# clan


class Hero:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp
        self.characterClass = "Hero"

    def attack(self):
        self.hp -= 5


class Goblin:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp
        self.charClass = "Goblin"

    def takeDamage(self):
        self.hp -= 5


class Knight:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp
        self.charClass = "Knight"


def characterAttack(char1, char2):
    print(f"{char1.name} atttacks {char2.name}")
    char2.takeDamage()
    print(f"{char2.name} takes 5 damage")
    print(f"{char2.name} has{char2.hp} left")


def victoryMessage(hero, goblin):
    print(f"{hero.name} is the victor and they have slain {goblin.name}")


def characterCreation():
    charName = input("What is your name")
    charClass = input(
        "What is your class? Choose exactly ((k)Knight, (g)Goblin, (h)Hero)")

    if charClass == "k":
        character = Knight(charName, 10)
    elif charClass == "g":
        character = Goblin(charName, 10)
    elif charClass == "h":
        character = Hero(charName, 10)
    elif charClass == "g":
        character = Goblin(charName, 10)
    else:
        print("Please follow my rules and enter a valid choice.")


bob = Goblin("Bob", 10)
joe = Goblin("Joe", 10)
philip = Hero("Philip", 10)
whitney = Hero("Whitney", 10)
randi = Hero("Randi", 10)
randy = Goblin("Randy", 10)
carlo = Knight("Carlo", 10)

# print("the name of this character", bob.name)
# print("the name of this character", philip.name)
# print("the name of this character", whitney.name)
# print("the name of this character", randi.name)
# print("the name of this character", randy.name)
# print("the name of this character", carlo.name)


# randi to punch randy, simulating your character attacking another character

# you take 5 damage to your health
# I ask the user to
# I give health values
#

character = characterCreation()
print(character.name, character.hp)
# while character.hp > 0:
#     HeroAttacksGoblin(randi, randy)
#     if randy.hp == 0:
#         victoryMessage(randi, randy)

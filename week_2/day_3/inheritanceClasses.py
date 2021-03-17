class Currency:
    def __init__(self, name, nation, price, quantity):
        self.name = name
        self.nation = nation
        self.price = price
        self.quantity = quantity

    def printCurrency(self):
        print(
            f"""NATION: {self.nation}
            \nNAME: {self.name}
            \nPRICE: {self.price}
            \nQUANTITY: {self.quantity}\n
            """)

    def addQuantity(self, amount):
        self.quantity += amount


yen = Currency("Yen", "Japan", 20, 10)
# yen.printCurrency()
# yen.addQuantity(5)

usDollar = Currency("Dollar", "USA", 1, 10)
# usDollar.printCurrency()
# usDollar.addQuantity(5)

swedishKrona = Currency("Krona", "Sweden", 1, 10)
# swedishKrona.printCurrency()
# swedishKrona.addQuantity(5)
# print(swedishKrona.quantity)


class CryptoCurrency(Currency):
    def __init__(self, name, nation, price, quantity, volatility):
        self.name = name
        self.nation = nation
        self.price = price
        self.quantity = quantity
        self.volatility = volatility

    def go_to_de_moooon(self):
        self.price = self.price * 1000
        print(self.price)

    def printCurrency(self):
        print(
            f"""NATION: 🐶
            \nNAME: {self.name}
            \nPRICE: {self.price}
            \nQUANTITY: {self.quantity}
            \nVOLATILITY: {self.volatility}
            \n
            """)


class ScamCurrency(CryptoCurrency):
    def sendYourPersonalDataThroughALeak(self):
        print("You got scammed")


doge = CryptoCurrency("DogeCoin", "Doge Nation", 5, 1000000, "very")
xvg = ScamCurrency("XVG", "SuperDuperSecure Money", 0, 10, "definitely bad")

# doge.printCurrency()
doge.go_to_de_moooon()
doge.printCurrency()

xvg.printCurrency()
xvg.go_to_de_moooon()
xvg.sendYourPersonalDataThroughALeak()

usDollar.printCurrency()

# I want to add a specifice quantity to the specifice currency of my choice

# quantity = quantity+quantity
# print(yen.price)
# print("This currency is %s, it is %s, from %s" %
#       (yen.name, yen.price, yen.nation))
# print(f"This currency is a {yen.name}, it is {yen.price} from {yen.nation}")

# print(
#     f"This currency is a {usDollar.name}, it is {usDollar.price} from {usDollar.nation}")

# Dictionary
# dictionaryName[""]

# List
# listName[0]

# This is for a Class instance
# classNameThatWeStoreTheInstanceIn.whateverValue

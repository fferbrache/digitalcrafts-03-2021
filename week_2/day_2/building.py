# 2
# Create a building class
# building class will height
# capacity
# sqft
# commercial or residential SKIP FOR NOW
# commercial
# Ask the user to create a building
# they will enter in height
# capacity (people)
# sqft

# 5 instances of a building
# print out the specs of the building everytime a building is made
# print statement needs to be a method

class Building:
    def __init__(self, height, capacity, sqft):
        self.height = height
        self.capacity = capacity
        self.sqft = sqft

    def specs()


def createBuilding():
    counter = 1
    while counter < 6:
        print("Please enter building specs")
        height = input("What is the height?")
        capacity = input("What is the capacity (people)?")
        sqft = input("What is the sqft?")
        new_building = Building(height, capacity, sqft)
        print(
            f"Building {counter} Specs: {new_building.height}, {new_building.capacity}, {new_building.sqft}")
        counter += 1


createBuilding()

# store dictionaries in a list
# make dictionary(ies)
# delete something on a list
# add something to a list
# view everything on the list
# CRD (No update from the acronym CRUD Create, Read, Update, Delete)
# Have a way to quit
# can't stop won't stop until Q
# MAKE THEM IN FUNCTIONS

toDoList = []


def welcomeMessage():
    message = """
Welcome to the TODO app. Let's have some fun.

Press 1 to add task

Press 2 to delete task

Press 3 to view all tasks

Press q to quit
    """

    return print(message)


def addFunction():
    toDoDictionary = {}
    taskToAdd = input("What task would you like to add?")
    priorityOfTask = input("What priority is this? (high, medium, low)")

    # How do we add a "title" key and a "priority" value
    toDoDictionary["title"] = taskToAdd
    toDoDictionary["priority"] = priorityOfTask
    toDoList.append(toDoDictionary)
    print(toDoList)
    return print("I added * %s * to your list" % taskToAdd)


def delFunction():
    return


def viewFunction():
    return


def determineTask(choice):
    whatTheyChose = ""
    if (choice == "1"):
        whatTheyChose = addFunction()
    elif (choice == "2"):
        whatTheyChose = ""

    else:
        print("Bad key")

    # elif (userChoices == "3"):

    # elif (userChoices == "q"):

    # else:

    whatTheyChose = choice
    return whatTheyChose


choice = ""
while (choice != "q"):
    welcomeMessage()
    userChoices = input("What would you like to do?")
    outcome = determineTask(userChoices)
    choice = outcome


# In this assignment you are going to create a TODO app. When the app starts it should present user with the following menu:

# Press 1 to add task

# Press 2 to delete task

# Press 3 to view all tasks

# Press q to quit

# The user should only be allowed to quit when they press 'q'.

# Add Task:

# Ask the user for the 'title' and 'priority' of the task. Priority can be high, medium and low.

# Delete Task:

# Show user all the tasks along with the index number of each task. User can then enter the index number of the task to delete the task.

# View all tasks:

# Allow the user to view all the tasks in the following format:

# 1 - Wash the car - high

# 2 - Mow the lawn - low

# Store each task in a dictionary and use 'title' and 'priority' as keys of the dictionary.
# Store each dictionary inside an array. Array will represent list of tasks.

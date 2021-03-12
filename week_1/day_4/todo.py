print("Welcome to the TODO app. Let's have some fun")
print("""
Press 1 to add task

Press 2 to delete task

Press 3 to view all tasks

Press q to quit
""")

menu = input("Enter a number between 1-3 or 'q'")
task_list = []

if (menu == '1'):
    # add task
    new_task = input(
        "Enter a new task along with priority (ex. Wash the car - high)")
    task_list.append(new_task)
elif (menu == '2'):
    # delete task
elif (menu == '3'):
    # view tasks
elif (menu == 'q'):
    exit()


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

# Delete Task
# for task in tasks:
#     if something == something:
#         something.remove(task)

# # Add task
# for task in tasks:
#     if something == something:
#         something.append(task)

# View tasks
# print(something)

# Quit
# exit()

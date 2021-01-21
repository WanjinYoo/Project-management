Database entities

Users
- id
- name
- position
- department
- is_project_manager?

Tickets
- id
- project_id (foreign key)
- user_id (foreign key)
- Deadline
- images
- Description
- Assign_to
- status_id
- timestamp

Status
- id
- name (pending,submitted,completed,rejected)

Project
- id
- name
- product
- Description
- images
- deadline
- start date

project_users
- id
- project_id
- user_id

### Pages ###

## How a user interact with the app ##
Goes to Welcome page where users can type their id and password.
If logged in, user will go to the user landing page

# On the landing page # 
- A list of the projects that a user is currently working on.
- Clock
- Upcoming due dates for projects should be placed on the top
- Ability to filter the project list
- Tiles that shows the overdue tickets number and upcoming tickets number.
    
# Dashboard of the specific project #
- Projected Launch date that inludes that deadline
- status
- Progress bar
- workload (graph)
- project bulleting board (announcements)
- upcoming deadlines for their tickets
- Overdue tickets
# Tickets page for a user #
- A tab that displays all the tickets that have been assigned to ther user with the status.
- A tab that displays submitted/pedning/recent tickets that have been assigned to ther user.
- On the pendding tickets' tab, there will overdue/upcoming(1day) warnings

# Ticket specific page #
- display the properties of the ticket ex. name issuer id .
- input box to enter the pull_request_number for the ticket (pending -> submmited)
If not, stay on the same page with the message 
- Timeline
- can leave comments

# Calender #
- tickets' deadline
- When user clicks on the ticket on the calender, it takes users to the ticket specific page.
- project's deadline
# Progress #
- Lets discuss later
# Setting #
- Lets discuss later
# Report #
- Generate a report based on the given period (2015/3-2016/3)


## How a manger interact with the app ##
Goes to Welcome page where users can type their id and password.
If logged in, user will go to the user landing page

# On the landing page # 
- A list of the projects that a user is currently working on.
- Clock
- Upcoming due dates for projects should be placed on the top
- Ability to filter the project list
- Tiles that shows the overdue tickets number and upcoming tickets number.

# Dashboard of the specific project (Manager) #
- Projected Launch date that inludes that deadline
- status
- Progress bar
- workload (graph)
- ability to create a new announcement on the board.
- upcoming tickets from all the tickets that belongs to the project.
- Overdue tickets from all the tickets.

# Ticket of the specific project (Manager) #
- Create ticket
- see All/Pending/Overdue/Upcoming tickets that are specific to the project

# Ticket specific page (Manager)#
- Approve button/reject button Ticket
- Manager's (rejection message) (modal) = comment.
- can change the deadline
- Timeline

# Calender #
- tickets' deadline
- When user clicks on the ticket on the calender, it takes users to the ticket specific page.
- project's deadline

# Progress #
- Lets discuss later
# Setting #
- Lets discuss later
# Report #
- Generate a report based on the given period (2015/3-2016/3)







Endpoints










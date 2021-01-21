Download PHP, PHP laravel and NodeJs

Clone it -> Run npm install -> Run npm run dev -> Run php artisan serve.

Story:

As an Admin(project manager) 
Has ability to create a project
issues tickets to Employees with problems,deadline, and priority levels
dispatch a ticket to employees
can approve/reject/remove the ticket.
can reassign a ticket to another employee.

Employees
can see the ticket that has been assigned to them
provide a solution to the ticket by making a pull request. uploading their code/images
Make comments with timestamp for more clarification.

Feature 

Graphs on dashboard (new/open tickets) 
Login
Establish a chat room between an employee and project manager.(google hangout)
Deadline
Pending -> submitted -> approved/rejected by an admin

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
Goes to Welcome page where users can type their id and password
If logged in, user will go to the user landing page

# On the landing page # 
- A list of the projects that a user is currently working on.
- Clock
- Upcoming due dates for projects should be placed on the top
- Ability to filter the project list

# Dashboard of the specific project #
- Projected Launch date that inludes that deadline
- status
- Progress bar
- workload (graph)
- upcoming deadlines for their tickets
- Overdue tickets
# Tickets page for a user #
- A tab that displays all the tickets that have been assigned to ther user with the status.
- A tab that displays submitted/pedning/recent tickets that have been assigned to ther user.
- On the pendding tickets' tab, there will overdue/upcoming(1day) warnings

# Ticket specific page #
- display the properties of the ticket ex. name issuer id ....
- input box to enter the pull_request_number for the ticket (pending -> submmited)
If not, stay on the same page with the message 
# Calender #
- tickets' deadline
- When user clicks on the ticket on the calender, it takes users to the ticket specific page.
- project's deadline



--How a manger interact with the app

Endpoints










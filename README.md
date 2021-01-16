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

##Pages##

Login







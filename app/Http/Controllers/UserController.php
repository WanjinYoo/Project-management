<?php

namespace App\Http\Controllers;
use App\User;
use App\Project;
use App\UsersProject;
use App\PriorityName;
use App\Ticket;
use App\StatusName;
use Illuminate\Http\Request;
use Validator;
use Auth;

class UserController extends Controller
{

    public function verify(Request $request)
    {

        $user = User::where('email','=',$request->input('email'))
                ->where('password','=',$request->input('password'))
                ->first();
        if($user) {
            Auth::login($user);
            return $user->id;
        }
        else {
            return null;
        }

     }
    public function get_projects($id)
    {
        $projects = UsersProject::where('user_id','=',$id)
                        ->join('projects', 'projects.id', '=', 'users_projects.project_id')
                        ->join('status_names', 'status_names.id', '=', 'projects.status_id')
<<<<<<< HEAD
                        ->select('projects.name as projectName', 'status_names.name as status', 'projects.start_date as startdate', 'projects.deadline as deadline','users_projects.isManager as Manager')
=======
                        ->select('users_projects.*', 'projects.*', 'users_projects.id as users_projects_id', 'status_names.name as status_name', 'status_names.description as status_description')
>>>>>>> 47998faee67b0565e62c5eeea7bad2182a1f98ad
                        -> get();
        return $projects;
    }

    public function get_tickets($id)
    {
        $ticketInfo = Ticket::where('receiver_id','=',$id)
                        ->join('projects', 'projects.id', '=', 'tickets.project_id')
                        ->join('status_names', 'status_names.id', '=', 'tickets.status_id')
                        ->join('priority_names', 'priority_names.id', '=', 'tickets.priority_level')
                        ->select('tickets.*', 'projects.name as project_name','status_names.name as status_name', 'status_names.description as status_description', 'priority_names.name as priority_name', 'priority_names.description as priority_description')
                        -> get();

        return $ticketInfo;
    }
 }

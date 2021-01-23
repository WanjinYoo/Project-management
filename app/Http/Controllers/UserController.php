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

    public function show($id)
    {
        $user = User::where('id','=',$id)
                        ->select('users.*')
                        -> first();
        return $user;
    }


    public function get_projects($id)
    {
        $projects = UsersProject::where('user_id','=',$id)
                        ->join('projects', 'projects.id', '=', 'users_projects.project_id')
                        ->join('status_names', 'status_names.id', '=', 'projects.status_id')
                        ->select('users_projects.*', 'projects.*', 'users_projects.id as users_projects_id', 'status_names.name as status_name', 'status_names.description as status_description')
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

    public function update(Request $request,$id)
    {
        if (User::where('id', $id)->exists()) {
            $user = User::find($id);

            $user->first_name = is_null($request->name) ? $user->first_name : $user->first_name;
            $user->last_name = is_null($request->last_name) ? $user->last_name : $user->last_name;
            $user->email = is_null($request->email) ? $user->email : $user->email;
            $user->password = is_null($request->password) ? $user->password : $user->password;
            $user->telephone = is_null($request->telephone) ? $user->telephone : $user->telephone;
            $user->slack_account = is_null($request->slack_account) ? $user->slack_account : $user->slack_account;
            $user->responds_to = is_null($request->responds_to) ? $user->responds_to : $user->responds_to;
            $user->team = is_null($request->team) ? $user->team : $user->team;
            $user->position = is_null($request->position) ? $user->position : $user->position;
            $user->save();

            return response()->json([
              "message" => "records updated successfully"
            ], 200);
          } else {
            return response()->json([
              "message" => "User not found"
            ], 404);
          };
    }
}

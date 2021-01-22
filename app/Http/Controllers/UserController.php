<?php

namespace App\Http\Controllers;
use App\User;
use App\Project;
use App\UsersProject;
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
                        -> get();
        return $projects;
    }
 }

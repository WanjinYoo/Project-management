<?php

namespace App\Http\Controllers;
use App\Project;
use App\User;
use App\Ticket;
use App\StatusName;
use Auth;

use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::all();
        return $projects->toJSON();
    }
    public function store(Request $request)
    {
        print_r($request->input('email'));
        // $tickets = new Ticket;
        // $tickets->description = $request->input('description');
        // $tickets->save();
    }
    public function complete(Reqeust $requst,$id) // post request
    {
        $ticket = Project::where('id','=',$id);
        $ticket->pull_request_number = $request->input('pull_request_number');
        $ticket->save();
        return redirect('/ticket');
    }


    public function delete($id) // get request
    {
        $res = Project::where('id','=',$id)
                ->delete();

    }
    public function show($id)
    {
        $projectInfo = Project::where('id','=',$id)
                        -> first();
         $status = StatusName::find($projectInfo->status_id);
         $projectInfo->status_name = $status->name;
         $projectInfo->status_description = $status->description;

         return $projectInfo;

    }

    public function tickets_per_project($id)
    {
        $tickets = Ticket::where('project_id','=',$id)
                    ->join('projects', 'projects.id', '=', 'tickets.project_id')
                    ->join('status_names', 'status_names.id', '=', 'tickets.status_id')
                    ->join('priority_names', 'priority_names.id', '=', 'tickets.priority_level')
                    ->select('tickets.*', 'projects.name as project_name','status_names.name as status_name', 'status_names.description as status_description', 'priority_names.name as priority_name', 'priority_names.description as priority_description')
                    -> get();
        return $tickets;
    }

    public function tickets_project_user($id)
    {
        $user = Auth::user();
        print_r($user);
        $tickets = Ticket::where('project_id','=',$id)
                    ->where('receiver_id','=',$user->id)
                    ->join('projects', 'projects.id', '=', 'tickets.project_id')
                    ->join('status_names', 'status_names.id', '=', 'tickets.status_id')
                    ->join('priority_names', 'priority_names.id', '=', 'tickets.priority_level')
                    ->select('tickets.*', 'projects.name as project_name','status_names.name as status_name', 'status_names.description as status_description', 'priority_names.name as priority_name', 'priority_names.description as priority_description')
                    -> get();
        return $tickets;
    }

    public function add_member(Request $request,$id) // post request
    {
        $ticket = Project::where('id','=',$id);
        $ticket->pull_request_number = $request->input('pull_request_number');
        $ticket->save();
        return redirect('/ticket');
    }

}

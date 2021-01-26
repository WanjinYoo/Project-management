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
use Carbon\Carbon;

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
        $user = User::where('id','=',$id)
                    ->first();
        $user->first_name = $request->input('first_name');
            $user->last_name = $request->input('last_name');
            $user->email = $request->input('email');
            $user->password = $request->input('password');
            $user->telephone = $request->input('telephone');
            $user->slack_account = $request->input('slack_account');
            // $user->responds_to = $request->input('responds_to');
            $user->team = $request->input('team');
            $user->position = $request->input('position');
        $user->save();
        return response()->json([
            "message" => "records updated successfully"
          ], 201);

    }

    public function overdue_issuer_ticket($user_id)
    {
        $today = Carbon::today();
        $status = 2;
        $comments = Ticket::where('tickets.issuer_id','=',$user_id)
                    ->where('tickets.deadline', '<', $today)
                    ->where('tickets.status_id','=', $status)
                    ->join('projects', 'projects.id', '=', 'tickets.project_id')
                    ->join('users', 'users.id', '=', 'tickets.issuer_id')
                    ->select('tickets.*', 'projects.name as project_name','users.first_name as user_first_name','users.last_name as user_last_name','users.email as user_email')
                    -> get();
        return $comments;
    }

    public function overdue_receiver_ticket($user_id)
    {
        $today = Carbon::today();
        $status = 2;
        $ticket = Ticket::where('tickets.receiver_id','=',$user_id)
                    ->where('tickets.deadline', '<', $today)
                    ->where('tickets.status_id','=', $status)
                    ->join('projects', 'projects.id', '=', 'tickets.project_id')
                    ->join('users', 'users.id', '=', 'tickets.receiver_id')
                    ->select('tickets.*', 'projects.name as project_name','users.first_name as user_first_name','users.last_name as user_last_name','users.email as user_email')
                    -> get();
        return $ticket;
    }

    public function fetch_upcoming_due_date_issuer_ticket($user_id)
    {
        $status = 2;
        $today = Carbon::today();
        $to= Carbon::today()->addDays(5);
        $ticket = Ticket::where('tickets.issuer_id','=',$user_id)
                    ->whereBetween('tickets.deadline', [$today, $to])
                    ->where('tickets.status_id','=', $status)
                    ->join('projects', 'projects.id', '=', 'tickets.project_id')
                    ->join('users', 'users.id', '=', 'tickets.issuer_id')
                    ->select('tickets.*', 'projects.name as project_name','users.first_name as user_first_name','users.last_name as user_last_name','users.email as user_email')
                    -> get();
        return $ticket;
    }

    public function fetch_upcoming_due_date_receiver_ticket($user_id)
    {
        $status = 2;
        $today = Carbon::today();
        $to= Carbon::today()->addDays(5);
        $ticket = Ticket::where('tickets.receiver_id','=',$user_id)
                    ->whereBetween('tickets.deadline', [$today, $to])
                    ->where('tickets.status_id','=', $status)
                    ->join('projects', 'projects.id', '=', 'tickets.project_id')
                    ->join('users', 'users.id', '=', 'tickets.receiver_id')
                    ->select('tickets.*', 'projects.name as project_name','users.first_name as user_first_name','users.last_name as user_last_name','users.email as user_email')
                    -> get();
        return $ticket;
    }

    public function fetch_waiting_approval_receiver_ticket($user_id)
    {
        $status = 4;
        $ticket = Ticket::where('tickets.receiver_id','=',$user_id)
                    ->where('tickets.status_id','=', $status)
                    ->join('projects', 'projects.id', '=', 'tickets.project_id')
                    ->join('users', 'users.id', '=', 'tickets.receiver_id')
                    ->select('tickets.*', 'projects.name as project_name','users.first_name as user_first_name','users.last_name as user_last_name','users.email as user_email')
                    -> get();
        return $ticket;
    }

    public function fetch_waiting_approval_issuer_ticket($user_id)
    {
        $status = 4;
        $ticket = Ticket::where('tickets.issuer_id','=',$user_id)
                    ->where('tickets.status_id','=', $status)
                    ->join('projects', 'projects.id', '=', 'tickets.project_id')
                    ->join('users', 'users.id', '=', 'tickets.issuer_id')
                    ->select('tickets.*', 'projects.name as project_name','users.first_name as user_first_name','users.last_name as user_last_name','users.email as user_email')
                    -> get();
        return $ticket;
    }

    public function overdue_issuer_ticket_proj($user_id, $project_id)
    {
        $today = Carbon::today();
        $status = 2;
        $ticket = Ticket::where('tickets.issuer_id','=',$user_id)
                    ->where('tickets.project_id', '=', $project_id)
                    ->where('tickets.deadline', '<', $today)
                    ->where('tickets.status_id','=', $status)
                    ->join('projects', 'projects.id', '=', 'tickets.project_id')
                    ->join('users', 'users.id', '=', 'tickets.issuer_id')
                    ->select('tickets.*', 'projects.name as project_name','users.first_name as user_first_name','users.last_name as user_last_name','users.email as user_email')
                    -> get();
        return $ticket;
    }

    public function overdue_receiver_ticket_proj($user_id, $project_id)
    {
        $today = Carbon::today();
        $status = 2;
        $ticket = Ticket::where('tickets.receiver_id','=',$user_id)
                    ->where('tickets.project_id', '=', $project_id)
                    ->where('tickets.deadline', '<', $today)
                    ->where('tickets.status_id','=', $status)
                    ->join('projects', 'projects.id', '=', 'tickets.project_id')
                    ->join('users', 'users.id', '=', 'tickets.receiver_id')
                    ->select('tickets.*', 'projects.name as project_name','users.first_name as user_first_name','users.last_name as user_last_name','users.email as user_email')
                    -> get();
        return $ticket;
    }

    public function fetch_upcoming_due_date_issuer_ticket_proj($user_id, $project_id)
    {
        $status = 2;
        $today = Carbon::today();
        $to= Carbon::today()->addDays(5);
        $ticket = Ticket::where('tickets.issuer_id','=',$user_id)
                    ->where('tickets.project_id', '=', $project_id)
                    ->whereBetween('tickets.deadline', [$today, $to])
                    ->where('tickets.status_id','=', $status)
                    ->join('projects', 'projects.id', '=', 'tickets.project_id')
                    ->join('users', 'users.id', '=', 'tickets.issuer_id')
                    ->select('tickets.*', 'projects.name as project_name','users.first_name as user_first_name','users.last_name as user_last_name','users.email as user_email')
                    -> get();
        return $ticket;
    }

    public function fetch_upcoming_due_date_receiver_ticket_proj($user_id, $project_id)
    {
        $status = 2;
        $today = Carbon::today();
        $to= Carbon::today()->addDays(5);
        $ticket = Ticket::where('tickets.receiver_id','=',$user_id)
                    ->where('tickets.project_id', '=', $project_id)
                    ->whereBetween('tickets.deadline', [$today, $to])
                    ->where('tickets.status_id','=', $status)
                    ->join('projects', 'projects.id', '=', 'tickets.project_id')
                    ->join('users', 'users.id', '=', 'tickets.receiver_id')
                    ->select('tickets.*', 'projects.name as project_name','users.first_name as user_first_name','users.last_name as user_last_name','users.email as user_email')
                    -> get();
        return $ticket;
    }

    public function fetch_waiting_approval_receiver_ticket_proj($user_id, $project_id)
    {
        $status = 4;
        $ticket = Ticket::where('tickets.receiver_id','=',$user_id)
                    ->where('tickets.project_id', '=', $project_id)
                    ->where('tickets.status_id','=', $status)
                    ->join('projects', 'projects.id', '=', 'tickets.project_id')
                    ->join('users', 'users.id', '=', 'tickets.receiver_id')
                    ->select('tickets.*', 'projects.name as project_name','users.first_name as user_first_name','users.last_name as user_last_name','users.email as user_email')
                    -> get();
        return $ticket;
    }

    public function fetch_waiting_approval_issuer_ticket_proj($user_id, $project_id)
    {
        $status = 4;
        $ticket = Ticket::where('tickets.issuer_id','=',$user_id)
                    ->where('tickets.project_id', '=', $project_id)
                    ->where('tickets.status_id','=', $status)
                    ->join('projects', 'projects.id', '=', 'tickets.project_id')
                    ->join('users', 'users.id', '=', 'tickets.issuer_id')
                    ->select('tickets.*', 'projects.name as project_name','users.first_name as user_first_name','users.last_name as user_last_name','users.email as user_email')
                    -> get();
        return $ticket;
    }


};

<?php

namespace App\Http\Controllers;
use App\Ticket;
use App\Project;
use App\User;
use App\StatusName;
use App\PriorityName;
use App\CommentsTicket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class TicketController extends Controller
{
    public function index()
    {
        $tickets = Ticket::all();
        return $tickets->toJSON();
    }

    public function store(Request $request)
    {
        $project_id = Project::where('name','=',$request->input('project_name'))
                        ->first();
        $user_id = User::where('email','=',$request->input('email'))
                        ->first();
        $receiver_id = User::where('email','=',$request->input('receiver_email'))
                        ->first();
        $status_id = StatusName::where('name','=',$request->input('status'))
                        ->first();
        $priority_level = PriorityName::where('name','=',$request->input('priority'))
                        ->first();

        $tickets = new Ticket;
        $tickets->project_id = $project_id->id;
        $tickets->issuer_id = $user_id->id;
        $tickets->receiver_id = $receiver_id->id;
        $tickets->status_id = $status_id->id;
        $tickets->deadline = $request->input('deadline');
        $tickets->description = $request->input('description');
        $tickets->start_at = $request->input('start_at');
        $tickets->subject = $request->input('subject');
        $tickets->priority_level = $priority_level->id;

        $tickets->save();
    }

    public function delete($id) // get request
    {
        $res = Ticket::where('id','=',$id)
                ->delete();

    }

    public function show($id)
    {
        $ticketInfo = Ticket::where('id','=',$id)
                        -> first();
         $issuer = User::find($ticketInfo->issuer_id);
         $ticketInfo->issuer_firstname = $issuer->first_name;
         $ticketInfo->issuer_lasttname = $issuer->last_name;
         $status = StatusName::find($ticketInfo->status_id);
         $ticketInfo->status_name = $status->name;
         $ticketInfo->status_description = $status->description;
         $receiver = User::find($ticketInfo->receiver_id);
         $ticketInfo->receiver_firstname = $receiver->first_name;
         $ticketInfo->receiver_lastname = $receiver->last_name;
         return $ticketInfo;
    }

    public function cancel(Request $request,$id) // post request
    {
        $status = 7;
        $ticketInfo = Ticket::where('id','=',$id)
                    ->first();
        $ticketInfo->status_id = $status;
        $ticketInfo->save();
        return response()->json([
            "message" => "Ticket Cancelled"
          ], 201);
    }

    public function approve(Request $request,$id) // post request
    {
        $status = 5;
        $ticketInfo = Ticket::where('id','=',$id)
                    ->first();
        $ticketInfo->status_id = $status;
        $ticketInfo->save();
        return response()->json([
            "message" => "Ticket Approved"
          ], 201);
    }

    public function reject(Request $request,$id) // post request
    {
        $status = 6;
        $ticketInfo = Ticket::where('id','=',$id)
                    ->first();
        $ticketInfo->status_id = $status;
        $ticketInfo->save();
        return response()->json([
            "message" => "Ticket Rejected"
          ], 201);
    }

    public function submit(Request $request,$id) // post request
    {
        $status = 4;
        $ticketInfo = Ticket::where('id','=',$id)
                    ->first();
        $ticketInfo->pull_request_number = $request->input('pull_request_number');
        $ticketInfo->status_id = $status;
        $ticketInfo->save();
        return response()->json([
            "message" => "Ticket Submitted"
          ], 201);
    }

    public function change_start(Request $request,$id) // post request
    {
        $ticketInfo = Ticket::where('id','=',$id)
                    ->first();
        $ticketInfo->start_at = $request->input('start_at');
        $ticketInfo->save();
        return response()->json([
            "message" => "Ticket Start Date Changed"
          ], 201);
    }

    public function change_deadline(Request $request,$id) // post request
    {
        $ticketInfo = Ticket::where('id','=',$id)
                    ->first();
        $ticketInfo->deadline = $request->input('deadline');
        $ticketInfo->save();
        return response()->json([
            "message" => "Ticket Deadline Date Changed"
          ], 201);
    }

    public function description(Request $request,$id) // post request
    {
        $ticketInfo = Ticket::where('id','=',$id)
                    ->first();
        $ticketInfo->description = $request->input('description');
        $ticketInfo->save();
        return response()->json([
            "message" => "Description updated"
          ], 201);
    }

    public function priority(Request $request,$id) // post request
    {
        $priority_level = PriorityName::where('name','=',$request->input('priority'))
                        ->first();

        $ticketInfo = Ticket::where('id','=',$id)
                    ->first();
        $ticketInfo->priority_level = $priority_level->id;
        $ticketInfo->save();
        return response()->json([
            "message" => "Priority Level updated"
          ], 201);
    }

    public function receiver(Request $request,$id) // post request
    {
        $receiver_id = User::where('email','=',$request->input('email'))
                        ->first();

        $ticketInfo = Ticket::where('id','=',$id)
                    ->first();
        $ticketInfo->receiver_id = $receiver_id->id;
        $ticketInfo->save();
        return response()->json([
            "message" => "Ticket Reassigned"
          ], 201);
    }

    public function create_comment(Request $request,$id,$user) // post request
    {
        $user_id = User::where('id','=',$user)
                        ->first();
        $ticket_id = Ticket::where('id','=',$id)
                        ->first();

        $comment = new CommentsTicket;
        $comment->ticket_id = $ticket_id->id;
        $comment->user_id = $user_id->id;
        $comment->comment = $request->input('comment');

        $comment->save();
        return response()->json([
            "message" => "Comment Added"
          ], 201);
    }

    public function fetch_comment($id)
    {
        $comments = CommentsTicket::where('ticket_id','=',$id)
                    ->join('projects', 'projects.id', '=', 'comments_tickets.ticket_id')
                    ->join('users', 'users.id', '=', 'comments_tickets.user_id')
                    ->select('comments_tickets.*', 'projects.name as project_name','users.first_name as user_first_name','users.last_name as user_last_name','users.email as user_email')
                    -> get();
        return $comments;
    }



}

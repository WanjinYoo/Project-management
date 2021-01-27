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
        $user_id = User::where('email','=',$request->input('issuer_email'))
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
        $ticketInfo = Ticket::where('tickets.id','=',$id)
                        ->join('projects', 'projects.id', '=', 'tickets.project_id')
                        ->join('status_names', 'status_names.id', '=', 'tickets.status_id')
                        ->join('priority_names', 'priority_names.id', '=', 'tickets.priority_level')
                        ->select('tickets.*', 'projects.name as project_name','status_names.name as status_name', 'status_names.description as status_description', 'priority_names.name as priority_name', 'priority_names.description as priority_description')
                        -> first();

          $receiver = User::find($ticketInfo->receiver_id);
          $ticketInfo->receiver_firstname = $receiver->first_name;
          $ticketInfo->receiver_lastname = $receiver->last_name;
          $issuer = User::find($ticketInfo->issuer_id);
          $ticketInfo->issuer_firstname = $issuer->first_name;
          $ticketInfo->issuer_lastname = $issuer->last_name;

         return $ticketInfo;
    }

    public function cancel(Request $request,$id, $user_id) // post request
    {
        $new_comment = "Ticket cancelled.";

        $user = User::where('id','=',$user_id)
                    ->first();

        $status = 7;

        $ticketInfo = Ticket::where('id','=',$id)
                    ->first();

        $ticketInfo->status_id = $status;
        $ticketInfo->save();

        $comment = new CommentsTicket;
        $comment->ticket_id = $ticketInfo->id;
        $comment->user_id = $user->id;
        $comment->comment = $new_comment;
        $comment->save();
        return response()->json([
            "message" => "Ticket Cancelled"
          ], 201);
    }

    public function approve(Request $request,$id, $user_id) // post request
    {
        $new_comment = "Ticket approved.";

        $user = User::where('id','=',$user_id)
                    ->first();

        $status = 5;

        $ticketInfo = Ticket::where('id','=',$id)
                    ->first();

        $ticketInfo->status_id = $status;
        $ticketInfo->save();

        $comment = new CommentsTicket;
        $comment->ticket_id = $ticketInfo->id;
        $comment->user_id = $user->id;
        $comment->comment = $new_comment;
        $comment->save();
        return response()->json([
            "message" => "Ticket Approved"
          ], 201);
    }

    public function reject(Request $request,$id, $user_id) // post request
    {

        $user = User::where('id','=',$user_id)
        ->first();

        $status = 6;

        $ticketInfo = Ticket::where('id','=',$id)
        ->first();

        $user_comment = $request->input('comment');
        $new_comment = "Ticket rejected: {$user_comment}";

        $ticketInfo->status_id = $status;
        $ticketInfo->save();

        $comment = new CommentsTicket;
        $comment->ticket_id = $ticketInfo->id;
        $comment->user_id = $user->id;
        $comment->comment = $new_comment;
        $comment->save();

        return response()->json([
            "message" => "Ticket Rejected"
          ], 201);
    }

    public function submit(Request $request,$id, $user_id) // post request
    {
        $user = User::where('id','=',$user_id)
        ->first();

        $status = 4;

        $ticketInfo = Ticket::where('id','=',$id)
                    ->first();
        $pull_request = $request->input('pull_request_number');
        $new_comment = "Pull Request #{$pull_request} submitted.";

        $ticketInfo->pull_request_number = $pull_request;
        $ticketInfo->status_id = $status;
        $ticketInfo->save();

        $comment = new CommentsTicket;
        $comment->ticket_id = $ticketInfo->id;
        $comment->user_id = $user->id;
        $comment->comment = $new_comment;
        $comment->save();

        return response()->json([
            "message" => "Ticket Submitted"
          ], 201);
    }

    public function change_start(Request $request,$id, $user_id) // post request
    {
        $user = User::where('id','=',$user_id)
                    ->first();

        $ticketInfo = Ticket::where('id','=',$id)
                    ->first();

        $old_date = $ticketInfo->start_at;

        $new_date = $request->input('start_at');

        $new_comment = "Ticket start date changed from {$old_date} to {$new_date}.";

        $ticketInfo->start_at = $new_date;
        $ticketInfo->save();

        $comment = new CommentsTicket;
        $comment->ticket_id = $ticketInfo->id;
        $comment->user_id = $user->id;
        $comment->comment = $new_comment;
        $comment->save();

        return response()->json([
            "message" => "Ticket Start Date Changed"
          ], 201);
    }

    public function change_deadline(Request $request,$id, $user_id) // post request
    {
        $user = User::where('id','=',$user_id)
                    ->first();

        $ticketInfo = Ticket::where('id','=',$id)
                    ->first();

        $old_date = $ticketInfo->deadline;

        $new_date = $request->input('deadline');

        $new_comment = "Ticket deadline changed from {$old_date} to {$new_date}.";


        $ticketInfo->deadline = $new_date;
        $ticketInfo->save();

        $comment = new CommentsTicket;
        $comment->ticket_id = $ticketInfo->id;
        $comment->user_id = $user->id;
        $comment->comment = $new_comment;
        $comment->save();

        return response()->json([
            "message" => "Ticket Deadline Date Changed"
          ], 201);
    }

    public function description(Request $request,$id, $user_id) // post request
    {
        $user = User::where('id','=',$user_id)
        ->first();

        $ticketInfo = Ticket::where('id','=',$id)
                    ->first();
        $new_comment = "Ticket description updated.";

        $ticketInfo->description = $request->input('description');
        $ticketInfo->save();

        $comment = new CommentsTicket;
        $comment->ticket_id = $ticketInfo->id;
        $comment->user_id = $user->id;
        $comment->comment = $new_comment;
        $comment->save();

        return response()->json([
            "message" => "Description updated"
          ], 201);
    }

    public function priority(Request $request,$id, $user_id) // post request
    {
        $user = User::where('id','=',$user_id)
                    ->first();

        $ticketInfo = Ticket::where('id','=',$id)
                        ->first();

        $current_priority_id = $ticketInfo->priority_level;

        $current_priority = PriorityName::where('id','=', $current_priority_id)
                        ->first();

        $old_priority = $current_priority->name;

        $new_priority_name = $request->input('priority_level');

        $new_priority = PriorityName::where('name','=', $new_priority_name)
        ->first();

        $new_comment = "Ticket priority level changed from {$old_priority} to {$new_priority_name}.";

        $ticketInfo->priority_level = $new_priority->id;
        $ticketInfo->save();

        $comment = new CommentsTicket;
        $comment->ticket_id = $ticketInfo->id;
        $comment->user_id = $user->id;
        $comment->comment = $new_comment;
        $comment->save();

        return response()->json([
            "message" => "Priority Level updated"
          ], 201);
    }

    public function receiver(Request $request,$id) // post request
    {

        $receiver_id = User::where('email','=',$request->input('email'))
        ->first();

        $receiver = $receiver_id->id;
        $receiver_first_name = $receiver_id->first_name;
        $receiver_last_name = $receiver_id->last_name;
        $receiver_email = $receiver_id->email;

        $ticketInfo = Ticket::where('id','=',$id)
        ->first();

        $new_comment = "Ticket reassigned to {$receiver_last_name}, {$receiver_first_name} - e-mail: {$receiver_email}.";

        $ticketInfo->receiver_id = $receiver;
        $ticketInfo->save();

        $comment = new CommentsTicket;
        $comment->ticket_id = $ticketInfo->id;
        $comment->user_id = $receiver;
        $comment->comment = $new_comment;
        $comment->save();

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

    public function fetch_comment(Request $request,$id)
    {
        $comments = CommentsTicket::where('ticket_id','=',$id)
                    ->join('users', 'users.id', '=', 'comments_tickets.user_id')
                    ->orderBy('created_at', 'DESC')
                    ->select('comments_tickets.*','users.first_name as user_first_name','users.last_name as user_last_name','users.email as user_email')
                    -> get();
        return $comments;
    }



}

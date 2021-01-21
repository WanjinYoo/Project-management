<?php

namespace App\Http\Controllers;
use App\Ticket;
use App\User;
use App\StatusName;
use Illuminate\Http\Request;

class TicketController extends Controller
{
    public function index()
    {
        $tickets = Ticket::all();
        return $tickets->toJSON();
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
        $ticket = Ticket::where('id','=',$id);
        $ticket->pull_request_number = $request->input('pull_request_number');
        $ticket->save();
        return redirect('/ticket');
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
}

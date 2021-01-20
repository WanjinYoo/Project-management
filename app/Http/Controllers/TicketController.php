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
    public function show($id)
    {
        $ticketInfo = Ticket::where('id','=',$id)
                        // -> join('users','users.id','=','tickets.issuer_id')
                        // -> join('users','users.id','=','tickets.receiver_id')
                        -> first();
         $issuer = User::find($ticketInfo->issuer_id);
         $ticketInfo->issuer_firstname = $issuer->first_name;
         $ticketInfo->issuer_lasttname = $issuer->last_name;
         $status = StatusName::find($ticketInfo->status_id);
         $ticketInfo->status_name = $status->name;
         $ticketInfo->status_description = $status->description;


        return $ticketInfo;
    }
}

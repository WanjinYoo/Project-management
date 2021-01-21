<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    public $timestamps = false;
    protected $fillable = [
        'project_id', 'issuer_id', 'receiver_id', 'status_id', 'github', 'created_at', 'finished_at', 'deadline', 'descripiton', 'pull_request_number', 'start_date', 'subject'
    ];
    // check created_at and start_date
}

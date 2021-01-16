<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CommentsTicket extends Model
{
    protected $fillable = [
        'user_id', 'ticket_id', 'date', 'comment'
    ];
    // check date
}

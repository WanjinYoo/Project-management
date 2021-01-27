<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class CommentsTicket extends Model
{
    protected $fillable = [
        'user_id', 'ticket_id', 'date', 'comment'
    ];
    protected $dateFormat = 'Y-m-d H:i:s';


};

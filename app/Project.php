<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{

    protected $fillable = [
        'status_id', 'name', 'product', 'description', 'github', 'created_at', 'finished_at', 'deadline', 'start_date'
    ];

    // check for 'created_at' and 'start_date'
}

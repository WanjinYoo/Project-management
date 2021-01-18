<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{

    protected $fillable = [
        'name', 'product', 'description', 'github', 'deadline', 'start_date', 'status_id'
    ];

    // 'start_date' missing and deadline is not time stamp
}

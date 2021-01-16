<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UsersProjects extends Model
{
    protected $fillable = [
        'project_id', 'user_id', 'isManager'
    ];
    //
}

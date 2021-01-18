<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UsersProject extends Model
{
    public $timestamps = false;
    protected $fillable = [
        'project_id', 'user_id', 'isManager'
    ];
    //
}

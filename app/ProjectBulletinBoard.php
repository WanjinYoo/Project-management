<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProjectBulletinBoard extends Model
{
    protected $fillable = [
        'user_id', 'project_id', 'comment', 'date'
    ];
    //check project_id and date
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PriorityName extends Model
{
    public $timestamps = false;
    protected $fillable = [
        'name', 'description'
    ];
}

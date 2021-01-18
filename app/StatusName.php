<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StatusName extends Model
{
    public $timestamps = false;
    protected $fillable = [
        'name', 'description'
    ];
}

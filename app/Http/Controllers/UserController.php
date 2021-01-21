<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function verify(Reqeust $requst)
    {
        $verify = USER::where('email','=',$id);
        if ($verify->password == $request->input('password')) {
            //set sesssion cookie with an ID
        }
    }
}

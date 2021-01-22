<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::apiresource('tickets','TicketController');
Route::post('tickets/{ticket}/close','TicketController@complete');
Route::post('login','UserController@verify');
Route::get('users/projects/{id}','UserController@get_projects');
Route::apiresource('projects','ProjectController');

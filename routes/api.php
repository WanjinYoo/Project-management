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


Route::post('login','UserController@verify');

Route::get('users/{id}','UserController@show');
Route::get('users/tickets/{user}','UserController@get_tickets');
Route::get('users/projects/{user}','UserController@get_projects');
Route::patch('users/{id}','UserController@update');

Route::apiresource('projects','ProjectController');
Route::get('projects/{project}/tickets','ProjectController@tickets_per_project');
Route::get('projects/{project}/tickets/user','ProjectController@tickets_project_user');
Route::post('projects/{project}/member','ProjectController@add_member');

Route::apiresource('tickets','TicketController');
Route::post('tickets/{ticket}/close','TicketController@complete');


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
Route::put('users/{id}','UserController@update');
Route::get('users/{user}/issuer_overdue','UserController@overdue_issuer');
Route::get('users/{user}/receiver_overdue','UserController@overdue_receiver');
Route::get('users/{user}/issuer_due','UserController@fetch_upcoming_due_date_issuer');
Route::get('users/{user}/receiver_due','UserController@fetch_upcoming_due_date_receiver');
Route::get('users/{user}/issuer_submitted','UserController@fetch_waiting_approval_issuer');
Route::get('users/{user}/receiver_submitted','UserController@fetch_waiting_approval_receiver');


Route::apiresource('projects','ProjectController');
Route::get('projects/{project}/tickets','ProjectController@tickets_per_project');
Route::get('projects/{project_id}/tickets/{user_id}','ProjectController@tickets_project_user');
Route::get('projects/{project}/member','ProjectController@fetch_member');
Route::post('projects/{project}/member','ProjectController@add_member');
Route::delete('projects/{project}/member','ProjectController@delete_member');
Route::put('projects/{project}/close','ProjectController@complete');
Route::put('projects/{project}/cancel','ProjectController@cancel');
Route::put('projects/{project}/start','ProjectController@change_start');
Route::put('projects/{project}/deadline','ProjectController@change_deadline');
Route::get('projects/{project}/comment','ProjectController@fetch_comment');
Route::post('projects/{project}/comment/{user}','ProjectController@create_comment');

Route::apiresource('tickets','TicketController');
Route::put('tickets/{ticket}/close','TicketController@complete');
Route::put('tickets/{ticket}/cancel','TicketController@cancel');
Route::put('tickets/{ticket}/approve','TicketController@approve');
Route::put('tickets/{ticket}/reject','TicketController@reject');
Route::put('tickets/{ticket}/submit','TicketController@submit');
Route::put('tickets/{ticket}/start','TicketController@change_start');
Route::put('tickets/{ticket}/deadline','TicketController@change_deadline');
Route::put('tickets/{ticket}/description','TicketController@description');
Route::put('tickets/{ticket}/priority','TicketController@priority');
Route::put('tickets/{ticket}/receiver','TicketController@receiver');
Route::post('tickets/{ticket}/comment/{user}','TicketController@create_comment');
Route::get('tickets/{ticket}/comment','TicketController@fetch_comment');













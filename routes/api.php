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

Route::get('users/','UserController@get_all_users');
Route::get('users/{id}','UserController@show');
Route::get('users/tickets/{user}/issuer','UserController@get_tickets_issuer');
Route::get('users/tickets/{user}','UserController@get_tickets');
Route::get('users/projects/{user}','UserController@get_projects');
Route::get('users/tickets/{user}/issuer_overdue','UserController@overdue_issuer_ticket');
Route::get('users/tickets/{user}/receiver_overdue','UserController@overdue_receiver_ticket');
Route::get('users/tickets/{user}/issuer_due','UserController@fetch_upcoming_due_date_issuer_ticket');
Route::get('users/tickets/{user}/receiver_due','UserController@fetch_upcoming_due_date_receiver_ticket');
Route::get('users/tickets/{user}/issuer_submitted','UserController@fetch_waiting_approval_issuer_ticket');
Route::get('users/tickets/{user}/receiver_submitted','UserController@fetch_waiting_approval_receiver_ticket');
Route::get('users/tickets/{user}/issuer_overdue/{project}','UserController@overdue_issuer_ticket_proj');
Route::get('users/tickets/{user}/receiver_overdue/{project}','UserController@overdue_receiver_ticket_proj');
Route::get('users/tickets/{user}/issuer_due/{project}','UserController@fetch_upcoming_due_date_issuer_ticket_proj');
Route::get('users/tickets/{user}/receiver_due/{project}','UserController@fetch_upcoming_due_date_receiver_ticket_proj');
Route::get('users/tickets/{user}/issuer_submitted/{project}','UserController@fetch_waiting_approval_issuer_ticket_proj');
Route::get('users/tickets/{user}/receiver_submitted/{project}','UserController@fetch_waiting_approval_receiver_ticket_proj');
Route::put('users/{id}','UserController@update');


Route::apiresource('projects','ProjectController');
Route::get('projects/{project}/tickets','ProjectController@tickets_per_project');
Route::get('projects/{project_id}/tickets/{user_id}','ProjectController@tickets_project_user');
Route::get('projects/{project}/member','ProjectController@fetch_member');
Route::get('projects/{project}/comment','ProjectController@fetch_comment');
Route::delete('projects/{project}/member','ProjectController@delete_member');
Route::put('projects/{project}/close/{user}','ProjectController@complete');
Route::put('projects/{project}/cancel/{user}','ProjectController@cancel');
Route::put('projects/{project}/start/{user}','ProjectController@change_start');
Route::put('projects/{project}/deadline/{user}','ProjectController@change_deadline');
Route::post('projects/{project}/member','ProjectController@add_member');
Route::post('projects/{project}/comment/{user}','ProjectController@create_comment');

Route::apiresource('tickets','TicketController');
Route::get('tickets/{ticket}/comment','TicketController@fetch_comment');
Route::put('tickets/{ticket}/close','TicketController@complete');
Route::put('tickets/{ticket}/cancel/{user}','TicketController@cancel');
Route::put('tickets/{ticket}/approve/{user}','TicketController@approve');
Route::put('tickets/{ticket}/reject/{user}','TicketController@reject');
Route::put('tickets/{ticket}/submit/{user}','TicketController@submit');
Route::put('tickets/{ticket}/start/{user}','TicketController@change_start');
Route::put('tickets/{ticket}/deadline/{user}','TicketController@change_deadline');
Route::put('tickets/{ticket}/description/{user}','TicketController@description');
Route::put('tickets/{ticket}/priority/{user}','TicketController@priority');
Route::put('tickets/{ticket}/receiver','TicketController@receiver');
Route::post('tickets/{ticket}/comment/{user}','TicketController@create_comment');













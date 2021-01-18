<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeTableNames extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::rename('comments_ticket', 'comments_tickets');
        Schema::rename('project_bulletin_board', 'project_bulletin_boards');
        Schema::rename('status', 'status_names');

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::rename('comments_tickets', 'comments_ticket');Schema::rename('project_bulletin_boards', 'project_bulletin_board');
        Schema::rename('status_names', 'status');
    }
}

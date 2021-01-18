<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RenameProjectBulletinBoardColunmid extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('project_bulletin_board', function (Blueprint $table) {
            $table->dropForeign(['ticket_id']);
            $table->renameColumn('ticket_id', 'project_id');
            $table->foreign('project_id')->references('id')->on('projects');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('project_bulletin_board', function (Blueprint $table) {
            $table->dropForeign(['ticket_id']);
            $table->renameColumn('ticket_id', 'project_id');
            $table->foreign('project_id')->references('id')->on('projects');
        });
    }
}

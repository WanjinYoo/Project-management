<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UsersProjects extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users_projects', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('project_id') -> nullable(false);
            $table->foreign('project_id')->references('id')-> on('projects');
            $table->unsignedBigInteger('user_id') -> nullable(false);
            $table->foreign('user_id')->references('id')-> on('users');
            $table->boolean('isManager')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users_projects');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Tickets extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('project_id') -> nullable(false);
            $table->foreign('project_id')->references('id')-> on('projects');
            $table->unsignedBigInteger('issuer_id') -> nullable(false);
            $table->foreign('issuer_id')->references('id')-> on('users');
            $table->unsignedBigInteger('receiver_id') -> nullable(false);
            $table->foreign('receiver_id')->references('id')-> on('users');
            $table->unsignedBigInteger('status_id') -> nullable(false);
            $table->foreign('status_id')->references('id')-> on('status');


            $table->timestamps();
            $table->timestamp('finished_at', $precision = 0);
            $table->timestamp('deadline', $precision = 0);
            $table->string('description');
            $table->integer('pull_request_number');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tickets');
    }
}

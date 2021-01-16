<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommentsTicket extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comments_ticket', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id') -> nullable(false);
            $table->foreign('user_id')->references('id')-> on('users');
            $table->unsignedBigInteger('ticket_id') -> nullable(false);
            $table->foreign('ticket_id')->references('id')-> on('tickets');
            $table->timestamps();
            $table->string('comment');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('comments_ticket');
    }
}

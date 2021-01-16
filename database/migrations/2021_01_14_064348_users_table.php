<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->integer('telephone') -> nullable(false);
            $table->string('team') -> nullable(false);
            $table->string('slack_account') -> nullable(false);
            $table->string('position') -> nullable(false);
            $table->unsignedBigInteger('responds_to') -> nullable(false);
            $table->foreign('responds_to')->references('id')-> on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            Schema::dropIfExists('users');
        });
    }
}

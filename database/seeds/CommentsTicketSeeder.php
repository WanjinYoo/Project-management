<?php

use Illuminate\Database\Seeder;

class CommentsTicketSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $commentsTickets = factory(App\CommentsTicket::class, 500)->create();

    }
}

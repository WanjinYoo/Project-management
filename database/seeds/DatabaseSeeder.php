<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UserSeeder::class);
        $this->call(StatusNameSeeder::class);
        $this->call(ProjectSeeder::class);
        $this->call(UsersProjectSeeder::class);
        $this->call(ProjectBulletinBoardSeeder::class);
        $this->call(TicketSeeder::class);
        $this->call(CommentsTicketSeeder::class);
    }
}

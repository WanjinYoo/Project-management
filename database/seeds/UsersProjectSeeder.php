<?php

use Illuminate\Database\Seeder;

class UsersProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $usr_proj = factory(App\UsersProject::class, 300)->create();
    }
}

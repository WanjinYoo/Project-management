<?php

use Illuminate\Database\Seeder;

class ProjectBulletinBoardSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $projBulletinBoard = factory(App\ProjectBulletinBoard::class, 500)->create();

    }
}

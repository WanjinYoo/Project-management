<?php

use Illuminate\Database\Seeder;

class StatusNameSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\StatusName::create([
            'name' => 'Created',
            'description' => 'Instance created date'
        ]);

        App\StatusName::create([
            'name' => 'Pending',
            'description' => 'Wainting for conclusion'
        ]);

        App\StatusName::create([
            'name' => 'Submitted',
            'description' => 'Ticket submmited for approval'
        ]);

        App\StatusName::create([
            'name' => 'Approved',
            'description' => 'Ticket approved'
        ]);

        App\StatusName::create([
            'name' => 'Rejected',
            'description' => 'Ticket rejected'
        ]);

        App\StatusName::create([
            'name' => 'Concluded',
            'description' => 'Project finalized'
        ]);

        App\StatusName::create([
            'name' => 'Canceled',
            'description' => 'Process cancelled'
        ]);
    }
}

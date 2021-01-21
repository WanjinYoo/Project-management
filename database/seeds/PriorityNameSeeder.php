<?php

use Illuminate\Database\Seeder;

class PriorityNameSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\PriorityName::create([
            'name' => 'Low',
            'description' => 'Issue can be addressed as a strecht'
        ]);

        App\PriorityName::create([
            'name' => 'Medium',
            'description' => 'Issue must be addressed as soon issues of higher order are cleared'
        ]);

        App\PriorityName::create([
            'name' => 'High',
            'description' => 'Issue must be addressed if no urgent issue is pending'
        ]);

        App\PriorityName::create([
            'name' => 'Urgent',
            'description' => 'Issue must be addressed immediatly'
        ]);

    }
}

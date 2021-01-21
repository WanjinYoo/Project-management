<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Ticket;
use Faker\Generator as Faker;

$factory->define(Ticket::class, function (Faker $faker) {
    $create_date = $faker->dateTimeBetween($startDate = '-1 year', $endDate = 'now', $timezone = null);
    return [
        'project_id' => $faker->numberBetween($min = 1, $max = 30),
        'issuer_id' => $faker->numberBetween($min = 1, $max = 100),
        'receiver_id' => $faker->numberBetween($min = 1, $max = 100),
        'status_id' => $faker->numberBetween($min = 1, $max = 6),
        'created_at' => $create_date,
        'updated_at' => $faker->dateTimeBetween($startDate = $create_date, $endDate = 'now', $timezone = null),
        'finished_at'=> $faker->optional($weight = 0.5)->dateTimeBetween($startDate = $create_date, $endDate = 'now', $timezone = null),
        'deadline' => $faker->dateTimeBetween($startDate = $create_date, $endDate = '+1 year', $timezone = null),
        'description' => $faker->text($maxNbChars = 200),
        'pull_request_number' => $faker->numberBetween($min = 1000, $max = 9000),
        'start_at' => $faker->dateTimeBetween($startDate = $create_date, $endDate = '+1 year', $timezone = null),
        'priority_level' => $faker->numberBetween($min = 1, $max = 4),
        'subject' => $faker->text($maxNbChars = 50)
    ];
});

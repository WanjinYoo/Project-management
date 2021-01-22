<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Project;
use Faker\Generator as Faker;

$factory->define(Project::class, function (Faker $faker) {
    $create_date = $faker->dateTimeBetween($startDate = '-1 year', $endDate = 'now', $timezone = null);
    return [
        'name' => $faker->word,
        'product'=> $faker->word,
        'description' => $faker->text($maxNbChars = 200),
        'github' => $faker->unique()->userName,
        'created_at' => $create_date,
        'finished_at'=> $faker->optional($weight = 0.5)->dateTimeBetween($startDate = $create_date, $endDate = 'now', $timezone = null),
        'deadline' => $faker->dateTimeBetween($startDate = $create_date, $endDate = '+1 year', $timezone = null),
        'start_date' => $faker->dateTimeBetween($startDate = $create_date, $endDate = '+1 year', $timezone = null),
        'status_id' => $faker->numberBetween($min = 2, $max = 3),
        'repository' => $faker->unique()->url
    ];
});

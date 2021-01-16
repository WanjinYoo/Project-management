<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Project;
use Faker\Generator as Faker;

$factory->define(Project::class, function (Faker $faker) {
    return [
        'status_id' => $faker->numberBetween($min = 1, $max = 100),
        'name' => $faker->word,
        'product'=> $faker->word,
        'description' => $faker->text($maxNbChars = 200),
        'github' => 'name@github',
        'created_at' => $faker->dateTimeBetween($startDate = '-30 years', $endDate = 'now', $timezone = null),
        'finished_at'=> $faker->dateTimeBetween($startDate = '-30 years', $endDate = 'now', $timezone = null),
        'deadline' => $faker->dateTimeBetween($startDate = '-30 years', $endDate = 'now', $timezone = null),
        'start_date' => $faker->dateTimeBetween($startDate = '-30 years', $endDate = 'now', $timezone = null)
    ];
});

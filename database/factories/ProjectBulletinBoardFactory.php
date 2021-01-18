<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\ProjectBulletinBoard;
use Faker\Generator as Faker;

$factory->define(ProjectBulletinBoard::class, function (Faker $faker) {
    return [
        'user_id' => $faker->numberBetween($min = 1, $max = 100),
        'project_id' => $faker->numberBetween($min = 1, $max = 30),
        'created_at' => $faker->dateTimeBetween($startDate = '-1 year', $endDate = 'now', $timezone = null),
        'updated_at' => $faker->optional($weight = 0.9)->dateTimeBetween($startDate = 'now', $endDate = 'now', $timezone = null),
        'comment' => $faker->text($maxNbChars = 200)
    ];
});

<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\CommentsTicket;
use Faker\Generator as Faker;

$factory->define(CommentsTicket::class, function (Faker $faker) {
    return [
        'user_id' => $faker->numberBetween($min = 1, $max = 100),
        'ticket_id' => $faker->numberBetween($min = 1, $max = 300),
        'created_at' => $faker->dateTimeBetween($startDate = '-1 year', $endDate = 'now', $timezone = null),
        'updated_at' => $faker->dateTimeBetween($startDate = '-1 year', $endDate = 'now', $timezone = null),
        'comment' => $faker->text($maxNbChars = 200)
    ];
});

<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\UsersProject;
use Faker\Generator as Faker;

$factory->define(UsersProject::class, function (Faker $faker) {
    return [
        'project_id' => $faker->numberBetween($min = 1, $max = 30),
        'user_id' => $faker->numberBetween($min = 1, $max = 100),
        'isManager' => $faker->boolean($chanceOfGettingTrue = 20)
    ];
});

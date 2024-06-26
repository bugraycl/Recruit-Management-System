<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name'=>$this->faker->sentence(2,true),
            'slug'=>$this->faker->unique->slug,
            'icon'=>$this->faker->randomElement(['http://rms-api/files/categories/default.png','http://rms-api/files/categories/default1.png','http://rms-api/files/categories/default2.png','http://rms-api/files/categories/default3.png']),
            'status'=>$this->faker->randomElement(['active','inactive']),
            'job_count'=>$this->faker->numberBetween(0,10),
            'created_at'=>$this->faker->dateTimeThisYear(),
            'updated_at'=>$this->faker->dateTimeThisYear()
        ];
    }
}

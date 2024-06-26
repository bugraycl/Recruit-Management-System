<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\MainJob>
 */
class MainJobFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title'=>$this->faker->sentence(3,false),
            'slug'=>$this->faker->unique()->slug,
            'count'=>$this->faker->numberBetween(0,5),
            'company'=>$this->faker->randomElement(['Bjit,Dhaka']),
            'location'=>$this->faker->address(),
            'email'=>$this->faker->safeEmail(),
            'tag'=>$this->faker->randomElement(['java','Software Engineer','Developer','Engineer','Designer']),
            'salary'=>$this->faker->numberBetween(30000,45000),
            'close_date'=>$this->faker->dateTimeBetween('+i month(','+2 month'),
            'cat_id'=>$this->faker->randomElement(Category::where('status','active')->pluck('id')->toArray()),
            'icon'=>$this->faker->randomElement(['http://rms-api.test/files/jobs/default.png','http://rms-api.test/files/jobs/default1.png','http://rms-api.test/files/jobs/default2.png','http://rms-api.test/files/jobs/default3.png']),
            'description'=>$this->faker->sentence(300),
            'status'=>$this->faker->randomElement(['active','inactive']),
            'type'=>$this->faker->randomElement(['full time','half time','part time']),
            'is_featured'=>$this->faker->randomElement([true,false]),
            'created_at'=>now(),
            'updated_at'=>now()
        ];
    }
}

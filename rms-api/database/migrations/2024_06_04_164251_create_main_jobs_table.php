<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('main_jobs', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->integer('count')->default(0);
            $table->string('company');
            $table->string('location');
            $table->string('email');
            $table->string('tag')->nullable();
            $table->float('salary',10,2)->default(0.00);
            $table->timestamp('close_date')->default(now());
            $table->unsignedBigInteger('cat_id')->nullable();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->string('icon')->default('http://rms-api.test/files/jobs/default.png');
            $table->longText('description')->nullable();
            $table->enum('status',['active','inactive'])->default('active');
            $table->enum('type',['full time','half time','part time'])->default('full time');
            $table->boolean('is_featured')->nullable();
            $table->foreign('cat_id')->references('id')->on('categories')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('SET NULL');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('main_jobs');
    }
};

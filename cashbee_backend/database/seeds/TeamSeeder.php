<?php

use Illuminate\Database\Seeder;

class TeamSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for($i = 0; $i = 5; $i++){
            \DB::table('teams')
                ->insert([
                    'name' => 'team'.$i,
                    'details' => 'details'.$i
                ]);

                if($i == 5){
                break;
                }
        }
    }
}

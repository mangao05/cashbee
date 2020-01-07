<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    protected $guarded = ['id'];

    public function players(){
        return $this->hasMany('App\Player','team_id', 'id');
    }

    public function coaches(){
        return $this->hasMany('App\Coach', 'team_id', 'id');
    }
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Coach extends Model
{
    protected $guarded = ['id'];

    public function team(){
        return $this->belongsTo('App\Team', 'team_id', 'id');
    }
}

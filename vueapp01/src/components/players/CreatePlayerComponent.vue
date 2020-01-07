<template>
     <div class="container">
        <h1 class="text-center title">Register Player</h1>
        <div class="col-lg-8 offset-lg-2">
            <form @submit.prevent="createPlayer()" class="p-5" style="box-shadow: 0px 0px 3px gray;">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" v-model="player.name" class="form-control">
            </div>
            <div class="form-group">
                <label for="details">Details</label>
                <textarea v-model="player.details" class="form-control" cols="30" rows="10"></textarea>
            </div>
            <button class="btn btn-outline-dark btn-block">Register</button>
        </form>
        </div>
        
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return {
            player : {
                name : '',
                details : ''
            }
        }
    },
    methods : {
        createPlayer(){
            axios.post('http://127.0.0.1:8000/api/players', {
                name : this.player.name,
                details : this.player.details
            })
            .then(data => {
                this.$router.push('/players');
            })
            .catch(error => {
                alert("Fill in all blank fields");
            })
        }
    }
}
</script>
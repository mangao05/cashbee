<template>
    <div class="container">
        <h1 class="text-center title">Update Team</h1>
        <div class="col-lg-8 offset-lg-2">
            <form @submit.prevent="updateTeam()" class="p-5" style="box-shadow: 0px 0px 3px gray;">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" v-model="player.name" class="form-control">
            </div>
            <div class="form-group">
                <label for="details">Details</label>
                <textarea v-model="player.details" class="form-control" cols="30" rows="10"></textarea>
            </div>
            <button class="btn btn-outline-dark btn-block">Update</button>
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
    methods: {
        updateTeam(){
            axios.post('http://127.0.0.1:8000/api/teams/'+this.$route.params.id, {
                '_method': 'PUT',
                name : this.player.name,
                details: this.player.details
            })
            .then(data => {
                this.$router.push('/');
            }).catch(error => {
                alert("Fill in all blank fields.");
            });
        }
    },
    created(){
        var id = this.$route.params.id;
        axios.get('http://127.0.0.1:8000/api/teams/'+id)
            .then(data => {
                this.player = data.data
            })
    }
}
</script>
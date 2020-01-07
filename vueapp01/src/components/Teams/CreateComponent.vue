<template>
    <div class="container">
        <h1 class="text-center title">Create Team</h1>
        <div class="col-lg-8 offset-lg-2">
            <form @submit.prevent="createTeam()" class="p-5" style="box-shadow: 0px 0px 3px gray;">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" v-model="name" class="form-control">
            </div>
            <div class="form-group">
                <label for="details">Details</label>
                <textarea v-model="details" class="form-control" cols="30" rows="10"></textarea>
            </div>
            <button class="btn btn-outline-dark btn-block">Create Team</button>
        </form>
        </div>
        
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return {
            name : "",
            details: ""
        }
    },
    methods : {
        createTeam(){
            axios.post('http://127.0.0.1:8000/api/teams', {
                name: this.name,
                details: this.details
            }).then(data => {
                if(data.data == 'success'){
                    this.$router.push('/');
                }
            }).catch(error => {
                alert("Fill in all blank fields");
            })
        }
    }
}
</script>
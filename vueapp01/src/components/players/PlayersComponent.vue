<template>
    <div>
       
            <router-link to="/cuplayers" class="btn btn-success">
                Add Player
            </router-link>
        
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Details</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="players.length == 0">
                    <td colspan="4" class="text-center font-weight-bold">No Player</td>
                </tr>
                <tr v-else v-for="(player, index) in players" :key="player.id">
                    <td scope="row">{{ index + 1 }}</td>
                    <td>{{ player.name }}</td>
                    <td>{{ player.details }}</td>
                    <td>View</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    data(){
        return {
            players: []
        }
    },
    methods: {
        getPlayers(){
            axios.get('http://127.0.0.1:8000/api/players').then(data => this.players = data.data);
        }
    },
    created(){

    }
}
</script>
<template>
  <div class="teams container">
  
    <router-link to="/create" class="btn btn-success">
        Create Team
    </router-link> 
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Details</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(team, index) in teams" :key="team.id">
          <td scope="row">{{ index + 1 }}</td>
          <td>{{ team.name }}</td>
          <td>{{ team.details }}</td>
          <td>
            <button class="btn btn-success" @click="viewTeam(team.id)">View</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- <datatable :columns="columns" :data="rows" class="table"></datatable> -->

  </div>
</template>

<script>
import axios from 'axios';
import TeamModal from '@/components/Teams/modal/TeamModal';
export default {
  name: 'TeamComponent',
  components: {
    'team-modal': TeamModal
  },
  data(){
    return {
      teams: [],
      // columns: [
      //       {label: 'id', field: 'id'},
      //       {label: 'Username', field: 'name', headerClass: 'class-in-header second-class'},
      //       {label: 'Details', field: 'details'},
      // ],
      // rows: []
    }
  },
  methods: {
    viewTeam(id){
      this.$router.push({name: 'editTeam', params: { id : id }});
    }
  },
  created(){
    axios.get('http://127.0.0.1:8000/api/teams')
          .then(data => {
            var teams = data.data;
            this.teams = teams;
          })
  }
}
</script>

import Vue from 'vue'
import Router from 'vue-router'
// Team Component
import TeamComponent from '@/components/Teams/TeamComponent';
import CreateComponent from '@/components/Teams/CreateComponent';
import EditTeamComponent from '@/components/Teams/EditTeamComponent';

// Player Component
import PlayersComponent from '@/components/players/PlayersComponent';
import CreatePlayersComponent from '@/components/players/CreatePlayerComponent';
Vue.use(Router)

export default new Router({
  routes: [
    // Team Routes
    {
      path: '/',
      name: 'TeamComponent',
      component: TeamComponent
    },
    {
      path: '/create', 
      component: CreateComponent
    },
    {
      path: '/editTeam/:id',
      name: 'editTeam',
      component: EditTeamComponent,
      props: true
    },
    // Player Routes
    {
      path: '/players',
      component: PlayersComponent
    },
    {
      path: '/cuplayers',
      name: 'editPlayers',
      component: CreatePlayersComponent
    }
  ]
})

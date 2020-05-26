import Vue from 'vue'
import VueRouter from 'vue-router'
import Players from '../views/Players.vue'
import Games from '../views/Games.vue'
import PiccoloGame from '../views/PiccoloGame.vue'
import players from '../store/Modules/players'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Players',
    component: Players
  },
  {
    path: '/games',
    name: 'Games',
    component: Games
  },
  {
    path: "/DrunkenPirates",
    name: "DrunkenPirates",
    component: PiccoloGame,
    beforeEnter: checkPlayers
  }
]



const router = new VueRouter({
  mode: 'history',
  routes
})


function checkPlayers (to, from, next) {
  if (!players.getters.allPlayers.length < 3) { /// THIS NOT WORK, HOW TO ACCESS STORE?
    router.push({name: 'Players'});
  } else {
    next()
  }
}

export default router

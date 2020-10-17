import Vue from 'vue';
import VueRouter from 'vue-router';
import Players from '../views/Players.vue';
import Games from '../views/Games.vue';
import PiccoloGame from '../views/PiccoloGame.vue';
import players from '../store/Modules/players';
import Half4Game from '../views/Half4Game.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import ForgotPassword from '../views/ForgotPassword.vue'
import firebase from 'firebase';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Login
    },
    {
        path: '*',
        component: Login
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/forgotPassword',
        name: 'forgotPassword',
        component: ForgotPassword
    },
    {
        path: '/players',
        name: 'players',
        component: Players,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/games',
        name: 'games',
        component: Games
    },
    {
        path: "/drunkenPirates",
        name: "drunkenPirates",
        component: PiccoloGame,
        beforeEnter: checkPlayers
    },
    {
        path: "/half4",
        name: "Half4",
        component: Half4Game,
        beforeEnter: checkPlayers
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if(requiresAuth && !currentUser) next('login');
    else if(!requiresAuth && currentUser) next('players');
    else next();
});


function checkPlayers(to, from, next) {
    if (players.state.players.length < 3) {
        router.push({ name: 'Players' });
    } else {
        next()
    }
}

export default router
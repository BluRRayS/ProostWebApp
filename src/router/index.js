import Vue from 'vue';
import VueRouter from 'vue-router';
import Players from '../views/Players.vue';
import Games from '../views/Games.vue';
import PiccoloGame from '../views/PiccoloGame.vue';
import players from '../store/Modules/players';
import Half4Game from '../views/Half4Game.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Account from '../views/Account.vue';
import ForgotPassword from '../views/ForgotPassword.vue'
import firebase from 'firebase';
import DrunkenPirates from '../views/DrunkenPirates.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Players,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '*',
        component: Players,
        meta: {
            requiresAuth: true
        }
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
        component: Games,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/account',
        name: 'account',
        component: Account,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/drunkenPirates",
        name: "drunkenPirates",
        component: DrunkenPirates,
        beforeEnter: checkPlayers,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/piccolo",
        name: "piccolo",
        component: PiccoloGame,
        beforeEnter: checkPlayers,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/half4",
        name: "Half4",
        component: Half4Game,
        beforeEnter: checkPlayers,
        meta: {
            requiresAuth: true
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    const isAuthenticated = firebase.auth().currentUser;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !isAuthenticated) next('/login');
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
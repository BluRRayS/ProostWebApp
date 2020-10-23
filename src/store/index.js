import Vue from 'vue';
import Vuex from 'vuex';
import players from './Modules/players';
import games from './Modules/games';
import snackbars from './Modules/snackbar'
import user from './Modules/user'
import gameSettings from './Modules/gameSettings'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
       players: players,
       games: games,
       snackbars: snackbars,
       user:user,
       gameSettings: gameSettings
    }
})
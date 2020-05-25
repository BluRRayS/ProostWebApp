import Vue from 'vue';
import Vuex from 'vuex';
import players from './Modules/players';
import games from './Modules/games';

// Load Vuex
Vue.use(Vuex)

// Create store
export default new Vuex.Store({
    modules: {
        players,
        games
    }
})
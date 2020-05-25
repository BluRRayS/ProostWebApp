const state = {
    players : [
        {
            id:1,
            name:"Joep",
            special: true
        },
        {
            id:2,
            name:"Stijn",
            special: false
        }
    ]
};

const getters = {
    allPlayers: (state) => state.players
};

const actions = { };

const mutations = {
    addPlayer(state, player) {
        state.players.push(player)
    },

    deletePlayer(state, id){
        // var index = state.players.findIndex(player => player.id == player)
        // state.players.splice(index, 1)
        state.players = state.players.filter(player => player.id !== id);
    },
};

export default{
    state,
    getters,
    actions,
    mutations
};
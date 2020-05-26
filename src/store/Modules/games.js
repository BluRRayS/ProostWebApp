const state = {
    games : [
        {
            id:1,
            name:"Drunken Pirates",
            description: "Speel het originele Drunken Pirates spel voor een leuke en rare avond!",
            imagePath: "logo.png",
            locked: false
        },
        {
            id:2,
            name:"Binnenkort meer",
            description: "Spanned he!",
            imagePath: "locked.png",
            locked: true
        }
    ]
};

const getters = {
    allGames: (state) => state.games,
    gameById: state => (id) => {
        return state.games.find(game => game.id === id)
    }
};

const actions = { };

const mutations = {
};

export default{
    state,
    getters,
    actions,
    mutations
};
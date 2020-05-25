const state = {
    games : [
        {
            id:1,
            name:"Drunken Pirates",
            description: "Speel het originele Drunken Pirates spel voor een leuke en rare avond",
            imagePath: ""
        }
    ]
};

const getters = {
    allGames: (state) => state.games
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
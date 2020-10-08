const state = {
    games : [
        {
            id:1,
            name:"Drunken Pirates",
            description: "Speel het originele Drunken Pirates spel voor een leuke en rare avond!",
            imagePath: "logo.png",
            route: "DrunkenPirates",
            locked: false
        },
        {
            id:2,
            name:"Half 4tje",
            description:"Wanneer het al zo laat is en het niveau toch al zo diep gezonken is, dan is het tijd om elkaar filosofische vragen te stellen.",
            imagePath:"clock.png",
            route: "Half4",
            locked: false
        },
        {
            id:3,
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
const state = {
    settings: {
        drinkTypes: [{
                id: 0,
                name: "slok",
                minAmount: 1,
                maxAmount: 5,
                icon: "mdi-beer",
                chanceMultiplier: 6,
                IsUsed: true
            },
            {
                id: 1,
                name: "half adtje",
                minAmount: 1,
                maxAmount: 2,
                icon: "mdi-glass-mug-variant",
                chanceMultiplier: 2,
                IsUsed: true
            },
            {
                id: 2,
                name: "adtje",
                minAmount: 1,
                maxAmount: 1,
                icon: "mdi-keg",
                chanceMultiplier: 1,
                IsUsed: true
            },
            {
                id: 3,
                name: "shotje",
                minAmount: 1,
                maxAmount: 5,
                icon: "mdi-glass-cocktail",
                chanceMultiplier: 2,
                IsUsed: true
            },
        ],
    }
};

const getters = {
    GetDrinkTypes: (state) => state.settings.drinkTypes,
};

const actions = {};

const mutations = {
    setUseDrinkType(state, payload) {
        const item = state.settings.drinkTypes.find(x => x.id === payload.id);
        Object.assign(item, { IsUsed: payload.IsUsed })
    },
    setMinAmount(state, payload) {
        const item = state.settings.drinkTypes.find(x => x.id === payload.id);
        Object.assign(item, { minAmount: payload.minAmount })
    },
    setMaxAmount(state, payload) {
        const item = state.settings.drinkTypes.find(x => x.id === payload.id);
        Object.assign(item, { maxAmount: payload.maxAmount })
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};
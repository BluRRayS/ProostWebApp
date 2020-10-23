const state = {
    snackbars:[]
};

const getters = {};

const actions = { 
    setSnackbar({commit},snackbar){
        snackbar.show = true;
        snackbar.color = snackbar.color || 'green';
        snackbar.timeout = snackbar.timeout || 2000;
        commit('SET_SNACKBAR',snackbar)
    }
};

const mutations = {
    SET_SNACKBAR(state, snackbar)
    {
        state.snackbars = state.snackbars.concat(snackbar);
    },
};

export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
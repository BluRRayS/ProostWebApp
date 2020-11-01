const state = {
    user: null,
    isAuthenticated: false,
    showBottomBar: true
};

const mutations = {
    SET_USER(state, user) {
        state.user = user;
    },
    SET_ISAUTHENTICATED(state, isAuthenticated) {
        state.isAuthenticated = isAuthenticated;
    },
    setShowBottomBar(state, payload) {
        state.showBottomBar = payload;
    },
};

const getters = {
    getUser: (state) => state.user,
    isAuthenticated: (state) => state.isAuthenticated,
    getDisplayInitials: function(state) {
        let initials = state.user.displayName.charAt(0);
        initials += state.user.displayName.slice(-1);
        return initials
    },
    getShowBottomBar: (state) => state.showBottomBar
};

const actions = {
    setUser({ commit }, payload) {
        commit('SET_USER', payload);
    },
    setIsAuthenticated({ commit }, payload) {
        commit('SET_ISAUTHENTICATED', payload);
    },
    autoSignIn({ commit }, payload) {
        commit('SET_USER', payload);
        commit('SET_ISAUTHENTICATED', true);
    }
};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
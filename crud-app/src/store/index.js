import { createStore } from "vuex";

export default createStore({
  state: {
    activities: JSON.parse(localStorage.getItem("activities")) || [],
  },
  mutations: {
    ADD_ACTIVITY(state, activity) {
      state.activities.push(activity);
      localStorage.setItem("activities", JSON.stringify(state.activities));
    },
    TOGGLE_ACTIVITY(state, id) {
      const activity = state.activities.find((act) => act.id === id);
      if (activity) {
        activity.completed = !activity.completed;
      }
      localStorage.setItem("activities", JSON.stringify(state.activities));
    },
    DELETE_ACTIVITY(state, id) {
      state.activities = state.activities.filter((act) => act.id !== id);
      localStorage.setItem("activities", JSON.stringify(state.activities));
    },
  },
  actions: {
    addActivity({ commit }, activity) {
      commit("ADD_ACTIVITY", activity);
    },
    toggleActivity({ commit }, id) {
      commit("TOGGLE_ACTIVITY", id);
    },
    deleteActivity({ commit }, id) {
      commit("DELETE_ACTIVITY", id);
    },
  },
});

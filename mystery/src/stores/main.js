import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

Vue.use(Vuex);

function makeDogFromUrl(url) {
  let parts = url.split('/');
  let lenParts = parts.length;
  let filename = parts[lenParts-1];
  let breed = parts[lenParts-2];

  return {url, filename, breed, uuid: Date.now(), like: false};
}

const store = new Vuex.Store({
  state: {
    dogs: localStorage.dogs? JSON.parse(localStorage.dogs) : []
  },
  actions: {
    ADD_RANDOM_DOG({ commit }) {
      api
        .get('/breeds/image/random')
        .then((resp) => {
          let url = resp.data.message;
          commit("ADD_DOG_MUTATION", makeDogFromUrl(url));
        });
    },
    ADD_NEW_DOG({ commit }, breed) {
      api
        .get(`/breed/${breed}/images/random`)
        .then((resp) => {
          let url = resp.data.message;
          commit("ADD_DOG_MUTATION", makeDogFromUrl(url));
        });
    },
    LIKE_DOG({ commit }, dog) {
      commit("LIKE_DOG_MUTATION", dog);
    },
    UNLIKE_DOG({ commit }, dog) {
      commit("UNLIKE_DOG_MUTATION", dog);
    },
    DELETE_DOG({ commit }, dog) {
      commit("DELETE_DOG_MUTATION", dog);
    }
  },
  mutations: {
    ADD_DOG_MUTATION(state, dog) {
      state.dogs.push(dog);
      localStorage.dogs = JSON.stringify(state.dogs);
    },
    LIKE_DOG_MUTATION(state, dog) {
      let srslyDog = state.dogs.find(x => x.uuid === dog.uuid);
      srslyDog.like = true;
      localStorage.dogs = JSON.stringify(state.dogs);
    },
    UNLIKE_DOG_MUTATION(state, dog) {
      let srslyDog = state.dogs.find(x => x.uuid === dog.uuid);
      srslyDog.like = false;
      localStorage.dogs = JSON.stringify(state.dogs);
    },
    DELETE_DOG_MUTATION(state, dog) {
      state.dogs = state.dogs.filter(x => x.uuid !== dog.uuid);
      localStorage.dogs = JSON.stringify(state.dogs);
    }
  },
  getters: {
    liked: state => {
      return state.dogs.filter(dog => dog.liked);
    },
    all_dogs: state => {
      return state.dogs;
    }
  }
});

export default store;
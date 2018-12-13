import Vuex from 'vuex'
import api from '@api'

function makeDogFromUrl(url) {
  let parts = url.split('/');
  let lenParts = parts.length;
  let filename = parts[lenParts-1];
  let breed = parts[lenParts-2];

  return {url, filename, breed, like: false};
}

const store = new Vuex.Store({
  state: {
    dogs: []
  },
  actions: {
    ADD_RANDOM_DOG({ commit }) {
      api
        .get('/breeds/image/random')
        .then((resp) => {
          let url = resp.message;
          commit("ADD_DOG_MUTATION", makeDogFromUrl(url));
        });
    },
    ADD_NEW_DOG({ commit }, breed) {
      api
        .get(`/breeds/image/breed/${breed}/random`)
        .then((resp) => {
          let url = resp.message;
          commit("ADD_DOG_MUTATION", makeDogFromUrl(url));
        });
    },
    LIKE_DOG({ commit }, dog) {
      commit("LIKE_DOG_MUTATION", dog);
    }
  },
  mutations: {
    ADD_DOG_MUTATION(state, dog) {
      state.dogs.push(dog);
    },
    LIKE_DOG_MUTATION(state, dog) {
      let dog = state.dogs.find(x => x.filename === dog.filename);
      dog.like = true;
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
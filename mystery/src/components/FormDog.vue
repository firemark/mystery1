<template>
  <b-form inline>
    <b-form-select v-model="breed" :options="breedList" class="mb-3" />
    &nbsp;
    <b-button variant="primary" @click="addDog(breed)" class="mb-3">
      Add dog according to breed
    </b-button>
    &nbsp;
    <b-button variant="secondary" @click="addRandomDog" class="mb-3">
      Add random dog
    </b-button>
  </b-form>
</template>

<script>
  export default {
    data() {
      return {
        breed: '',
        breedList: [
          "african",
          "airedale",
          "akita",
          "appenzeller",
          "basenji",
          "beagle",
          "bluetick",
          "borzoi",
          "bouvier",
          "boxer",
          "brabancon",
          "briard",
          "bulldog",
          "husky",
          "keeshond",
          "kelpie",
          "komondor",
          "kuvasz",
          "labrador",
          "leonberg",
          "lhasa",
          "malamute",
          "malinois",
          "maltese"
        ].map(breed => ({value: breed, text: breed}))
      }
    },
    methods: {
      addDog(breed) {
        this.$store.dispatch('ADD_NEW_DOG', breed);
      },
      addRandomDog() {
        this.$store.dispatch('ADD_RANDOM_DOG');
      }
    }
  }
</script>

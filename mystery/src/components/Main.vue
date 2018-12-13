<template>
  <div class="hello">
    <h1>DOGS</h1>
    <ul>
      <li v-for="dog in dogs">
        <strong>{{ dog.url }}</strong>
        <button>like!</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      show: String
    },
    methods: {
      likeDog(dog) {
        this.$store.dispatch('LIKE_DOG', dog);
      },
      addDog(breed) {
        this.$store.dispatch('ADD_DOG', breed);
      },
      addRandomDog() {
        this.$store.dispatch('ADD_RANDOM_DOG');
      }
    },
    computed: {
      dogs() {
        return this.$store.getters.all_dogs;
      }
    }
  }
</script>

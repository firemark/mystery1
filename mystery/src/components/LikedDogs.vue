<template>
  <div>
    <h1>LIKED DOGS</h1>
    <DogList :dogs="dogs"/>
  </div>
</template>

<script>
  import DogList from './DogList.vue'

  export default {
    components: {
      DogList,
    },
    computed: {
      dogs() {
        return this.$store.getters.liked_dogs;
      }
    }
  }
</script>

<template>
  <div>
    <h1>NOT LOVED DOGS</h1>
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
        return this.$store.getters.unliked_dogs;
      }
    }
  }
</script>

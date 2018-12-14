<template>
  <div>
    <h1>DOGS PANEL</h1>
    <FormDog />
    <DogList :dogs="dogs"/>
  </div>
</template>

<script>
  import DogList from './DogList.vue'
  import FormDog from './FormDog.vue'

  export default {
    components: {
      DogList,
      FormDog
    },
    computed: {
      dogs() {
        return this.$store.getters.all_dogs;
      }
    }
  }
</script>

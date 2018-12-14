<template>
  <b-card-group columns>
    <DogCard v-for="dog in dogs" :key="dog.uuid" :dog="dog" />
  </b-card-group>
</template>
<script>
  import DogCard from './DogCard.vue'
  export default {
    components: {
      DogCard
    },
    props: ['dogs']
  }
</script>

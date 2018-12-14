<template>
  <div>
    <div v-if="dog">
      <h3>Card</h3>
      <DogCard :dog="dog" info="without" />
      <h3>Additional Info</h3>
      <ul>
        <li>{{ dog.filename }}</li>
        <li>{{ dog.url }}</li>
        <li>{{ dog.breed }}</li>
      </ul>
    </div>
    <div v-else>
      <h1 class="text-center">404 ;_;</h1>
    </div>
    <b-button variant="info" @click="goBack()">Go back</b-button>
  </div>
</template>
<script>
  import DogCard from './DogCard.vue'

  export default {
    components: {
      DogCard
    },
    computed: {
      dog() {
        let uuid = this.$route.params.uuid;
        return this.$store.getters.all_dogs.find(x => x.uuid === uuid);
      }
    },
    methods: {
      goBack() {
        window.history.length > 1
          ? this.$router.go(-1)
          : this.$router.push('/');
      }
    }
  }
</script>

<template>
    <b-card
          :title="dog.breed"
          :img-src="dog.url"
          :img-alt="dog.breed"
          style="width: 20rem;"
          tag="article">
      <b-button v-if="!dog.like" variant="primary" @click="likeDog()">Like</b-button>
      <b-button v-else variant="secondary" @click="unLikeDog()">Unlike</b-button>
      &nbsp;
      <b-button variant="warning" @click="deleteDog()">Delete</b-button>
  </b-card>
</template>
<script>
  export default {
    props: ['dog'],
    methods: {
      likeDog() {
        this.$store.dispatch('LIKE_DOG', this.dog);
      },
      unLikeDog() {
        this.$store.dispatch('UNLIKE_DOG', this.dog);
      },
      deleteDog() {
        this.$store.dispatch('DELETE_DOG', this.dog);
      }
    }
  }
</script>

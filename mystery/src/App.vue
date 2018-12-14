<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-brand>DOGS</b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item> <router-link to="/">Main</router-link> </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <b-container>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

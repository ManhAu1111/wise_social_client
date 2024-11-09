<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AuthComponent from './views/AuthComponent.vue';
import IndexComponent from './views/IndexComponent.vue';
import MyProfileComponent from './views/MyProfileComponent.vue';
import UserProfileComponent from './views/UserProfileComponent.vue';
import MessageComponent from './views/MessageComponent.vue';
</script>

<template>
  <!-- <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/auth">Login & register </RouterLink>
        <RouterLink to="/index">Index</RouterLink>
        <RouterLink to="/my_profile">My Profile</RouterLink>
        <RouterLink to="/user-profile">User Profile</RouterLink>
        <RouterLink to="/message">Message</RouterLink>
      </nav>
    </div>
  </header> -->

  <RouterView />
</template>
<script>
  export default {
    methods: {
      clickMe() {
        alert(0);
      }
    }
  }
</script>
<style scoped>
</style>

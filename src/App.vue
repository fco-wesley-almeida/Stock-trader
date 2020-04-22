<template>
  <v-app>
    <Header></Header>
    <v-content>
      <transition name="slide" type="animation" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
import Header from '@/components/widgets/Header/index.vue'

export default {
  components: { Header },

  created () {
  // https://console.firebase.google.com/u/0/project/stock-trader-e1723/database
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* @keyframes slide-in{
  from {transform: translateY(40px);}
  to {transform: translateY(0px);}
}

@keyframes slide-out{
  from {transform: translateY(0px);}
  to {transform: translateY(40px);}
} */

/* .slide-enter{
  opacity: 0;
}
.slide-enter-active{
  animation: slide-in 0.5s ease;
  transition: opacity 0.5s;
}
.slide-enter-to{
  opacity: 1;
}

.slide-leave{
  opacity: 1;
}
.slide-leave-active{
  animation: slide-out 0.5s ease;
  transition: opacity 0.5s;
}
.slide-leave-to{
  opacity: 0;
} */
</style>

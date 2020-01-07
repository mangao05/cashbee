<template>
  <div id="app" class="container">
      <navbar />
      <router-view />
      <footer1 /> 
  </div>
</template>

<script>
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';
export default {
  name: 'App',
  components : {
    'navbar' : Navbar,
    'header1' : Header,
    'footer1' : Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

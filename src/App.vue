<template>
  <div id='App'>
      <tabbar></tabbar>
  </div>
</template>

=<script>
import Tabbar from './views/Tabbar/Tabbar.vue';

  export default {
  name: 'App',
  components: {
    Tabbar,
  }

}
</script>

<style>
a,div{
  -webkit-tap-highlight-color:rgba(255,0,0,0);
  }
</style>

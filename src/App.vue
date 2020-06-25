<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import 'normalize.css'

import Header from './components/Header'


export default {
  name: 'App',
  components: {
    Header
  }
}

</script>



<style pronped>
#app {
  margin: 0;
  font-family: Hiragino Kaku Gothic ProN,"\30E1\30A4\30EA\30AA",sans-serif;
}

</style>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

import firebase from 'firebase'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  created(){
    firebase.database().ref('/')
      .once('value', function (snapshot) {
        console.log(snapshot.val())
      })
  }
}
</script>
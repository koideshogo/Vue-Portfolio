<template>
  <div class="hero-contens">
    <div class="hero-contents-title">
      <h1 class="title">KOIDE SHOGO PORTFOLIO</h1>
    </div>
    <img class="TopImage" src="@/assets/KOIDESHOGO.jpg" width="100%"/>
    <vue-typer class="hero-typer"
      :text='["お忙しいところ閲覧いただきましてありがとうございます。"]'
      :repeat='0'
      :shuffle='false'
      initial-action='typing'
      :pre-type-delay='800'
      :type-delay='70'
      :pre-erase-delay='2000'
      :erase-delay='250'
      erase-style='select-all'
      :erase-on-complete='false'
      caret-animation='blink'
    ></vue-typer>
</div>
</template>


<script>
import { VueTyper } from 'vue-typer'
import { mapGetters } from 'vuex'
import VueMq from 'vue-mq'

export default {
  name: "Home",
  components: {
     VueTyper,
     VueMq,
    breakpoints: { // default breakpoints - customize this
      sm: 450,
      md: 1250,
      lg: Infinity,
    }
  }
}


</script>

<style scoped>


.hero-contens{
  top: 0;
  height: 100vh;
  position: relative;
  left: 0;
  right: 0;
  width: 65%;
  margin: auto;
}


  h1 {
    font-size: 2.723vw;
    line-height: 1;
    margin: .67em 0 0;
    position: absolute;
    top: 32%;
    z-index: 98;
    left: 18%;

}


  .TopImage {
    position: absolute;
    top: 25%;
    right: 0; 
    left: 0;
  }
  
  .hero-typer {
    position: absolute;
    left: 25%;
    top: 45%;
    margin: auto;
    color: black;
    z-index: 10;
    font-family: Geneva,Tahoma,Verdana,sans-serif;
    letter-spacing: .05em
  }


  @media screen and (max-width: 500px){
  h1,.hero-typer{
    font-size: 1.0rem;
    writing-mode: vertical-rl;
    top: 12%;
    padding: 50px;
  }
}
  @media screen and (max-width: 500px){
  h1{
    top: 22%;
  }
}
</style>

<template>
  <header class="header">
    <ul class="hero-grobalnav__list">
      <li><router-link class="hero-grobalnav__item" to="/" >HOME</router-link></li>
      <li><router-link class="hero-grobalnav__item" to="/about">ABOUT ME</router-link></li>
      <li><router-link class="hero-grobalnav__item" to="/skills">SKILL SETS</router-link></li>
      <li><router-link class="hero-grobalnav__item" to="/rails">Ruby on Rails</router-link></li>
      <li><router-link class="hero-grobalnav__item" to="/vue">Vue.js</router-link></li>
      <li><router-link class="hero-grobalnav__item" to="/github">Git hub</router-link></li>
      <li><router-link class="hero-grobalnav__item" to="/contact">CONTACT</router-link></li>
    </ul>
  </header>
</template>

<script>
import { Slide } from 'vue-burger-menu'

export default {
  name: 'Header',
  components: {
    Slide,

    }
}

</script>


<style>
.title-header {
  position: fixed;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  top: 4vw;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0 2.7rem 0 5.3rem;
  z-index: 12;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

a.router-link-exact-active{
  text-decoration: none;
  color: black;
}


.hero-grobalnav__list {
  left: 0;
  right: 0;
  top: 5%;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  position: absolute;
  list-style: none;
  justify-content: space-evenly;
  z-index: 99;
}

.hero-grobalnav__item {
  color: black;
  flex-wrap: wrap;
  margin: auto;
  text-decoration: none;
}



  @media screen and (max-width: 500px){
    .hero-grobalnav__item {
      font-size: 0.5rem;
    }
  }

  @media screen and (max-width: 479px) { 
    .hero-grobalnav__list {
      padding: 5px;
      width:55%;
      font-size: 0.5rem;
    }
    
  }


</style>
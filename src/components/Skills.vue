<template>
  <div class="toppage-contents-area">
      <div class="toppage-contents__section-title">SKILL SETS</div>
      <div class="skill-parentcontents">
        <div class="skill-childcontents">
          <div class="skill-uppercontents">
              <ul class="skill-lists">
                <li class="skill-item">
                  <font-awesome-icon class="sns-icon" :icon="['fab', 'html5']"/>
                  <p>HTML / haml</p>
                </li>
                <li class="skill-item">
                  <font-awesome-icon class="sns-icon" :icon="['fab', 'sass']"/>
                  <p>CSS / SCSS / SASS</p>
                </li>
                <li class="skill-item">
                  <font-awesome-icon  class="sns-icon"  icon="gem" />
                  <p>Ruby</p>
                </li>
                <li class="skill-item">
                  <font-awesome-icon  class="sns-icon" icon="gem" />
                    <p>Ruby on Rails</p>
                    </li>
                <li class="skill-item">
                  <font-awesome-icon class="sns-icon" :icon="['fab', 'github']"/>
                  <p>Git / Github</p>
                </li>
              </ul>
          </div>
          <div class="skill-lowercontents">
            <ul class="skill-lists">
              <li class="skill-item">
                <font-awesome-icon class="sns-icon" :icon="['fab', 'js']"/>
                <p>JavaScript</p>
              </li>
                <li class="skill-item">
                  <font-awesome-icon class="sns-icon" icon="rss" />
                  <p>jQuery</p>
                </li>
              <li class="skill-item">
                <font-awesome-icon class="sns-icon" :icon="['fab', 'aws']"/>
                <p>AWS</p>
              </li>
              <li class="skill-item">
                <font-awesome-icon class="sns-icon" :icon="['fab', 'vuejs']"/>
                <p>Vue.js</p>
              </li>
              <li class="skill-item">
                <font-awesome-icon   class="sns-icon" icon="pencil-alt" />
                <p>日々学習中...</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// FontAwesomeIcon//
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faCoffee, faBlog, faGem, faPencilAlt,faRss } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faHtml5, faSass, faJs, faAws, faVuejs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faSpinner, faCoffee, faRss, faPencilAlt, faTwitter, faGithub, 
            faBlog, faGem, faHtml5, faSass, faJs, faAws, faVuejs)

export default {
  name: 'Skills',
    components: {
    faSpinner,
    FontAwesomeIcon
  }
}
</script>

<style scoped>

.skill-parentcontents {
  padding: 0.5em 1em;
  margin: 2em 0;
  border-radius: 9px;
  width: 90%;
  margin: auto;
  height: 90%;
  margin-bottom: 3%;
}

.skill-item {
  padding: 7.5em 3em;
  margin: 2em 0;
  background: #F5F5F5;
  border-bottom: solid 6px;
  border-radius: 9px;
  width: 10%;
  margin: auto;
  margin-bottom: 3%;
  margin-top: 3%;
  text-align: center;
}
.skill-childcontents {
  width: 100%;
}

.skill-lists {
  display: flex;
}

.sns-icon {
  font-size: 120px;
  margin: 0 auto;
}
p {
  text-align: center;
}
</style>
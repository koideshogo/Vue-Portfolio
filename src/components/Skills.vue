<template>
  <div class="toppage-contents-area">
      <div class="toppage-contents__section-title">SKILL SETS</div>
      <div class="study-parentcontents">
        <div class="study-childcontents">
          <div class="study-leftbox">
              <img class="mokumoku-img" src="@/assets/mokumoku.jpg" width="500px"/>
          </div>
          <div class="study-rightbox">
            <div class="study-title">
              <p>もくもく会</p>
            </div>
            <div class="study-copy">
              <ul class="study-text">
                <li class="study-item">
                  <p>積極的にもくもく会にも参加し同じ志をもつ方々とコミュニケーションを取っています。</p>
                </li>
                <li class="study-item">
                  <p>所属するオンラインサロンでオンラインもくもくにも参加し情報交換。</p>
                </li>
                <li class="study-item">
                  <p>
                    →　積極性、コミュニケーション能力があります。
                  </p>
                <li class="study-item">
                  <p>
                    以下学習中のスキルセットになります。
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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
.study-parentcontents {
  width: 85%;
  background: #F5F5F5;
  padding: 3em 1em;
  margin: auto;
  margin-bottom: 3%;
  border-bottom: solid 6px ;
  border-radius: 9px;
}

.study-childcontents {
  display: flex;
}

.study-title {
  font-size: 40px;
  letter-spacing: 4.5px;
  font-family: Geneva,Tahoma,Verdana,sans-serif;
  letter-spacing: .18em;
  font-weight: 700;
}

.study-rightbox {
  width: 100%;
}


.appcontents-child {
  display: flex;
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

@media screen and (max-width: 479px) {
  .mokumoku-img {
    width: 350px;
    text-align: center;
  }
}

@media screen and (max-width: 479px) {
  .study-leftbox {
    text-align: center;
  }
}

@media screen and (max-width: 479px) {
  .skill-lists, .study-childcontents {
    display: block;
    margin: 0 auto;
  }
}

@media screen and (max-width: 479px) {
  .skill-item {
    width: 100%;
  }
}

@media screen and (max-width: 479px) {
  .skill-parentcontents {
    padding: 0;
    margin: 0;
  }
}


</style>
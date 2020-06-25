<template>
  <div class="toppage-contents-area">
      <div class="toppage-contents__section-title">ABOUT ME</div>
      <!-- トップセクション -->
      <div class="topcontents-parent">
        <div class="topcontents-child">
          <div class="top-leftbox">
            <div class="top-icon">
              <img class="About-Image" src="@/assets/Aboutme.jpg" width="100px"/>
            </div>
            <div class="sns">
              <ul class="sns-icon-list">
                <a href="https://twitter.com/shogohelloshogo"><li class="sns-icon"><font-awesome-icon class="sns-icon" :icon="['fab', 'twitter']"/></li></a>
                <a href="https://github.com/koideshogo"><li class="sns-icon"><font-awesome-icon class="sns-icon" :icon="['fab', 'github']"/></li></a>
                <a href="https://koisholog.com/"><li class="sns-icon"><font-awesome-icon icon="blog" /></li></a>
              </ul>
            </div>
          </div>
          <div class="top-rightbox">
            <div class="top-title">
              <p>PROFILE</p>
            </div>
            <div class="top-copy">
              <p>小出 将伍と申します。前職の業務効率化をきっかけに2019.09からプログラミング学習を開始。
                  現在はフロントエンドに夢中になっており毎日学習を進めております。現在転職活動中。
                  学んだことはアウトプット（Twitter, ブログ）することを心がけております。
              </p>
             </div>
            <div>
          </div>
        </div>
        </div>
      </div>
      <!-- ミドルセクション -->
      <div class="middlecontents-parent">
        <div class="middlecontents-child">
          <div class="middle-title">
            <p>HISTORY</p>
          </div>
          <div class="middle-copy">
              <p><strong>2017.03</strong></p>
              関西大学総合情報学部総合情報学科　卒業
              <p><strong>2017.04</strong></p>
              梅田美容商事株式会社に入社
              <p>美容に興味があったため美容中心に就職活動を行い、座談会にて先輩社員のエピソードに感銘を受け入社を決意。
              営業部に配属。</p>
              <p><strong>2019.09</strong></p>
              TECH::EXPERT(現TECHCAMP)にて学習開始
              <p>業務効率化をきっかけにプログラミングの学習を開始。</p>
              <p><strong>2020.03</strong></p>
              <p>TECH::EXPERT(現TECHCAMP)卒業</p>
              プログラミング学習の習慣化、オフラインでの仲間から受ける刺激は有意義に学習ができました。
              <p><strong>2020.06</strong></p>
              <p>梅田美容商事株式会社　退職</p>
              本格的にエンジニアとしての道を歩んでいきたい気持ちが強くなり退職を決意。
              <p><strong>2020.06~</strong></p>
              転職活動開始
              日々学習を行いながら転職活動中
          </div>
        </div>
      </div>
      <!-- ボトムセクション -->
      <div class="bottomcontents-parent">
        <div class="bottomcontents-child">
          <div class="bottom-title">ENGINEERS</div>
          <div bottom-copy>
            <strong><p>どのようなエンジニアになりたいか</p></strong>
            <p>謙虚に学び続け、変化による価値を生み出し、多くの人の役に立てるエンジニアになりたい</p>
            <ul>
              <strong><li>変化を生み出す</li></strong>
              <p> 現状に満足せず、常に学び続けていけるエンジニアでありたいと思っております。
                謙虚に学び続けることによって自分に足りないものを日々認識していき自分自身をアップデートしていきたいです。
                人生において、一生学んでいきたいと考えます。
              </p>
              <strong><li>謙虚に学び続ける</li></strong>
              <p>常識を疑い、どう改善していけば良いか考え行動にうつしていきたいです何かに挑戦することはかなり刺激的で、新しい視点を見出すことができると考えています。
                また、それにより自己を高めていけると考えています。
              </p>
              <strong><li>価値を生む</li></strong>
              <p>価値とは、サービスを利用して関わってくださったお客様の喜びの数だと考えています。私が提供するサービスによって多く人の人生が豊になったり、
                笑顔が増え、喜んでもらえる事を意識して行動しております。
              </p>
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
import { faSpinner, faCoffee, faBlog } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSpinner, faCoffee, faTwitter, faGithub, faBlog)

export default {
  name: 'About',
  components: {
    faSpinner,
    FontAwesomeIcon
  }
}
</script>


<style>
.toppage-contents-area {
  width: 100vw;
  min-height: 100vh;
  opacity: 1;
  -webkit-transition: all .2s;
  transition: all .2s;
  position: relative;
  overflow: hidden;
  top: 1px;
}

.topcontents-parent {
  padding: 0.5em 1em;
  margin: 2em 0;
  color: black;
  background: #F5F5F5	;
  border-bottom: solid 6px ;
  border-radius: 9px;
  width: 80%;
  margin: auto;
  margin-bottom: 3%;
}

.About-Image {
  width:200px;
	height:200px;
	object-fit:cover;
	border-radius:50%;
	object-position:-2px 0px;
}


li {
  list-style: none;
}

.sns-icon-list {
  display: flex;
}
.sns-icon {
  font-size: 30px;
  padding: 3px;
}

.top-leftbox {
  width: 20%;
  margin: 0;
  margin-left: 10%;
}

.top-rightbox {
  margin-left: 9%;
  width: 50%;
}

.topcontents-child {
  display: flex;
}

.toppage-contents__section-title {
  font-size: 40px;
  text-align: center;
  letter-spacing: 4.5px;
  margin: 16.71vh auto 13.5vh;
  font-family: Geneva,Tahoma,Verdana,sans-serif;
  letter-spacing: .18em;
  font-weight: 700;
}

.toppage-contents__section-copy {
    width: 100%;
    font-size: 18px;
    line-height: 1.88;
    letter-spacing: -.025em;
    overflow-wrap : break-word;
}

.toppage-contents__section-link{
  position: absolute;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  right: 0;
  width: 150px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #969696;
  font-size: 12px;
  text-decoration: none;
  font-family: Geneva,Tahoma,Verdana,sans-serif;
  letter-spacing: .1em;
}


.top-title {
  font-size: 40px;
  letter-spacing: 4.5px;
  font-family: Geneva,Tahoma,Verdana,sans-serif;
  letter-spacing: .18em;
  font-weight: 700;
}

/* ミドルセクション */
.middlecontents-parent {
  padding: 0.5em 1em;
  margin: 2em 0;
  color: black;
  background: #F5F5F5	;
  border-bottom: solid 6px ;
  border-radius: 9px;
  width: 80%;
  margin: auto;
  margin-bottom: 3%;
}


.middlecontents-child {
  width: 30%;
  margin: auto;
}

.middle-title {
   font-size: 40px;
  letter-spacing: 4.5px;
  font-family: Geneva,Tahoma,Verdana,sans-serif;
  letter-spacing: .18em;
  font-weight: 700;
  text-align: center;
}

/* ボトムセクション */
.bottomcontents-parent {
    padding: 0.5em 1em;
  margin: 2em 0;
  color: black;
  background: #F5F5F5	;
  border-bottom: solid 6px ;
  border-radius: 9px;
  width: 80%;
  margin: auto;
}

.bottom-title {
  font-size: 40px;
  letter-spacing: 4.5px;
  font-family: Geneva,Tahoma,Verdana,sans-serif;
  letter-spacing: .18em;
  font-weight: 700;
  text-align: center;
}

.bottomcontents-child {
  margin: auto;
  text-align: center;
  width: 75%;
}
</style>
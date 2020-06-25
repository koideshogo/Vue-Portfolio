<template>
  <div class="toppage-contents-area">
    <div class="toppage-contents__section-title">Ruby on Rails</div>
      <div class="appcontents-parent">
        <div class="appcontents-child">
          <div class="app-leftbox">
            <div class="app-image">
              <img class="lsp-gif" src="@/assets/app.gif"/>
            </div>
          </div>
          <div class="app-rightbox">
            <div class="app-title">
              <p>LEDEAL-STUDY-PLUS</p>
            </div>
            <div class="app-overreview">
               <strong><p>アプリ概要</p></strong>
               <p>動画を投稿、インプット、アウトプットできるプラットフォーム。</p>
            </div>
            <div class="app-comment">
               <strong><p>コメント / ポイント</p></strong>
               <p> メーカー様の新商品の座学での勉強会が、1回/月（５〜６時間）あり就業時間の
                  半分以上を取られてしまう現状を改善したいという思いで本アプリを作成しました。 
                  本アプリでは座学から動画学習にすることにより効率的な学習＆学習した内容を自
                  らが情報発信をし共有できる環境を目指しております。 
                  その環境を作り出すことによって社員一人ひとりに有意義な時間を過ごして欲しいと思っております。
              </p>
            </div>
            <div class="app-git">
               <strong><p>Git hub レポジトリ</p></strong>
               <a href="https://github.com/koideshogo/LEDEAL_STUDY_PLUS">https://github.com/koideshogo/LEDEAL_STUDY_PLUS</a>
            </div>
            <div class="app-tech">
               <strong><p>使用技術</p></strong>
               <p>haml + SASS +Rails(Unicorn) +Nginx + MySQL + JQuery + AWS(EC2,Route53)</p>
            </div>
            <div class="app-url">
               <strong><p>URL</p></strong>
               <a href="https://ledeal-study-plus.com">https://ledeal-study-plus.com</a>
            </div>
          </div>
        </div>
      </div>
      <div  class="appcontents-parent">
        <div class="appcontents-child">
          <div class="app-leftbox">
            <div class="app-image">
              <img class="lsp-gif" src="@/assets/fake-merc.png"/>
            </div>
          </div>
          <div class="app-rightbox">
            <div class="app-title">
              <p>共同開発</p>
            </div>
            <div class="app-overreview">
               <strong><p>アプリ概要</p></strong>
               <p>TECH::EXPERTにてアジャイル開発でチーム開発を行いました。</p>
            </div>
            <div class="app-comment">
               <strong><p>コメント / ポイント</p></strong>
               <p>共同開発を通して以下を学びました</p>
               <p>進捗管理（タスク開始時に、タスクの把握、必要な機能の炙り出し、完成度の目安を考えるようになったこと）・報連相の重要性</p>
               <p>チームで１つのことに取り組む楽しさ</p>
            </div>
            <div class="app-information">
                <div class="information-left">
                  <strong><p>アプリ使用情報</p></strong>
                  <p> ID/Pass </p>
                  <p>■ID: 61_mercari_wd</p>
                  <p>■Pass: 61wd</p>
                  <p>テスト用アカウント等</p>
                  <p>■出品者</p>
                  <p>・ゲストログインボタンを押すと自動生成されます。</p>
                </div>
                <div class="information-right">
                  <p>■購入者</p>
                  <p>・商品購入者と出品者は別にアカウントを作成する必要があります。</p>
                  <p>マイページ    →ログアウト → ゲストログインで再度作成して下さい。</p>
                  <p>■購入用カード情報</p>
                  <p>・番号：4242424242424242</p>
                  <p>・期限：12/20</p>
                  <p>・セキュリティコード：123</p>
                </div>
            </div>
            <div class="app-git">
               <strong><p>Git hub レポジトリ</p></strong>
               <a href="https://github.com/koideshogo/fake_merc">https://github.com/koideshogo/fake_merc</a>
            </div>
            <div class="app-tech">
               <strong><p>使用技術</p></strong>
               <p>haml + SASS +Rails(Unicorn) +Nginx + MySQL + JQuery + AWS(EC2,Route53,S3)</p>
            </div>
            <div class="app-url">
               <strong><p>URL</p></strong>
               <a href="https://fakemerc.fit/">https://fakemerc.fit/</a>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex'


export default {
  name: 'Rails'
}
</script>

<style>
.appcontents-parent {
  width: 90%;
  background: #F5F5F5;
  padding: 3em 1em;
  margin: auto;
  margin-bottom: 3%;
  border-bottom: solid 6px ;
  border-radius: 9px;
}
.appcontents-child {
  display: flex;
}

.app-rightbox {
  width: 50%;

}

.app-leftbox {
  width: 50%;
  padding: 10%;
}

.app-title {
  text-align: center;
  color: #000;
  font-size: 20px;
  font-weight: 600;
}


.lsp-gif {
  width: 80%;
}

.appcontents-parent__second {
  width: 90%;
  background: orange;
  padding: 3em 1em;
  margin: auto;
}

.app-information {
  display: flex;
}

a {
  color: black;
}
</style>
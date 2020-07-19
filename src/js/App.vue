<template>
  <div id="app">

    <h1>HTMLからOGPイメージを作るサンプル</h1>

    <label><input type="radio" value="gradient">グラデーション</label>
    <label><input type="radio" value="emoji">絵文字</label>
    <h2>テキストの設定</h2>
    <input type="text" v-model:value="newText" @keyup="addText" autofocus autocomplete="off">
    <input type="color" v-model:value="newTextColor" @change="addTextColor" autofocus autocomplete="off">

    <!--<div v-if="!gradient">-->
    <div id="container">
      <h2>絵文字の設定</h2>
      <div class="wrapper">
<!--        <div contenteditable="true" placeholder="Type here" v-text="newEmoji" @change="addEmoji" id="text-input">{{newEmoji}}</div>-->
<!--        <Editable></Editable>-->
        <Editable :content="newEmoji" @update="sync"></Editable>
        <!--        <input type="text" v-model:value="newEmoji" @change="addEmoji" id="text-input" autofocus autocomplete="off" contenteditable="true">-->
        <i class="fa fa-smile-o" id="icon" aria-hidden="true">a</i>
      </div>
    </div>
    <!--</div>-->

    <!--<div v-if="gradient">-->
    <!--<h2>グラデーションの設定</h2>-->
    <!--<input type="color" v-model:value="newGradientStart" @keyup.enter="addGradientStart" autofocus autocomplete="off">-->
    <!--<input type="color" v-model:value="newGradientEnd" @keyup.enter="addGradientEnd" autofocus autocomplete="off">-->
    <!--</div>-->

    <a href="" id="generateImage" download="generateImage.png">ダウンロード</a>

    <div id="target" class="c-img-ogp">
      <div class="c-img-ogp__area" :style="{color:newTextColor}">
        <p class="c-img-ogp__title">{{newText}}</p>
      </div>
      <div class="c-img-ogp__bg-wrap">
        <div class="c-img-ogp__bg js-ogp-emoji" :data-emoji="newEmoji">
          <ul class="c-img-ogp__bg-row js-ogp-bg">
            <li v-for="n in 5"><span class="c-img-ogp__icon" v-for="n in 5">{{newEmoji}}</span></li>
          </ul>
        </div>
      </div>
    </div>

    <hr>


  </div>
</template>

<script>
 import Editable from './component/Editable.vue';

 export default {
  name: "App",
  components: {
   Editable
  },
  data() {
   return {
    newText: 'イヌかわいい',
    newTextColor: '#F45C63',
    newEmoji: '🐶',
    newGradienColorStart: '#FFF',
    newGradienColorEnd: '#F45C63'
   };
  },
  methods: {
   addText() {
    generateImage();
   },
   addTextColor() {
    generateImage();
   },
   addEmoji() {
    console.log('addred emoji');
    generateImage();
   },
   sync(content) {
    this.newEmoji = content
   },
  }
 };
</script>
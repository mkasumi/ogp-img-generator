<template>
  <div id="app">

    <h1>HTMLからOGPイメージを作るサンプル</h1>

    <label><input type="radio" value="gradient">グラデーション</label>
    <label><input type="radio" value="emoji">絵文字</label>
    <h2>テキストの設定</h2>
    <input type="text" v-model:value="newText" @keyup="addText" autofocus autocomplete="off">
    <input type="color" v-model:value="newTextColor" @change="addTextColor" autofocus autocomplete="off">

    <div id="container">
      <h2>絵文字の設定</h2>
      <div class="wrapper">
        <div>
          <span style="font-size: 48px;">{{newEmoji}}</span>

          <button @click="toggleVisible"><img width="20" height="20" src="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhciIgZGF0YS1pY29uPSJzbWlsZSIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLXNtaWxlIGZhLXctMTYiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDk2IDUxMiI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjQ4IDhDMTExIDggMCAxMTkgMCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzODUgOCAyNDggOHptMCA0NDhjLTExMC4zIDAtMjAwLTg5LjctMjAwLTIwMFMxMzcuNyA1NiAyNDggNTZzMjAwIDg5LjcgMjAwIDIwMC04OS43IDIwMC0yMDAgMjAwem0tODAtMjE2YzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMyLTMyIDE0LjMtMzIgMzIgMTQuMyAzMiAzMiAzMnptMTYwIDBjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzItMzIgMTQuMy0zMiAzMiAxNC4zIDMyIDMyIDMyem00IDcyLjZjLTIwLjggMjUtNTEuNSAzOS40LTg0IDM5LjRzLTYzLjItMTQuMy04NC0zOS40Yy04LjUtMTAuMi0yMy43LTExLjUtMzMuOC0zLjEtMTAuMiA4LjUtMTEuNSAyMy42LTMuMSAzMy44IDMwIDM2IDc0LjEgNTYuNiAxMjAuOSA1Ni42czkwLjktMjAuNiAxMjAuOS01Ni42YzguNS0xMC4yIDcuMS0yNS4zLTMuMS0zMy44LTEwLjEtOC40LTI1LjMtNy4xLTMzLjggMy4xeiI+PC9wYXRoPjwvc3ZnPg==" alt=""></i>
          </button>
          <div v-if="isVisible">
            <Picker @select="changeEmoji" :native="true" :useButton="true" />
          </div>
        </div>
      </div>
    </div>

    <a href="" id="generateImage" download="generateImage.png">ダウンロード</a>

    <div id="target" class="c-img-ogp">
      <div class="c-img-ogp__area" :style="{color:newTextColor}">
        <p class="c-img-ogp__title">{{newText}}</p>
      </div>
      <div class="c-img-ogp__bg-wrap">
        <div class="c-img-ogp__bg js-ogp-emoji" :data-emoji="newEmoji">
          <div class="c-img-ogp__bg-row js-ogp-bg">
            <template v-for="n in 3">
              <span class="c-img-ogp__icon" v-for="n in 6">{{newEmoji}}</span>
              <span class="c-img-ogp__icon" v-for="n in 7">{{newEmoji}}</span>
            </template>
          </div>
        </div>
      </div>
    </div>

    <hr>


  </div>
</template>

<script>
import html2canvas from 'html2canvas';
import Editable from './component/Editable.vue';
import { Emoji, Picker } from 'emoji-mart-vue';


const generateImage = function() {

 html2canvas(document.getElementById("target"),{scale:2}).then(function(canvas) {
  //aタグのhrefにキャプチャ画像のURLを設定
  const imgData = canvas.toDataURL();
  document.getElementById("generateImage").href = imgData;
 });
}

window.addEventListener("load",function(){
 generateImage();
});


 export default {
  name: "App",
  components: {
   Editable,
   Picker,
   Emoji
  },
  data() {
   return {
    newText: 'イヌかわいい',
    newTextColor: '#F45C63',
    newEmoji: '🐶',
    newGradienColorStart: '#FFF',
    newGradienColorEnd: '#F45C63',
    emoji: ':dog:',
    isVisible: false,
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
    generateImage();
   },
   sync(content) {
    this.newEmoji = content;
    generateImage();
   },
   changeEmoji(emoji) {
    this.newEmoji = emoji.native,
    this.isVisible = !this.isVisible
   },
   toggleVisible(){
    this.isVisible = !this.isVisible
   },
   rotateEmoji:function(event){
    this.deg++;
    this.styleObject.transform = convertTranslate(this.deg);
   },
  },
 };
</script>
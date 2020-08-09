<template>
  <div id="app">
     <div class="p-content">
      <div class="p-content__control">

        <div class="c-form p-control__text">
          <label for="text" class="c-form__label">テキスト</label>
          <textarea id="text" class="c-form__control" v-model:value="newText" @keyup="addText" @input="addText" @change="addText" autocomplete="off"></textarea>
        </div>

        <div class="p-control__side">
          <div class="c-form is-inline p-control__side-color">
            <label for="text-color" class="c-form__label">テキストカラー</label>
            <input type="color" id="text-color" class="c-form__control" v-model:value="newTextColor" @change="addTextColor" autocomplete="off">
          </div>

          <div class="c-form p-control__side-emoji">
            <label for="emoji" class="c-form__label">絵文字</label>
            <div class="c-form__emoji">
              <emoji :emoji="emoji" set="twitter" :size="48" />
              <div class="c-form__emoji-picker">
                <button @click="toggleVisible" id="emoji" class="c-form__emoji-btn"><img width="20" height="20" src="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhciIgZGF0YS1pY29uPSJzbWlsZSIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLXNtaWxlIGZhLXctMTYiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDk2IDUxMiI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjQ4IDhDMTExIDggMCAxMTkgMCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzODUgOCAyNDggOHptMCA0NDhjLTExMC4zIDAtMjAwLTg5LjctMjAwLTIwMFMxMzcuNyA1NiAyNDggNTZzMjAwIDg5LjcgMjAwIDIwMC04OS43IDIwMC0yMDAgMjAwem0tODAtMjE2YzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMyLTMyIDE0LjMtMzIgMzIgMTQuMyAzMiAzMiAzMnptMTYwIDBjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzItMzIgMTQuMy0zMiAzMiAxNC4zIDMyIDMyIDMyem00IDcyLjZjLTIwLjggMjUtNTEuNSAzOS40LTg0IDM5LjRzLTYzLjItMTQuMy04NC0zOS40Yy04LjUtMTAuMi0yMy43LTExLjUtMzMuOC0zLjEtMTAuMiA4LjUtMTEuNSAyMy42LTMuMSAzMy44IDMwIDM2IDc0LjEgNTYuNiAxMjAuOSA1Ni42czkwLjktMjAuNiAxMjAuOS01Ni42YzguNS0xMC4yIDcuMS0yNS4zLTMuMS0zMy44LTEwLjEtOC40LTI1LjMtNy4xLTMzLjggMy4xeiI+PC9wYXRoPjwvc3ZnPg==" alt="絵文字を選択する"></button>
                <div v-if="isVisible">
                  <div class="p-control__side-picker">
                  <Picker @select="changeEmoji" title="絵文字を選んでね" emoji="point_up" set="twitter" useButton="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a href="" id="generateImage" class="c-btn" download="generateImage.png">ダウンロード</a>

      </div>

      <div class="p-content__preview">
        <div id="target" class="c-img-ogp">
          <div class="c-img-ogp__area" :style="{color:newTextColor}">
            <p class="c-img-ogp__title">{{newText}}</p>
          </div>
          <div class="c-img-ogp__bg-wrap">
            <div class="c-img-ogp__bg js-ogp-emoji" :data-emoji="emoji">
              <div class="c-img-ogp__bg-row js-ogp-bg">
                <template v-for="n in 3">
                  <span class="c-img-ogp__icon" v-for="n in 6"><emoji :emoji="emoji" set="twitter" :size="emojiSize" :backgroundImageFn="((set, sheetSize) => `/img/${set}/${sheetSize}.png`)" /></span>
                  <span class="c-img-ogp__icon" v-for="n in 7"><emoji :emoji="emoji" set="twitter" :size="emojiSize" :backgroundImageFn="((set, sheetSize) => `/img/${set}/${sheetSize}.png`)" /></span>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>

  </div>
</template>

<script>
import html2canvas from 'html2canvas';
import { Emoji, Picker } from 'emoji-mart-vue';

const generateImage = function() {

 let ratio = 4;
 if (matchMedia('(min-width: 630px)').matches) {
  ratio = 2;
 } else if (matchMedia('(min-width: 430px)').matches) {
  ratio = 3;
 }

 html2canvas(document.getElementById("target"),{scale:ratio}).then(function(canvas) {
  //aタグのhrefにキャプチャ画像のURLを設定
  const imgData = canvas.toDataURL();
  document.getElementById("generateImage").href = imgData;
 });
};

window.addEventListener("load",function(){
 generateImage();
});

 export default {
  name: "App",
  components: {
   Picker,
   Emoji
  },
  data() {
   let emojiSize = 24;
   if (matchMedia('(min-width: 630px)').matches) {
    emojiSize = 48;
   } else if (matchMedia('(min-width: 430px)').matches) {
    emojiSize = 32;
   }
   return {
    newText: 'りんごおいしい',
    newTextColor: '#F45C63',
    newGradienColorStart: '#FFF',
    newGradienColorEnd: '#F45C63',
    emoji: 'apple',
    isVisible: false,
    emojiSize: emojiSize,
   };
  },
  methods: {
   addText() {
    generateImage();
   },
   addTextColor() {
    generateImage();
   },
   changeEmoji(emoji) {
    this.emoji = emoji.id;
    this.isVisible = !this.isVisible;
    setTimeout(generateImage,500);
   },
   toggleVisible(){
    this.isVisible = !this.isVisible;
   },
  },
 };
</script>

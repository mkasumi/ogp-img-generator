import html2canvas from 'html2canvas';
import Vue from 'vue'
import App from './App.vue';
import EmojiPicker from "rm-emoji-picker";

window.addEventListener("load",function(){

 const icon      = document.getElementById('icon');
 const container = document.getElementById('container');
 const input     = document.getElementById('text-input');

 const picker = new EmojiPicker({
  sheets: {
   apple   : '../../node_modules/rm-emoji-picker/sheets/sheet_apple_64_indexed_128.png',
   google  : '../../node_modules/rm-emoji-picker/sheets/sheet_google_64_indexed_128.png',
   twitter : '../../node_modules/rm-emoji-picker/sheets/sheet_twitter_64_indexed_128.png',
   emojione: '../../node_modules/rm-emoji-picker/sheets/sheet_emojione_64_indexed_128.png'
  },
  positioning : "vertical"
 });
 picker.listenOn(icon, container, input);

 setInterval(() => {
  console.log(picker.getText());
 }, 3000);
});

var generateImage = function() {
 html2canvas(document.getElementById("target"),{scale:2}).then(function(canvas) {
  //aタグのhrefにキャプチャ画像のURLを設定
  const imgData = canvas.toDataURL();
  document.getElementById("generateImage").href = imgData;
 });
}

window.addEventListener("load",function(){
 generateImage();
});


// const app = new Vue({
//  el: '#app',
//  data: {
//   newText: 'イヌかわいい',
//   newTextColor: '#F45C63',
//   newEmoji: '🐶',
//   newGradienColorStart: '#FFF',
//   newGradienColorEnd: '#F45C63'
//  },
//  methods: {
//   addText: function() {
//    generateImage();
//   },
//   addTextColor: function() {
//    generateImage();
//   },
//   addEmoji: function() {
//    console.log('addred emoji');
//    generateImage();
//   },
//   sync: function(e){
//    this.newEmoji = e.target.innerText
//   }
//  }
// });
//
// app.$mount('#app');


new Vue({
 render: h => h(App)
}).$mount("#app");
<template>
<!--  <div contenteditable="true" v-text="newEmoji" @input="sync" id="text-input">{{newEmoji}}</div>-->

  <div contenteditable="true" placeholder="Type here" v-text="newEmoji" @input="sync" id="text-input">{{newEmoji}}</div>
</template>

<script>
 import Vue from 'vue'

 export default Vue.extend({
  name: 'Editable',
  props: ['content'],
  data () {
   return {
    newEmoji: ''
   }
  },
  methods: {
   sync (e) {
    console.log('sync');
    this.$emit('update', e.target.innerText)
   }
  },
  mounted() {
   this.newEmoji = this.content
  }
 })
</script>
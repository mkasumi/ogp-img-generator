<template>
  <div contenteditable="true" placeholder="Type here" v-text="innerContent" @input="sync" id="text-input">{{newEmoji}}</div>
</template>

<script>
 import Vue from 'vue'

 export default Vue.extend({
  name: 'Editable',
  props: ['content'],
  data () {
   return {
    innerContent: '',
    newEmoji: 'Type here'
   }
  },
  methods: {
   sync (e) {
    this.$emit('update', e.target.innerHTML)
   }
  },
  mounted() {
   this.innerContent = this.content
  }
 })
</script>
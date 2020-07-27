<template>
  <div contenteditable="true" placeholder="Type here" v-text="innerContent" @change="sync" @input="sync" id="text-input"></div>
</template>

<script>
 import Vue from 'vue'

 export default Vue.extend({
  name: 'Editable',
  props: ['content'],
  data () {
   return {
    innerContent: ''
   }
  },
  methods: {
   sync (e) {
    this.$emit('update', e.target.innerHTML)
    console.log('input');
   }
  },
  mounted() {
   this.innerContent = this.content
   console.log('mount');
  }
 })
</script>
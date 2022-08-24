<template>
 <div class="app">
    <Editor v-model="state"></Editor>
  </div>
</template>

<script>

import { ref } from '@vue/reactivity';
import data from './data.json';
import Editor from './packages/editor'
export default {
  components: {
    Editor
  },
  setup() {
    const state = ref(data);


    return {
      state
    }
  }
}
</script>

<style lang="scss">
.app{
  position: fixed;
  height: 100%;
  top: 20px;
  left: 20px;
  bottom: 20px;
  right: 20px;
}
</style>

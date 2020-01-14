<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p v-if="isSingleSpa">single-spa模式独有的文字</p>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed: {
    isSingleSpa(){
      return this.$store.state.isSingleSpa;
    }
  },
}
</script>

<template>
  <div id="inner-game">
    <h1>GameView</h1>
    <router-link to="/">Go to Home</router-link>	
    <router-link to="/result">Go to Result</router-link>
    <human v-for="people in peoples" v-bind:key="people" :top="random()" :left="random()"/>
    <timer />
  </div>
</template>

<script>
import human from './Human'
import timer from'./Timer'
export default {
  name: 'GameStage',
  components: {human,timer},
  data() {
    return {
      peoples: 5
    }
  },
  methods: {
    random() {
      return Math.floor(Math.random() * 101) + '%'
    },
  }
}
</script>

<style scoped>
#inner-game{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 85%;
  height: 92%;
  background-color: whitesmoke;
  border-radius: 30px;
}
</style>
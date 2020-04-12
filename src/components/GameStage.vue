<template>
  <div id="inner-game">
    <h1>GameView</h1>
    <router-link to="/">Go to Home</router-link>	
    <router-link to="/result">Go to Result</router-link> <br/>
    <h2>{{ point }}</h2>
    <human v-for="people in peoples" v-bind:key="people" v-on:addPoint="addPoint"/>
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
      peoples: 5,
      point: 0
    }
  },
  methods: {
    addPoint() {
      this.point += 1
    }
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
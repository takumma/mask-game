<template>
  <div id="inner-game">
    <h1>GameView</h1>
    <router-link to="/">Go to Home</router-link>	
    <router-link to="/result/50">Go to Result</router-link> <br/>
    <p id="point">{{ point }}</p>
    <human v-for="people in peoples" v-bind:key="people" v-on:addPoint="addPoint"/>
    <timer id="timer" :point="this.point"/>
  </div>
</template>

<script>
import human from './Human'
import timer from'./Timer'
import 'normalize.css'
export default {
  name: 'GameStage',
  components: {human,timer},
  data() {
    return {
      peoples: 10,
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

#timer{
  position: absolute;
  top: 2%;
  left: 2%;
}

#point{
  position: absolute;
  top: 2%;
  right: 2%;
  height: 20px;
  width: 20px;
  padding: 20px;
  border: orangered 2px solid;
  font-weight: 800;
  border-radius: 50%;
  color: orangered;
  margin: 0;
  background-color: palegoldenrod;
}
</style>
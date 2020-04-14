<template>
  <div id="inner-game">
    <div id="lock">
      <h1>Lock中だよ</h1>
    </div>
    <div id="gaming">
      <h1>GameView</h1>
      <router-link to="/">Go to Home</router-link>	
      <router-link :to="{name: 'result', params: { point: this.point}}">Go to Result</router-link> <br/>
      <p id="point">{{ point }}</p>
      <human v-for="people in peoples" v-bind:key="people" v-on:addPoint="addPoint"/>
      <timer id="timer" :point="this.point" @finish="finish"/>
    </div>
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
    },
    finish(point) {
      this.$store.commit('setPoint', {point})
      this.$router.push('/result')
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

#lock{
  display: none;
  background-color: burlywood;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 100;
}
</style>
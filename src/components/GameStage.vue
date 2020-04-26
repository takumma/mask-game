<template>
  <div id="inner-game">
    <div id="lock">
        <h1 id="inner-lock">Lock中だよ</h1>
    </div>
    <div id="gaming">
      <router-link to="/">Go to Home</router-link>	
      <router-link :to="{name: 'result', params: { point: this.point}}">Go to Result</router-link> <br/>
      <button @click="appearHuman">追加</button>
      <p id="point">{{ point }}</p>
      <human v-for="people in peoples" v-bind:key="people.id"
        :humanId="people" :top="people.pos.y" :left="people.pos.x"
        v-on:addPoint="addPoint" @deleteHuman="deleteHuman"
      />
      <timer id="timer" :point="this.point" @finish="finish"/>
    </div>
  </div>
</template>

<script>
import human from './Human'
import timer from './Timer'
import Tween from '@/Tween.js'
import 'normalize.css'
export default {
  name: 'GameStage',
  components: {human,timer},
  data() {
    return {
      gameTickTimer: 0,
      peoples: [],
      point: 0,
    }
  },
  methods: {
    addPoint() {
      this.point += 1
    },
    finish(point) {
      this.$store.commit('setPoint', {point})
      this.$router.push('/result')
    },
    deleteHuman(data) {
      const index = this.$data.peoples.indexOf(data)
      if (index === -1) { return }
      this.$data.peoples.splice(index, 1)
    },
    async appearHuman() {
      const id = Math.floor( Math.random() * 100000 )
      const decideSide = Math.random() > 0.5 ? -20 : 100
      const human = { id, pos: { x: decideSide, y: Math.floor( Math.random() * 100 )} }
      this.$data.peoples.push(human)
      human.tw = new Tween(human.pos)
      if( decideSide === -20 ){
        await human.tw.to({ x: 100}, 5000)
      } else {
        await human.tw.to({x: -20}, 5000)
      }
      this.deleteHuman(human)
    },
    tickGame() {
      const pplNum = this.peoples.length
      if(pplNum < this.point + 5) {
        if (Math.random() > 0.5) {
          this.appearHuman()
        }
      }
      
    }
  },
  mounted() {
    this.gameTickTimer = window.setInterval(this.tickGame, 500)
  }
}
</script>

<style scoped>
#inner-game{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 85%;
  height: 92%;
  background-color: whitesmoke;
  border-radius: 30px;
  /*background-image: url(../../public/road.png);*/
  background-image: url(../assets/logo.png);
  background-repeat: repeat;
  overflow: hidden;
}



#timer{
  position: absolute;
  top: 2%;
  left: 2%;
  z-index: 2;
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
  z-index: 2;
}

#lock{
  display: none;
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(45,45,45,0.5);
  border-radius: 30px;
  z-index: 1;
}

#inner-lock{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  color: white;
  width: 100%;
}
</style>
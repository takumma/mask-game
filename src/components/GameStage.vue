<template>
  <div id="inner-game">
    <h1>GameView</h1>
    {{ random() }} <br>
    <human :top="random()" :left="random()"/>
  </div>
</template>

<script>
import human from './Human'
export default {
  name: 'GameStage',
  components: {human},
  methods: {
    random() {
      return Math.floor(Math.random() * 501) + 'px'
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
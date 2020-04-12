<template>
  <div id="game">
    <game-stage/>
  </div>
</template>


<script>
import GameStage from '@/components/GameStage'
import 'normalize.css'
export default {
  name: 'GameView',
  components: { GameStage },
  methods: {
  }
}
</script>
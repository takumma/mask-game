<template>
  <div id="game">
    <game-stage @newgame="newgame"/>
  </div>
</template>


<script>
import GameStage from '@/components/GameStage'
export default {
  name: 'GameView',
  components: { GameStage },
  methods: {
    newgame () {
      this.$router.push('/game')
    }
  }
}
</script>
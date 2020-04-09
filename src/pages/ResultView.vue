<template>
  <div id="result">
    <result-stage @newgame="newgame"/>
  </div>
</template>


<script>
import ResultStage from '@/components/ResultStage'
export default {
  name: 'ResultView',
  components: { ResultStage },
  methods: {
    newgame () {
      this.$router.push('/game')
    }
  }
}
</script>
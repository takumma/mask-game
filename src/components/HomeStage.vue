<template>
  <div>
    <h1>HomeView</h1>
    <button @click="StartGame">Play</button>
  </div>
</template>


<script>
export default {
  name: 'HomeStage',
  methods: {
    StartGame() {
      this.$router.push('/game')
    }
  }
}
</script>
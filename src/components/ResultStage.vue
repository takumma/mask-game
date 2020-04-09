<template>
  <div id="inner-result">
    <h1>マスク装着人数は{{ num }}人<br>装着率は{{ percent }}%になりました！</h1>
    <button class="result-button" @click="toHome">HOME</button>
    <button class="result-button" @click="RetryGame">Retry</button>
    <br>
    <button class="result-button">つぶやく</button>
  </div>
</template>


<script>
export default {
  name: 'ResultStage',
  data(){
    return{
      num : 50,
      percent : 70
    }
  },
  methods: {
    toHome() {
      this.$router.push('/')
    },
    RetryGame(){
      this.$router.push('/game')
    }
  }
}
</script>

<style>
.result-button{
  background-color: lightgreen;
  border: limegreen 1px solid;
  border-radius: 5px;
  padding: 10px;
}
</style>


<template>
  <div id="inner-result">
    <h1 id="result-title">{{num}}人にマスクをつけることができました！</h1>
    <button class="result-button" @click="toHome">HOME</button>
    <button class="result-button" @click="RetryGame">Retry</button>
    <br>
    <button class="result-button">つぶやく</button>
    <!--これだけでつぶやけちゃう-->
    <!--<a href="https://twitter.com/share" class="twitter-share-button">Tweet</a>-->
  </div>
</template>


<script>
export default {
  name: 'ResultStage',
  data(){
    return{
      num : 50
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
#inner-result{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 90%;
  height: 90%;
  background-color: whitesmoke;
  border-radius: 50px;
}

#result-title{
  padding-top: 10%;
  margin-top: 0;
}

.result-button{
  border: limegreen 3px solid;
  border-radius: 5px;
  padding: 10px;
}
</style>



<template>
  <div id="inner-result">
    <p id="result-title"><span id="result-num">{{$store.state.result.point}}</span>人に<br>マスクをつけることができました！</p>
    <button class="result-button" @click="toHome">さいしょにもどる</button>
    <button class="result-button" @click="RetryGame">もういちど</button>
    <br>
    <button class="result-button" @click="tweet()">つぶやく</button>
  </div>
</template>


<script>
export default {
  name: 'ResultStage',
  data(){
    return{
      num : 50,
    }
  },
  methods: {
    toHome() {
      this.$router.push('/')
    },
    RetryGame(){
      this.$router.push('/game')
    },
    tweet(){
      const text = '「ますくをつけて」で'+this.$store.state.result.point+'人にマスクをつけました'
      const url = 'https://mask-game.tk/'
      const tweeturl = 'https://twitter.com/share?text='+text+'&url='+url+'&hashtags=ますくをつけて'
      window.open(tweeturl,'sampletweet')
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
  width: 85%;
  height: 92%;
  background-color: whitesmoke;
  border-radius: 30px;
}

#result-title{
  margin-top: 20%;
}

#result-num{
  font-size: 50px;
  font-weight: 700;
  color: #3cb371;
}

.result-button{
  border:#3cb371 3px solid;
  border-radius: 5px;
  padding: 10px;
  width: 30%;
  margin: 10px ;
  outline: none;
  background-color: white;
}
</style>



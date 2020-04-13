<template>
  <div id="inner-result">
    <p id="result-title"><span id="result-num">{{$route.params.point}}</span>人に<br>マスクをつけることができました！</p>
    <button class="result-button" @click="toHome">HOME</button>
    <button class="result-button" @click="RetryGame">Retry</button>
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
      const text = 'Maskgameで'+this.$route.params.point+'人にマスクをつけました'
      //urlはローンチするときに変更。あとハッシュタグもアプリ名に変更する
      const url = 'https://shoma-profile.netlify.com'
      const tweeturl = 'https://twitter.com/share?text='+text+'&url='+url+'&hashtags=maskgame'
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



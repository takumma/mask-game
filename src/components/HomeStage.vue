<template>
  <div id="inner-home">
    <h2 id="home-title">ますくをつけて</h2>
    <div class="home-content">
      <h4 class="content-title">ルール</h4>
      <p class="content-text">マスクがついてない子をタップしてマスクをつけるゲームです。マスクがついている子をタップすると少しの間マスクをつけることができなくなってしまうから注意してね</p>
    </div>
    <div class="home-content">
      <h4 class="content-title">広告について</h4>
      <p class="content-text">広告で得たお金はサーバー管理費を除いた分は○○を通じてコロナウイルス対策への募金といたします。</p>
    </div>
    <p class="report content-text">バグやご意見は<a href="https://twitter.com/tak_kum_ma">開発者</a>まで</p>
    <button class="home-button" @click="StartGame">あそぶ</button>
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


<style>

#inner-home{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 85%;
  height: 92%;
  background-color: whitesmoke;
  border-radius: 30px;
}



#home-title{
  margin-top: 0;
  padding-top: 15%;
  width: 80%;
  margin: auto;
  margin-bottom: 50px;
}

.home-content{
  text-align: left;
  margin: auto;
  width: 80%;
  margin-bottom: 30px;
}

.content-title{
  margin-bottom: 0;
  text-align: center;
}

.content-text{
  font-size: 13px;
}

.home-button{
  position: absolute;
  border: #3cb371 3px solid;
  border-radius: 5px;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  background-color: white;
}

.report{
  margin: auto;
  width: 80%;
  margin-top: 40px;
}

</style>
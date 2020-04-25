<template>
  <div id="inner-home">
    <h1 id="home-title">ますくをつけて</h1>
    <h2>ルール</h2>
    <p>マスクがついてない子をタップしてね<br>マスクがついている子をタップすると画面をさわれなくなるから注意してね</p>
    <br>
    <h2>広告について</h2>
    <p>広告で得たお金はサーバー管理費を除いた分は○○を通じてコロナウイルス対策への募金といたします。</p>
    <button class="home-button" @click="StartGame">Play</button>
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
  padding-top: 10%;
}

.home-button{
  border: #3cb371 3px solid;
  border-radius: 5px;
  padding: 10px;
  margin-bottom:10%;
  background-color: white;
}

</style>
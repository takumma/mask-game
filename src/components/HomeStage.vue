<template>
  <div id="inner-home">
    <h1 id="home-title">MaskGame</h1>
    <div id="role">
      <p id="inner-role">このゲームではマスクをつけている子とつけていない子が出てくるよ<br>
         マスクをつけていない子にはタップしてマスクをつけてあげよう<br>
         でも、マスクをつけている子をタップしてしまうと、<br>マスクがなくなって3秒間押せなくなるから
         気を付けてね。
      </p>
    </div>
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
  width: 90%;
  height: 90%;
  background-color: whitesmoke;
  border-radius: 50px;
}

#role{
  background-color: white;
  border-radius: 20px;
}

#inner-role{
  display: grid;
}

#home-title{
  margin-top: 0;
  padding-top: 10%;
}

.home-button{
  border: limegreen 3px solid;
  border-radius: 5px;
  padding: 10px;
  margin-bottom:10%;
}

</style>
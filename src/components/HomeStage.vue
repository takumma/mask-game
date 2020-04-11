<template>
  <div id="inner-home">
    <h1 id="home-title">MaskGame</h1>
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
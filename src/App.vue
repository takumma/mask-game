<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

</script>

<style>
html, body {
  height: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  /*ここ二行はとりまコピペで書いたので、後で意味を調べる */
  /* コンテンツが画面サイズよりも大きくなっても、スクロールバーは出さないよってやつ。これもこれでOK */
  overflow: hidden;
  /*これはアクションをどの程度まで有効化するかってやつ、このままで良さそう */
  touch-action: manipulation;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:#3cb371;
  width: 100%;
  height: 100%;
}

</style>

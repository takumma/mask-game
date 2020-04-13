<template>
  <div id="human" :style="styles" @click="checkMask">
    human
    <div v-if="mask" class="mask">⊂ロ⊃</div>
  </div>
</template>

<script>
export default {
  name: 'human',
  data() {
    return {
      mask: Math.random() > 0.5
    }
  },
	computed: {
    styles() {
      return {
        '--top': Math.floor(Math.random() * 61) + 20 +'%',
        '--left': Math.floor(Math.random() * 80) + '%'
      }
    }
  },
  methods: {
    checkMask(){
      if(!this.mask) {
        this.mask = true
        this.$emit('addPoint')
      }
    }
  }
}
</script>

<style scoped>
#human {
  --top: 0px;
  --left: 0px;
  width: 60px;
  height: 60px;

  position: absolute;
  top: var(--top);
  left: var(--left);

	background-image: url("../assets/logo.png");
  background-size: contain;
}


</style>
<template>
  <div id="human" :style="styles" @click="checkMask">
    human
    <div v-if="mask">⊂ロ⊃</div>
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
        '--top': Math.floor(Math.random() * 61) + 25 + '%',
        '--left': Math.floor(Math.random() * 80) + 10 + '%'
      }
    }
  },
  methods: {
    checkMask(){
      if(!this.mask) {
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

  position: absolute;
  top: var(--top);
  left: var(--left);

	background-color: red;
	padding: 20px;
}
</style>
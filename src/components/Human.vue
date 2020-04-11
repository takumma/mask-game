<template>
  <dev id="human" :style="styles">
    human {{top + " " + left + " " }}
  </dev>
</template>

<script>
export default {
  name: 'human',
  props: {
    top: {},
    left: {}
  },
	computed: {
    styles() {
      return {
        '--top': this.top,
        '--left': this.left
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
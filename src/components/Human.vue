<template>
  <div id="human" :style="styles" @click="$emit('addPoint')">
    human
  </div>
</template>

<script>
export default {
  name: 'human',
	computed: {
    styles() {
      return {
        '--top': Math.floor(Math.random() * 101) + '%',
        '--left': Math.floor(Math.random() * 101) + '%'
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
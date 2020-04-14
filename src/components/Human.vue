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
        '--left': Math.floor(Math.random() * 80) + '%',
      }
    }
  },
  methods: {
    delete_dom_obj(){
      var clear = document.getElementById('lock');
      var x = document.getElementById('gaming');
      clear.style.display = 'none';
      x.style.display = 'contents';
    },
    screenLock(){
      var lockelement = document.getElementById('lock');
      var locked = document.getElementById('gaming');
      lockelement.style.display = 'contents';
      locked.style.display = 'none';

      setTimeout(this.delete_dom_obj,3000);
    },
    checkMask(){
      if(!this.mask) {
        this.mask = true
        this.$emit('addPoint')
      }else{
        this.screenLock()
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
  --image:url("../assets/logo.png");

	background-image: var(--image);
  background-size: contain;
}


</style>
<template>
  <div id="human" :style="styles" @click="checkMask">
    <img :src="decideImage" class="img">
  </div>
</template>

<script>
export default {
  name: 'human',
  props: {
    humanId: {},
    top: {},
    left: {}
  },
  data() {
    return {
      mask: Math.random() > 0.5,
      sex: Math.random() > 0.5
    }
  },
	computed: {
    styles() {
      return {
        '--top': this.top + '%',
        '--left': this.left + '%'
      }
    },
    decideImage() {
      if(this.mask) {
        return this.sex ? '/mask-man.svg' : '/mask-woman.svg'
      }else {
        return this.sex ? '/man.svg' : '/woman.svg'
      }
    }
  },
  methods: {
    delete_dom_obj(){
      var clear = document.getElementById('lock');
      clear.style.display = 'none';
    },
    screenLock(){
      var lockelement = document.getElementById('lock');
      lockelement.style.display = 'block';

      setTimeout(this.delete_dom_obj,3000);
    },
    checkMask(){
      if(!this.mask) {
        this.mask = true
        this.$emit('addPoint')
        setTimeout(this.delete,3000);
      }else{
        this.screenLock()
      }
    },
    delete() {
      this.$emit('deleteHuman', this.humanId)
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

  background-size: contain;
}

.img {
  width: 60px;
  height: 60px;
}
</style>
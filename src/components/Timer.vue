<template>
    <div>
      <countdown :left-time="60000" :auto-start="true" ref="cnt" :v-once="autoGoResult()">
        <div slot="process" slot-scope="anyYouWantedScopName" class="time">{{ ` ${anyYouWantedScopName.timeObj.ceil.s}` }}</div>
        <div slot="finish" class="time">
          <span>０</span>
        </div>
      </countdown>
    </div>
</template>

<script>
export default {
  props: {
    point: {}
  },
  methods: {
    finish() {
      this.$emit('finish',this.point)
    },
    autoGoResult(){
      setTimeout(this.finish,61000)
    }
  }  
}
</script>


<style>
.time{
  display: inline-block;
  height: 20px;
  width: 20px;
  padding: 20px;
  border: #3cb371 2px solid;
  font-weight: 800;
  border-radius: 50%;
  color: #3cb371;
  background-color: palegoldenrod;
}

.btn{
  display: inline;
}
</style>
<template>
    <div>
      <countdown :left-time="60000" :auto-start="true" ref="cnt">
        <div slot="process" slot-scope="anyYouWantedScopName">{{ `カウント: ${anyYouWantedScopName.timeObj.ceil.s}` }}</div>
        <div slot="finish">
          <h2>finish</h2>
          <button @click="finish">結果を見る</button>
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
    }
  }  
}
</script>
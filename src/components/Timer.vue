<template>
    <div>
      <countdown :left-time="60000" :auto-start="true" ref="cnt">
        <div slot="process" slot-scope="anyYouWantedScopName">{{ `カウント: ${anyYouWantedScopName.timeObj.ceil.s}` }}</div>
        <div slot="finish">
          <h2>finish</h2>
          <router-link :to="{name: 'result', params: { point: this.point}}">結果を見る</router-link>
        </div>
      </countdown>
    </div>
</template>

<script>
export default {
  props: {
    point: {}
  }
}
</script>
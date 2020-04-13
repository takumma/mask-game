<template>
    <div>
      <countdown :left-time="60000" :auto-start="true" ref="cnt">
        <div slot="process" slot-scope="anyYouWantedScopName" class="time">{{ ` ${anyYouWantedScopName.timeObj.ceil.s}` }}</div>
        <div slot="finish" class="time">
          <span>０</span>
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


<style>
.time{
  display: inline-block;
  height: 20px;
  width: 20px;
  padding: 20px;
  border: orangered 2px solid;
  font-weight: 800;
  border-radius: 50%;
  color: orangered;
  background-color: palegoldenrod;
}
</style>
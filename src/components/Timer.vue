<template>
    <div>
      <countdown :left-time="60000" :auto-start="true" ref="cnt">
        <div slot="process" slot-scope="anyYouWantedScopName">{{ `カウント: ${anyYouWantedScopName.timeObj.ceil.s}` }}</div>
        <div slot="finish">
          <span>finish</span>
        </div>
      </countdown>
    </div>
</template>

<script>
export default {
}
</script>
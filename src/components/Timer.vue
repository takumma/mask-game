<template>
    <div>
      <countdown :left-time="60000" :auto-start="true" ref="cnt">
        <div slot="process" slot-scope="anyYouWantedScopName">{{ anyYouWantedScopName.timeObj.ceil.s }}</div>
        <div slot="finish">
          <span>0</span>
        </div>
      </countdown>
    </div>
</template>

<script>
export default {
}
</script>
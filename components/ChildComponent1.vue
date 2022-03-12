<template>
  <div>
    <v-btn>{{ message }}</v-btn>
  </div>
</template>

<script>
export default {
  props: [
    'message',
  ]
}
</script>

<!--scopedを付与すると、ここで定義したCSSはこのコンポーネントのみに適用される-->
<style scoped>

</style>

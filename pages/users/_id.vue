<template>
  <div>
    this is user: {{ this.$route.params.id }} page
  </div>
</template>

<script>
  export default ({
    validate({ params }) {
      return /^\d+$/.test(params.id)
    }
  })
</script>

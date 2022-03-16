<template>
  <div>
    <!--    dataプロパティに一度セットしてから表示-->
    <!--    memo: 直接{{ process.env.TEST_MESSAGE }}で予防とすると「An error occurred」となった-->
    {{ message }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: process.env.TEST_MESSAGE
    }
  }
}
</script>

<style>

</style>

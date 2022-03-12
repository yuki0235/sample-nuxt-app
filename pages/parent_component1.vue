<template>
  <div>
    <!--    v-modelを使用してsampleTextプロパティと紐づける-->
    <!--    テキストフィールドに入力した値が動的に変更される-->
    <v-text-field label="please typing..." v-model="sampleText"></v-text-field>

    <!--    コンポーネントにsampleTextの値をpropsとして渡す-->
    <!--    この場合はv-bindを指定してあげる必要がある-->
    <ChildComponent1 v-bind:message="sampleText" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      sampleText: ''
    }
  }
}
</script>

<style>

</style>

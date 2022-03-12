<template>
  <div>
    <!-- store/index.jsで定義したstateのmessageを出力   -->
    <p>{{ $store.state.message }}</p>

    <!-- store/index.jsで定義したmutationでstateの値を書き換える  -->
    <p>{{ $store.state.count }}</p>
    <button @click="countUp">UP</button>
    <button @click="countDown">Down</button>
  </div>
</template>

<script>
export default {
  methods: {
    countUp() {
      /*
      * mutationで定義した処理の呼び出しにはcommitを使う
      * commitの引数に指定する文字列はmutation内に定義した処理名
      */
      this.$store.commit("increment")
    },
    countDown() {
      this.$store.commit("decrement")
    }
  }
};
</script>

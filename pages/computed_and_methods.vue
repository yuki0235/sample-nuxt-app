<template>
  <div>
    <!--    ただプロパティを呼び出す-->
    <p>message: {{ message }}</p>

    <!--    computedプロパティを呼び出す場合は()は不要-->
    <p>reverse computed message: {{ reverseMessage }}</p>

    <!--    computedプロパティを呼び出す場合は()が必要-->
    <p>reverse methods message: {{ reverseMethodMessage() }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'this is normal message',
    }
  },
  computed: {
    reverseMessage () {
      return this.message.split('').reverse().join('')
    }
  },
  methods: {
    // プロパティで定義されている名前の再利用はできない（reverseMessageはエラーになる）
    reverseMethodMessage () {
      return this.message.split('').reverse().join('')
    }
  }
}
</script>

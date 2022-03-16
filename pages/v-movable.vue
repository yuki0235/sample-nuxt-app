<template>
  <div class="container">
    <movable class="testmove" posTop="0" posLeft="0"><span>Shift Key Behavior</span></movable>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //
    }
  }
}
</script>

<style>
.testmove {
  display: block;
  position: absolute;
  top: 0;
  height: 150px;
  width: 150px;
  margin: 200px;
  background: orange;
  color: white;
}

.modaltitle {
  background: blue;
  display: block;
  width: 100%;
  color: white;
}
</style>

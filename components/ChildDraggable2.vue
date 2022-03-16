<template>
  <v-container>
    <h2>group2</h2>
    <div class="group">
      <draggable v-model="items2" draggable=".item" tag="ul" group="items">
        <li v-for="item in items2" :key="item.id" class="item">
          No.{{item.id}} {{item.name}}
        </li>
      </draggable>
      <div v-if="items2 === false">No Member</div>
    </div>
    <center>
      <v-btn elevation="2" color="primary" @click="showItems">group1 - 順番表示</v-btn>
    </center>
  </v-container>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: {
    draggable,
  },
  data() {
    return {
      items2: [
        {
          id: 5,
          name: "ITEM 5"
        },
        {
          id: 6,
          name: "ITEM 6"
        },
        {
          id: 7,
          name: "ITEM 7"
        },
        {
          id: 8,
          name: "ITEM 8"
        },
      ]
    }
  },
  methods: {
    showItems() {
      alert(this.items1.map(val => { return val.id }))
    }
  }
}
</script>
<style></style>

<template>
  <v-container>
    <h2>group1</h2>
    <div class="group">
      <draggable v-model="items1" draggable=".item" tag="ul" group="items">
        <li v-for="item in items1" :key="item.id" class="item">
          No.{{item.id}} {{item.name}}
        </li>
      </draggable>
      <div v-if="items1 === false">No Member</div>
    </div>
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
      items1: [
        {
          id: 1,
          name: "ITEM 1"
        },
        {
          id: 2,
          name: "ITEM 2"
        },
        {
          id: 3,
          name: "ITEM 3"
        },
        {
          id: 4,
          name: "ITEM 4"
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

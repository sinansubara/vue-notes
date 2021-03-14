<template>
  <div class="main-notes">
      <div class="outer-card" v-for="(note, key) in $store.getters.getAllNotes" v-bind:key="key">
          <Note :note="note" :keyId="key"/>
      </div>
  </div>
</template>

<script>
import Note from './Note'
export default {
    name: "Notes",
    components: {
        Note
    }
}
</script>

<style>
    .outer-card {
        display: inline-flex;
        margin: 2%;
    }
</style>
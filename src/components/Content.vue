<template>
  <div class="main">
      <AddNotes />
      <Notes />
  </div>
</template>

<script>
import Notes from './Notes'
import AddNotes from './AddNotes'
export default {
    name: "Content",
    components: {
        Notes,
        AddNotes
    }
}
</script>

<style>

</style>
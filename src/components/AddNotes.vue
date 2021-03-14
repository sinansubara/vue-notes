<template>
  <div class="add-note">
      <h3>CREATE NEW NOTE</h3>
      <form @submit="newNote">
          <label>Title</label>
          <input type="text" v-model="title" required/>
          <br>
          <br>
          <label>Text</label>
          <input type="text" v-model="text" required/>
          <br>
          <input type="submit" value="Add note" />
      </form>
  </div>
</template>

<script>
export default {
    name: "AddNotes",
    data() {
        return {
            title: '',
            text: ''
        }
    },
    methods: {
        newNote(e){
            e.preventDefault();
            if(this.title !== '' && this.text !== ''){
                this.$store.dispatch('newNote', {
                    title: this.title,
                    text: this.text,
                    active: true,
                    date: new Date()
                });
                this.title = '',
                this.text = ''
            }
            
        }
    }
}
</script>

<style>
    .add-note {
        border: 1px solid gray;
        width: 500px;
        text-align: center;
        margin: 0 auto;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        border-radius: 5px;
    }
    .add-note:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    form {
        margin-top: 10px;
    }
    form label {
        margin-right: 10px;
    }
    form input[type="text"] {
        width: 350px;
        height: 20px;
    }
    form input[type="submit"]
    {
        margin: 10px;
        padding: 8px 20px;
        font-size: 16px;
        background: lightgreen;
        border: none;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }
    form input[type="submit"]:focus {
        background: rgb(75, 255, 75);
        border: none;
        outline: none;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.404);
    }
</style>
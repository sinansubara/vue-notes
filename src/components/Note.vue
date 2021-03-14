<template>
  <div class="card" :class="!note.active ? 'notActive' : ''">
      <div class="header-card">
          <div class="card-title">
              <div class="dateTime">
                {{ getDate }} | 
                {{ getTime }}
                <!-- {{ note.date.getDate() }}.{{ note.date.getMonth() }}.{{ note.date.getFullYear() }} | 
                {{ note.date.getHours() }}:{{ note.date.getMinutes() }}:{{ note.date.getSeconds() }} -->
              </div>
            <div class="title">
                <label>{{ note.title }}</label>
                <div class="activeCheckbox">
                    <label v-if="note.active">Active</label>
                    <label v-else>Not active</label>
                    <input type="checkbox" @change="toggleActive" v-model="note.active" />
                </div>
            </div>
            
          </div>
      </div>
      <div class="inner-card">
        <p v-if="!editActive">{{ note.text }}</p>
        <textarea rows="14" cols="24" v-else v-model="note.text"></textarea>
      </div>
      <div class="footer-card">
          <button v-if="!editActive && note.active" @click="changeEditState">Edit</button>
          <button v-else-if="editActive" @click="changeEditState">Save</button>
          <button @click="deleteNote(keyId)">Delete</button>
      </div>
  </div>
</template>

<script>
export default {
    name: "Note",
    props: ['note', 'keyId'],
    data() {
        return {
            editActive: false
        }
    },
    methods: {
        deleteNote(id){
            this.$store.dispatch('deleteNote', id);
        },
        toggleActive(){
            if(this.editActive){
                this.editActive = false;
            }
        },
        changeEditState(){
            this.editActive = !this.editActive;
        }
    },
    computed: {
        getDate() {
            return `${this.note.date.getDate() < 10 ? 
                        '0' + this.note.date.getDate() : 
                        this.note.date.getDate()}.${this.note.date.getMonth() < 10 ? 
                        '0' + this.note.date.getMonth() : 
                        this.note.date.getMonth()}.${this.note.date.getFullYear()}`;
        },
        getTime() {
            return `${this.note.date.getHours() < 10 ? 
                        '0' + this.note.date.getHours() : 
                        this.note.date.getHours()}.${this.note.date.getMinutes() < 10 ? 
                        '0' + this.note.date.getMinutes() : 
                        this.note.date.getMinutes()}.${this.note.date.getSeconds() < 10 ? 
                        '0' + this.note.date.getSeconds() : 
                        this.note.date.getSeconds()}`;
        }
    }
}
</script>

<style>
    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        border-radius: 5px;
        margin: 1%;
        height: 400px;
        width: 300px;
        text-align: center;
        position: relative;
        border: 1px solid gray;
    }
    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    .inner-card {
        padding: 10px 16px;
        text-align: justify;
        max-height: 279px;
        overflow: auto;
    }
    .header-card {
        height: 50px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        background: rgba(0, 0, 0, 0.1);
        font-size: 1em;
    }
    .card-title {
        padding: 10px;
    }
    .footer-card {
        position: absolute;
        bottom: 0;
        height: 50px;
        width: 100%;
        border-top: 1px solid rgba(0, 0, 0, 0.2);
        background: rgba(0, 0, 0, 0.1);
        font-size: 2em;
    }
    .footer-card button {
        margin: 0 10px;
        padding: 8px 20px;
        font-size: 16px;
    }
    .footer-card button:first-child {
        background: lightgreen;
        border: none;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }
    .footer-card button:nth-child(2) {
        background: lightsalmon;
        border: none;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }
    .footer-card button:first-child:focus {
        background: rgb(75, 255, 75);
        border: none;
        outline: none;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.404);
    }
    .footer-card button:nth-child(2):focus {
        background: rgb(255, 105, 46);
        border: none;
        outline: none;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.404);
    }
    .notActive {
        opacity: 0.2;
    }
    textarea {
        font-size: 16px;
        resize: vertical;
        margin-bottom: 10px;
        text-align: justify;
    }
    .dateTime {
        font-size: 12px;
        color: rgb(122, 122, 122);
    }
    
    .title label:first-child {
        float: left;
    }
    .activeCheckbox {
        float: right;
    }
    .activeCheckbox input[type="checkbox"] {
        cursor: pointer;
    }
    button {
        cursor: pointer;
    }
</style>
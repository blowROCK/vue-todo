<template>
  <div class="todo-list-item" @click="modifyTodo">
    <span class="icon" @click="onToggleDone"
          :class="[this.isDone ? 'fa fa-check-circle-o' : 'fa fa-circle-o']" />
    <span class="icon" @click="onToggleImportant"
          :class="[this.isImportant ? 'fa fa-star' : 'fa fa-star-o']" />
    <div class="text"
         :class="[this.isDone ? 'done' : 'do']">
      {{this.text}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'TodoItem',
  props: {
    id: {
      type: String,
      required: true
    },
    text: {
      default: ''
    },
    isDone: {
      type: Boolean,
      default: false
    },
    isImportant:{
      type: Boolean,
      default: false
    }
  },
  computed: {
  },
  mounted() {
    console.log("투두 아이템 : ", this.text)
  },
  methods:{
    modifyTodo(){
      const todo = this.$store.getters['todos/getById'](this.id);
      this.$store.commit('modal/showModal', {
        id: todo.id,
        text: todo.text,
        isDone: todo.isDone,
        isImportant: todo.isImportant,
        modify: true
      });
    },
    onToggleDone(e){
      e.stopPropagation();
      this.$store.commit('todos/toggleDone', { id: this.id })
    },
    onToggleImportant(e){
      e.stopPropagation();
      this.$store.commit('todos/toggleImportant', { id: this.id })
    }
  }
}
</script>
<style lang="scss" scoped>
.todo-list-item{
  width: 100%;
  height: 100%;
  display: inherit;
  .icon{
    margin-right: 15px;
    cursor: pointer;
  }
  .text{
    margin: 0;
    font-weight: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 85%;
    font-size: 1.2rem;
  }
  .text.done{
    text-decoration: line-through;
  }
}
</style>

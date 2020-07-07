<template>
  <div id="todo" class="todo">
    <div class="todo__container">
      <div class="todo__container__header">
        <div id="addItemBtn" class="todo__container__contents__header__btn"
             @click="onAddBtn">
          <i class="fa fa-plus" />
        </div>
        <Calendar />
        <div id="year" class="todo__container__header__year" />
        <div id="month" class="todo__container__header__month" />
        <div class="todo__container__header__week">
          <div id="left" class="todo__container__header__week__arrows">
            <div />
          </div>
          <ul id="week" class="todo__container__header__week__days" />
          <div id="right" class="todo__container__header__week__arrows right">
            <div />
          </div>
        </div>
      </div>
      <div class="todo__container__contents">
        <div class="todo__container__contents__todoList">
          <div id="do" class="todo__container__contents__todoList">
            <div class="todoList__title do">
              To Do
            </div>
            <ul id="doUl">
              <li v-for="(todo, index) in doList" :key="index" :id="todo.id">
                <Todo-item
                  :id="todo.id"
                  :text="todo.text"
                  :isDone="todo.isDone"
                  :isImportant="todo.isImportant"
                />
              </li>
            </ul>
          </div>
          <div id="done" class="todo__container__contents__todoList">
            <div class="todoList__title done">
              Done
            </div>
            <ul id="doneUl">
              <li v-for="todo in doneList"
                  v-bind:key="todo.id"
                  v-bind:id="todo.id"
                >
                <Todo-item
                  :id="todo.id"
                  :text="todo.text"
                  :isDone="todo.isDone"
                  :isImportant="todo.isImportant"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem';
import Calendar from './Calendar';
import { generatorID } from '../static/util';

export default {
  name: 'Todo',
  layout: 'default',
  components: {
    TodoItem, Calendar
  },
  computed: {
    doList() {
      const selectDate = this.$store.getters['calendar/getSelectedDate'];
      const doList = this.$store.getters['todos/getTodoListbyTypeNDate']('do', selectDate);
      return doList.sort((a, b) => {
        return (a.isImportant === b.isImportant) ? 0 : a.isImportant ? -1 : 1
      })
    },
    doneList() {
      const selectDate = this.$store.getters['calendar/getSelectedDate'];
      return this.$store.getters['todos/getTodoListbyTypeNDate']('done', selectDate);
    },
  },
  updated(){
    const test = this.$store.getters['todos/getAllTodos'];
    this.$store.commit('todos/saveTodos');
  },
  mounted(){
    this.$store.commit('todos/loadTodos');
  },
  methods: {
    onAddBtn(){
      this.$store.commit('modal/showModal', {
        id: generatorID(), modify: false,
        date: this.$store.getters['calendar/getSelectedDate']
      });
    }
  }
}
</script>

<style lang="scss" scoped>
#todo{
  position: fixed;
  width: 100%;
  height: 100%;
  background: $main-bg-color;
}
.todo__container{
  position: absolute;
  left: 50%;
  top: 50%;
  width: 500px;
  height: 800px;
  border-radius: 5px;
  overflow: hidden;
  transform: translate(-50%, -50%);
  background: $todo-white-color;
}
.todo__container__header{
  height: 138px;
  padding: 20px;
  text-align: center;
}
.todo__container__contents__header__btn{
  position: absolute;
  right: 12px;
  top: 12px;
  padding: 10px;
  font-size: 1.5rem;
  cursor: pointer;
}

.todo__container__contents{
  height: 662px;
  overflow-y: scroll;
}
.todo__container__contents__todoList ul{
  padding: 0 15px;
  margin: 0;
}
.todoList__title.do{
  color: $todo-do-color;
}
.todoList__title.done{
  color: $todo-done-color;
}
.todoList__title{
  text-align: center;
  padding: 5px 0;
  font-size: 1.1rem;
  font-weight: bold;
  background: $main-gray-color;
  border-top: 1px solid #e4e4e4;
  border-bottom: 2px solid #cecece;
}
.todo__container__contents__todoList ul li{
  display: flex;
  padding: 10px 0;
  align-items: baseline;
  font-size: 1.4rem;
  font-weight: normal;
  cursor: pointer;
  border-top: 1px solid $main-gray-color;
  border-bottom: 1px solid $main-gray-color;
}
.todo__container__contents__todoList ul li:first-child{
  border-top: none;
}
.todo__container__contents__todoList ul li:last-child{
  border-bottom: none;
}
</style>

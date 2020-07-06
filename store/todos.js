export default {
  state(){
    return{
      list: [
        {id:'asdkan22', text:'TEST TODO 1', isImportant: true, isDone: false},
        {id:'asdkan1',text:'DONE TODO 2', isImportant: true, isDone: true}
      ]
    }
  },
  getters: {
    getTodos(state){
      return state.list;
    }
  },
  mutations: {
    addTodo(state, { id, text }){
      state.list.push({
        id: id,
        text: text,
        isDone: false,
        isImportant: false
      })
    },
    deleteTodo(state, { id }){

    }
  }
}

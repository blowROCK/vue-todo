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
    },
    getById(state){
      return function(id){
        return state.list.find(todo => todo.id === id);
      }
    },
    getDoList(state){
      return state.list.filter(todo => todo.isDone === false);
    },
    getDoneList(state){
      return state.list.filter(todo => todo.isDone === true);
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
      state.list = state.list.filter(todo => {
        return todo.id !== id
      })
    },
    toggleDone(state, { id }){
			state.list = state.list.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo);
    },
    toggleImportant(state, { id }){
			state.list = state.list.map((todo) => todo.id === id ? { ...todo, isImportant: !todo.isImportant } : todo);
    }
  }
}
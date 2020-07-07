const Storage = window.localStorage;

export default {
  state(){
    return{
      list: []
    }
  },
  getters: {
    getAllTodos(state){
      return state.list;
    },
    getById(state){
      return function(id){
        return state.list.find(todo => todo.id === id);
      }
    },
    getTodoListbyTypeNDate(state){
      return function (type, date) {
        return state.list
          .filter(todo => {
            return ( todo.isDone === (type === 'done'))
              && new Date(todo.date).toDateString() === date.toDateString()
          })
      }
    },
    getDoneList(state){
      return state.list.filter(todo => todo.isDone === true);
    }
  },
  mutations: {
    addTodo(state, { id, text, date }){
      state.list.push({
        id: id,
        text: text,
        date: date,
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
    },
    saveTodos(state){
      Storage.setItem("TodoList", JSON.stringify(state.list));
    },
    loadTodos(state) {
      const storageList = Storage.getItem("TodoList");
      if(storageList === null) return [];
      state.list = JSON.parse(storageList);
    }
  }
}

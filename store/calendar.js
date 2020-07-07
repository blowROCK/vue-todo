export default {
  state(){
    return{
      currentDate : new Date(),
      selectedDate : new Date()
    }
  },
  getters: {
    getCurrentDate(state){
      return state.currentDate;
    },
    getSelectedDate(state){
      return state.selectedDate;
    }
  },
  mutations: {
    setSelectedDate(state, { date }){
      state.selectedDate = date;
    }
  }
}

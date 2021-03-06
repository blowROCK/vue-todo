export default {
  state(){
    return{
      isModalOpen: false,
      modalInfo : {
        id: null,
        text: null,
        modify: false
      }
    }
  },
  getters: {
    isModalOpen(state){
      return state.isModalOpen;
    },
    getModalData(state){
      return state.modalInfo;
    }
  },
  mutations: {
    showModal(state, { id, text = null, modify, date } ){
      state.isModalOpen = true;
      state.modalInfo= {
        id: id,
        text: text,
        modify: modify,
        date: date
      }
    },
    hideModal(state){
      state.isModalOpen = false;
      state.modalInfo = '';
    }
  }
}

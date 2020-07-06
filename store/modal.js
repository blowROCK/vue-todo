export default {
  state(){
    return{
      isModalOpen: false,
      modalInfo : {
        id: null,
        text: null
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
    showModal(state, { id, text = null } ){
      console.log(" showModal : ", id, state.isModalOpen)
      state.isModalOpen = true;
      state.modalInfo= {
        id: id,
        text: text
      }
    },
    hideModal(state){
      state.modalInfo= {
        id: null,
        text: null
      }
    }
  }
}

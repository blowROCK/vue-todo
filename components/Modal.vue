<template>
  <div id="modal" class="modal">
    <div class="modal__content">
      <div class="modal__content__textBox">
        <textarea id="textarea"
                  class="modal__content__textBox__textarea"
                  v-on:input="onChange"
                  v-model="text"
                  placeholder="내용을 입력 하세요."
                  maxlength="120" />
        <div id="tooltip" class="modal__content__textBox_tooltip">{{tooltip}}</div>
      </div>
      <div class="modal__content__btnBox">
        <div id="delete" class="modal__content__textBox__delete" v-if="true" v-on:click="onDelete">Delete</div>
        <div id="submit" class="modal__content__textBox__submit" @click="onSubmit">Submit</div>
      </div>
    </div>
    <div class="modal__back" @click="close"></div>
  </div>
</template>

<script>
import { isInvalidChar } from '../static/util';

export default {
  name: 'Modal',
  computed: {
    modalInfo(){
      return this.$store.getters['modal/getModalData'];
    }
  },
  data: function () {
    return {
      isSubmitOk: true,
      text: null,
      tooltip: '',
    };
  },
  mounted() {
    this.text = this.modalInfo.text;
  },
  methods: {
    onChange(e){
      const val = e.target.value;
      if(isInvalidChar(val)){
        this.tooltip = '!@#$%^&*()_+=,.? 를 제외한 특수 문자는 금지입니다.';
        this.isSubmitOk = false;
      }else if(val.length >= 120){
        this.tooltip = '최대 글자 수 120자를 넘길 수 없습니다.';
        this.isSubmitOk = false;
      }else{
        this.tooltip = '';
        this.isSubmitOk = true;
      }
    },
    onSubmit() {

    },
    onDelete(){

    },
    close(){
      console.log("hideModal")
      this.$store.commit('modal/hideModal');
    }
  }
}
</script>

<style lang="scss" scoped>
.modal{
  /*display: none;*/
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.modal.active{
  display: block;
}
.modal.modify #delete{
  display: block;
}
.modal.modify #submit{
  /*width: 50%;*/
}
.modal__content{
  position: absolute;
  left: 50%;
  top: 50%;
  padding: 4px;
  border-radius: 5px;
  transform: translate(-50%,-50%);
  background: $todo-white-color;
  z-index: 1;
}
.modal__content__textBox{
  position: relative;
}
.modal__content__textBox_tooltip{
  padding: 12px;
  margin-bottom: 5px;
  font-size: 0.8rem;
  border-radius: 3px;
  color: white;
  background: rgba(0,0,0,0.5);
}

.modal__content__textBox__delete{
  background: $btn-cancel-color;
}
.modal__content__textBox__submit{
  background: $btn-submit-color;
}
.modal__content__textBox__textarea{
  width: 400px;
  height: 500px;
  padding: 15px 20px;
  resize: none;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  background: $text-bg-color;
}
.modal__content__textBox__textarea::placeholder{
  text-align: center;
  font-size: 1.2rem;
  padding-top: 15px;
}
.modal__content__btnBox{
  display: flex;
}
.modal__content__btnBox div{
  width: 100%;
  text-align: center;
  cursor: pointer;
  padding: 14px 5px 10px 5px;
  margin-right: 4px;
  border-radius: 3px;
}
.modal__back{
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.1);
  top: 0;
  left: 0;
  position: absolute;
}
</style>

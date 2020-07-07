<template>
  <div class="day__box"
       :class="[dayInfo.isToday? 'TODAY' : '', dayInfo.isSelected? 'SELECTED':'']"
       v-on:click="selectingDate(dayInfo.tempDay)"
  >
    <div>{{dayInfo.day}}</div>
    <div>{{dayInfo.tempDay.getDate()}}</div>
  </div>
</template>
<script>
export default {
  name: 'CalendarItems',
  props: {
    dayInfo: {
      type: Object,
      require: true
    }
  },
  methods: {
    selectingDate(date){
      this.$emit('selectingDate', date)
    }
  }
}
</script>
<style lang='scss' scoped>
  .day__box.TODAY:after{
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    left: 50%;
    top: 120%;
    transform: translateX(-50%);
    border-radius: 100%;
    background: $todo-done-color;
  }
  .day__box.SELECTED{
    position: relative;
  }
  .day__box.SELECTED::before{
    position: absolute;
    content: '';
    width: 50px;
    height: 50px;
    top: 42%;
    left: 50%;
    background: #ccc;
    border-radius: 50%;
    opacity: 0.4;
    transform: translate(-50%,-50%);
  }
</style>

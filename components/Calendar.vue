<template>
    <div class="Carlendar" id="Carlendar">
        <div id="year" class="todo__container__header__year">
          {{dateInfo.year}}
        </div>
        <div id="month" class="todo__container__header__month">
          {{this.monthNameEng[dateInfo.month]}}
        </div>
        <div class="todo__container__header__week">
            <div id="left" @click="onGoToPrevWeek" class="todo__container__header__week__arrows ">
                <div>{{`<`}}</div>
            </div>
            <ul id="week" class="todo__container__header__week__days">
              <li v-for="(day, index) in thisWeek" :key="index">
                <calendar-items :dayInfo="day" v-on:selectingDate="onSelectDate"/>
              </li>
            </ul>
            <div id="right" @click="onGoToNextWeek" class="todo__container__header__week__arrows right">
                <div>{{`>`}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import CalendarItems from "./CalendarItem";

export default {
  name: 'Calendar',
  components: {CalendarItems},
  data: function () {
    return {
      dayWeekEng : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      monthNameEng : {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December",
      },
      dateInfo : {
        year : null,
        month: null,
        today: null,
        dayOfWeek: null
      },
      thisWeek: null
    };
  },
  computed: {
    getCurrent(){
      return this.$store.getters['calendar/getCurrentDate'];
    },
    getSelected(){
      return this.$store.getters['calendar/getSelectedDate'];
    }
  },
  mounted(){
    this.dateInfo = {
      year: this.getSelected.getFullYear(),
      month: this.getSelected.getMonth() + 1,
      today: this.getSelected.getDate(),
      dayOfWeek: this.getSelected.getDay()
    };
    this.thisWeek = this.getThisWeek();
  },
  beforeUpdate(){
    this.dateInfo = {
      year: this.getSelected.getFullYear(),
      month: this.getSelected.getMonth() + 1,
      today: this.getSelected.getDate(),
      dayOfWeek: this.getSelected.getDay()
    };
    this.thisWeek = this.getThisWeek();
  },
  methods: {
    onGoToPrevWeek(){
      this.$store.commit('calendar/setSelectedDate', {
        date: this.getDayOfThisWeek(-1)
      });
      this.thisWeek = this.getThisWeek();
    },
    onGoToNextWeek(){
      this.$store.commit('calendar/setSelectedDate', {
        date: this.getDayOfThisWeek(+7)
      });
      this.thisWeek = this.getThisWeek();
    },
    onSelectDate(date){
      this.$store.commit('calendar/setSelectedDate', {
        date: date
      });
      this.thisWeek = this.getThisWeek();
    },
    getThisWeek(){
      return this.dayWeekEng.map((day, index) => {
        const temp = this.getDayOfThisWeek(index);
        return {
          tempDay: temp,
          day: day,
          isToday: this.isToday(temp),
          isSelected: this.isSelected(temp)
        }
      })
    },
    getDayOfThisWeek(index){
      const time = new Date(this.getSelected);
      const date = this.dateInfo.today - this.dateInfo.dayOfWeek + index;
      return new Date(time.setDate(date));
    },
    isToday(date){
      return this.getCurrent.toDateString() === date.toDateString();
    },
    isSelected(date){
      return this.getSelected.toDateString() === date.toDateString();
    }
  }
}
</script>
<style lang='scss' scoped>

  .todo__container__header__year{
    font-size: 2rem;
  }
  .todo__container__header__month{
    padding: 10px 0;
    font-size: 1.5rem;
  }
  .todo__container__header__week{
    display: flex;
    position: relative;
    height: 55px;
    align-items: center;
    justify-content: space-between;
  }
  .todo__container__header__week__arrows{
    display: flex;
    width: 4%;
    height: 100%;
    align-items: center;
    cursor: pointer;
  }
  .todo__container__header__week__arrows div{
    width: 100%;
  }
  .todo__container__header__week__days{
    display: flex;
    width: 82%;
    padding: 10px;
    margin: 0;
    justify-content: space-between;
  }
  .todo__container__header__week__days li{
    position: relative;
    cursor: pointer;
  }
  .todo__container__header__week__days li:first-child{
    color: red;
  }
</style>

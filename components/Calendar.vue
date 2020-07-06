<template>
    <div className="Carlendar" id="Carlendar">
        <!-- <div id="year" className="todo__container__header__year">{this.state.year}</div>
        <div id="month" className="todo__container__header__month">{this.state.monthNameEng[this.state.month]}</div>
        <div className="todo__container__header__week">
            <div id="left" onClick={this.onGoToPrevWeek.bind(this)} className="todo__container__header__week__arrows ">
                <div>
                    {`<`}
                </div>
            </div>
            <ul id="week" className="todo__container__header__week__days">{}
                {
                    this.state.dayWeekEng.map((day, index) => {
                        const tempDay = this.getDayOfThisWeek(index);
                        return (
                            <CarlendarItem key={tempDay}
                                            day={day}
                                            tempDay={tempDay}
                                            isToday={this.isToday(tempDay)}
                                            isSelected={this.isSelected(tempDay)}
                                            onSelectDate={(e)=>this.onSelectDate(e, tempDay)}
                            />
                        )
                    }
                )}
            </ul>
            <div id="right" onClick={this.onGoToNextWeek.bind(this)} className="todo__container__header__week__arrows right">
                <div>{`>`}</div>
            </div>
        </div> -->
    </div>
</template>
<script>
export default {
  name: 'Calendar'
    
}
</script>
<style lang='scss' scoped>

</style>
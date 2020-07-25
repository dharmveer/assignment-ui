<template>
  <div class="hello">
    <select :v-model="selected" @change="onChange($event)">
    <option v-for="listoption in listoptions" v-bind:key="listoption">
    {{ listoption }}
    </option>
    </select> 
    <GChart
    type="LineChart"
    :data="chartData"
    :options="chartOptions"
  />
  </div>


</template>

<script>
import { GChart } from 'vue-google-charts'
import lists from "../data/report.json";
export default {
 props: {
        msg: String,
    },
    components: {
    GChart
  },
   methods: {
        onChange(event) {
           // this.selected = event.target.value;
           let hello = [['Year',  event.target.value]];
            this.$store.dispatch('selectedval', event.target.value)
            console.log(this.selected)
           if(event.target.value=="clickThruRate") {
              let adults = this.lists.records.map(person => { return  (
              [person.date, person.clickThruRate]
            )} );
              this.$store.dispatch('setchartdata', hello.concat(adults))
           } else if(event.target.value=="pageViews") {
              let adults = this.lists.records.map(person => { return  (
              [person.date, person.pageViews]
            )} );
              this.$store.dispatch('setchartdata', hello.concat(adults))
           }else if (event.target.value=="orders"){
             console.log('clickThruRate')
             let adults = this.lists.records.map(person => { return  (
              [person.date, person.orders]
            )} );
              this.$store.dispatch('setchartdata', hello.concat(adults))
           } else {
             let adults = this.lists.records.map(person => { return  (
              [person.date, person.sales]
            )} );
              this.$store.dispatch('setchartdata', hello.concat(adults))
           }
        }
        },
    data() {
        return {
            text: '',
            adults: [],
            lists: [],
            listoptions: [],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        }
      }
        }
    },
    mounted () {
        this.lists = lists
        this.listoptions = Object.keys(this.lists.records[0]);
       let hello = [['Year',  'Expenses']];
       
       let adults = this.lists.records.map(person => { return  (
          [person.date, person.sales]
         )} );
          this.$store.dispatch('setchartdata', hello.concat(adults))
},
computed: {
  listsstor() {
    console.log("ddd" + this.selected)
     
    console.log(this.adults)
    return this.$store.state.listsstor;
  },

  selected() {
    return this.$store.state.selected;
  },

  chartData(){
    return this.$store.state.chartData;
  }
}

}
</script>
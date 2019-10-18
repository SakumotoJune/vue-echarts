<template>
  <v-chart :options="option" :style="{ width: 940+'px', height: 500+'px'}"/>
</template>

<script>
export default {
  namespace: 'scatter',
  data() {
    return {
      option: {
        backgroundColor: '#364366',
          xAxis: {},
          yAxis: {},
          series: [{
              symbolSize: 20,
              data: [
                  {
                    value: [10,10],
                    symbolSize: 10,
                    itemStyle: {
                      color: '#ffbc50',
                      opacity: 1
                    }
                  },{
                    value: [10,10],
                    symbolSize: 20,
                    itemStyle: {
                      color: '#ffbc50',
                      opacity: 0.5
                    }
                  },{
                    value: [20,20],
                    symbolSize: 10,
                    itemStyle: {
                      color: '#ff8080'
                    }
                  },{
                    value: [20,20],
                    symbolSize: 30,
                    itemStyle: {
                      color: '#ff8080',
                      opacity: .8
                    }
                  },{
                    value: [20,20],
                    symbolSize: 60,
                    itemStyle: {
                      color: '#ff8080',
                      opacity: .5
                    }
                  },{
                    value: [40,40],
                    symbolSize: 10,
                    itemStyle: {
                      color: '#8a72ff',
                      opacity: 1
                    }
                  },{
                    value: [40,40],
                    symbolSize: 70,
                    itemStyle: {
                      color: '#8a72ff',
                      opacity: .8
                    }
                  },{
                    value: [40,40],
                    symbolSize: 140,
                    itemStyle: {
                      color: '#8a72ff',
                      opacity: .5
                    }
                  },{
                    value: [50,50],
                    symbolSize: 10,
                    itemStyle: {
                      color: '#4da6ff',
                      opacity:1
                    }
                  },{
                    value: [50,50],
                    symbolSize: 90,
                    itemStyle: {
                      color: '#4da6ff',
                      opacity:.8
                    }
                  },{
                    value: [50,50],
                    symbolSize: 180,
                    itemStyle: {
                      color: '#4da6ff',
                      opacity:.5
                    }
                  }
              ],
              type: 'scatter'
          }]
        }
    }
  }
}
</script>

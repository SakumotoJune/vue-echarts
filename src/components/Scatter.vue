<template>
  <v-chart :options="option" :style="{ width: 1500+'px', height: 800+'px'}"/>
</template>

<script>
export default {
  namespace: 'scatter',
  data() {
    return {
      option: {
        backgroundColor: '#364366',
        grid: {
          width: '940px',
          height: '500px',
          top: 120
        },
        xAxis: {
          scale: true,
          // boundaryGap: false,
          min:0,
          // splitLine:{show: true},
          axisTick: {
            show: false
          },
          axisLabel: {
            color: 'white'
          },
          axisLine: {
            lineStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                  offset: 0, color:'purple'
                },{
                  offset: .2, color: 'blue'
                },{
                  offset: .3, color: 'green'
                },{
                  offset: .5, color: 'yellow'
                },{
                  offset: .7, color:'orange'
                },{
                  offset: 1, color: 'red'
                }]

              },
              width: 5
            }
          },
          data: [{
            value: '很低'
          },{
            value: '较低'
          },{
            value: '一般'
          },{
            value: '较高'
          },{
            value: '最高'
          }]
        },
        yAxis: {
            scale: true,
            min:0,
            axisLabel: {
              color: 'white'
            },
            axisTick: {
              show: false
            },
            // splitLine:{show: true},
            axisLine: {
            lineStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                colorStops: [{
                  offset: 0, color:'purple'
                },{
                  offset: .2, color: 'blue'
                },{
                  offset: .3, color: 'green'
                },{
                  offset: .5, color: 'yellow'
                },{
                  offset: .7, color:'orange'
                },{
                  offset: 1, color: 'red'
                }]

              },
              width: 5
            }
          },
            data: [{
              value:'最低'
            },{
              value: '较低'
            },{
              value: '中等'
            },{
              value: '较高'
            },{
              value: '最高'
            }]
        },
        series: [{
            symbolSize: 20,
            data: [
                {
                  value: ['很低','最低'],
                  symbolSize: 10,
                  itemStyle: {
                    color: '#ffbc50',
                    opacity: 1
                  },
                  label: {
                    show: true,
                    formatter: [
                        // '{title|{b}}{abg|}',
                        '{hr|}',
                        '{title|饮料区}',
                        '{label|销售情况 }{value|很低}',
                        '{label|热度 }{value|最低}'
                    ].join('\n'),
                    position: ["300%","-500%"],
                    backgroundColor: 'rgba(0,23,11,0.3)',
                    // borderColor:'#777',
                    borderWidth: 1,
                    borderRadius: 4,
                    height: 90,
                    rich: {
                      title: {
                          color: '#eee',
                          // align: 'center'
                          fontSize: 20,
                          lineHeight: 20,
                          height: 20,
                          padding: [-15, 0, -10, 10],
                          width: 70,
                      },
                      label: {
                        width: 30,
                        padding: [0, 30, 10, 10],
                      },
                      value: {
                          width: 40,
                          padding: [0, 10, 10, 0],
                          align: 'right',
                          color:'#ffffff'
                      }
                    }
                  }
                },{
                  value: ['很低','最低'],
                  symbolSize: 20,
                  itemStyle: {
                    color: '#ffbc50',
                    opacity: 0.5
                  }
                },{
                  value: ['较低','较低'],
                  symbolSize: 10,
                  itemStyle: {
                    color: '#ff8080'
                  }
                },{
                  value: ['较低','较低'],
                  symbolSize: 30,
                  itemStyle: {
                    color: '#ff8080',
                    opacity: .8
                  }
                },{
                  value: ['较低','较低'],
                  symbolSize: 60,
                  itemStyle: {
                    color: '#ff8080',
                    opacity: .5
                  }
                },{
                  value: ['较高','中等'],
                  symbolSize: 10,
                  itemStyle: {
                    color: '#8a72ff',
                    opacity: 1
                  }
                },{
                  value: ['较高','中等'],
                  symbolSize: 70,
                  itemStyle: {
                    color: '#8a72ff',
                    opacity: .8
                  }
                },{
                  value: ['较高','中等'],
                  symbolSize: 140,
                  itemStyle: {
                    color: '#8a72ff',
                    opacity: .5
                  }
                },{
                  value: ['最高', '最高'],
                  symbolSize: 10,
                  itemStyle: {
                    color: '#4da6ff',
                    opacity:1
                  }
                },{
                  value: ['最高', '最高'],
                  symbolSize: 90,
                  itemStyle: {
                    color: '#4da6ff',
                    opacity:.8
                  }
                },{
                  value: ['最高', '最高'],
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

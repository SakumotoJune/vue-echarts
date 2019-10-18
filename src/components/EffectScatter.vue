<template>
  <v-chart :options="option" :style="{ width: 1500+'px', height: 800+'px'}"/>
</template>

<script>
export default {
  namespace: 'EffecrScatter',
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
            type: 'effectScatter',
            // symbolSize: 20,
            rippleEffect: {
              brushType: 'fill',
              scale: 2.0
            },
            label: {
              normal: {
                // position: 'right'
              }
            },
            tooltip: {
              trigger: 'item'
            },
            data: [
              {
                value: ['较低','较低'],
                symbolSize: 30,
                itemStyle: {
                  color: '#ffbc50'
                },
                label: {
                  show: true,
                  formatter: [
                      // '{title|{b}}{abg|}',
                      '{title|饮料区}',
                      '{label|销售情况 }{value|最高}',
                      '{label|销售情况 }{value|较低}'
                      // '{hr|}',
                      // '  {Sunny|}{value|202}{rate|55.3%}',
                      // '  {Cloudy|}{value|142}{rate|38.9%}',
                      // '  {Showers|}{value|21}{rate|5.8%}'
                  ].join('\n'),
                  position: ["200%","-100%"],
                  backgroundColor: 'rgba(0,23,11,0.3)',
                  // borderColor:'#777',
                  borderWidth: 1,
                  borderRadius: 4,
                  height: 100,
                  rich: {
                    title: {
                        color: '#eee',
                        // align: 'center'
                        fontSize: 20,
                        height: 20,
                        padding: [10, 0, 0, 10],
                        width: '100%',
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
                symbolSize: 10,
                itemStyle: {
                  color: '#ff8080'
                },
                label: {
                  show: true,
                  formatter: [
                      // '{title|{b}}{abg|}',
                      '{title|饮料区}',
                      '{label|销售情况 }{value|最高}',
                      '{label|销售情况 }{value|较低}'
                      // '{hr|}',
                      // '  {Sunny|}{value|202}{rate|55.3%}',
                      // '  {Cloudy|}{value|142}{rate|38.9%}',
                      // '  {Showers|}{value|21}{rate|5.8%}'
                  ].join('\n'),
                  position: ["100%","-1100%"],
                  backgroundColor: 'rgba(0,23,11,0.3)',
                  // borderColor:'#777',
                  borderWidth: 1,
                  borderRadius: 4,
                  height: 100,
                  rich: {
                    title: {
                        color: '#eee',
                        // align: 'center'
                        fontSize: 20,
                        height: 20,
                        padding: [10, 0, 0, 10],
                        width: '100%',
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
                value: ['一般','较高'],
                symbolSize: 50,
                itemStyle: {
                  color: 'white'
                },
                label: {
                  show: true,
                  formatter: [
                      // '{title|{b}}{abg|}',
                      '{title|饮料区}',
                      '{label|销售情况 }{value|最高}',
                      '{label|销售情况 }{value|较低}'
                      // '{hr|}',
                      // '  {Sunny|}{value|202}{rate|55.3%}',
                      // '  {Cloudy|}{value|142}{rate|38.9%}',
                      // '  {Showers|}{value|21}{rate|5.8%}'
                  ].join('\n'),
                  position: ["200%","-100%"],
                  backgroundColor: 'rgba(0,23,11,0.3)',
                  // borderColor:'#777',
                  borderWidth: 1,
                  borderRadius: 4,
                  height: 100,
                  rich: {
                    title: {
                        color: '#eee',
                        // align: 'center'
                        fontSize: 20,
                        height: 20,
                        padding: [10, 0, 0, 10],
                        width: '100%',
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
                value: ['最高', '最高'],
                symbolSize: 90,
                itemStyle: {
                  color: '#4da6ff'
                },
                label: {
                  show: true,
                  formatter: [
                      // '{title|{b}}{abg|}',
                      '{title|饮料区}',
                      '{label|销售情况 }{value|最高}',
                      '{label|热度值 }{value|较低}'
                      // '{hr|}',
                      // '  {Sunny|}{value|202}{rate|55.3%}',
                      // '  {Cloudy|}{value|142}{rate|38.9%}',
                      // '  {Showers|}{value|21}{rate|5.8%}'
                  ].join('\n'),
                  position: ["-10%","150%"],
                  backgroundColor: 'rgba(0,23,11,0.3)',
                  // borderColor:'#777',
                  borderWidth: 1,
                  borderRadius: 4,
                  height: 100,
                  rich: {
                    title: {
                        color: '#eee',
                        // align: 'center'
                        fontSize: 20,
                        height: 20,
                        padding: [10, 0, 0, 10],
                        width: '100%',
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
                value: ['较高','中等'],
                symbolSize: 70,
                itemStyle: {
                  color: '#8a72ff'
                },
                label: {
                  show: true,
                  formatter: [
                      // '{title|{b}}{abg|}',
                      '{title|饮料区}',
                      '{label|销售情况 }{value|最高}',
                      '{label|热度值 }{value|较低}'
                      // '{hr|}',
                      // '  {Sunny|}{value|202}{rate|55.3%}',
                      // '  {Cloudy|}{value|142}{rate|38.9%}',
                      // '  {Showers|}{value|21}{rate|5.8%}'
                  ].join('\n'),
                  position: ["-200%","100%"],
                  backgroundColor: 'rgba(0,23,11,0.3)',
                  // borderColor:'#777',
                  borderWidth: 1,
                  borderRadius: 4,
                  height: 100,
                  rich: {
                    title: {
                        color: '#eee',
                        // align: 'center'
                        fontSize: 20,
                        height: 20,
                        padding: [10, 0, 0, 10],
                        width: '100%',
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
              }
            ]
        }],
      }
    }
  }
}
</script>

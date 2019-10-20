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
              scale: 5
            },
            label: {
              normal: {
                // position: 'right'
              }
            },
            data: [
              {
                value: ['很低','最低'],
                symbolSize: 10,
                itemStyle: {
                  color: '#ff8080',
                  // opacity:.5
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
              }
            ]
        },{
          type: 'effectScatter',
          rippleEffect: {
              brushType: 'fill',
              scale: 10.0
            },
          data:[{
            value: ['较低','较低'],
                symbolSize: 10,
                itemStyle: {
                  color: '#ffbc50',
                  opacity: 1
                },
                label: {
                  show: true,
                  formatter: [
                      '{hr|}',
                      '{title|饮料区}',
                      '{label|销售情况 }{value|较低}',
                      '{label|热度 }{value|较低}'
                  ].join('\n'),
                  position: ["500%","-500%"],
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
          }]
        },{
          type: 'effectScatter',
          rippleEffect: {
              brushType: 'fill',
              scale: 25.0
            },
          data:[{
                value: ['最高', '最高'],
                symbolSize: 10,
                itemStyle: {
                  color: '#4da6ff',
                  // opacity:.5
                },
                label: {
                  show: true,
                  formatter: [
                      '{hr|}',
                      '{title|饮料区}',
                      '{label|销售情况 }{value|最高}',
                      '{label|热度值 }{value|最高}'
                  ].join('\n'),
                  position: ["-2200%","-500%"],
                  backgroundColor: 'rgba(83,137,251,0.5)',
                  // borderColor:'#777',
                  borderWidth: 1,
                  borderRadius: 4,
                  height: 90,
                  // align: 'center',
                  // verticalAlign: 'middle',
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
              },]
        },{
          type: 'effectScatter',
          rippleEffect: {
              brushType: 'fill',
              scale: 20.0
            },
          data:[{
                value: ['较高','较高'],
                symbolSize: 10,
                itemStyle: {
                  color: '#8a72ff',
                  // opacity:.5
                },
                label: {
                  show: true,
                  formatter: [
                      '{hr|}',
                      '{title|饮料区}',
                      '{label|销售情况 }{value|较高}',
                      '{label|热度值 }{value|较高}'
                      // '{hr|}',
                      // '  {Sunny|}{value|202}{rate|55.3%}',
                      // '  {Cloudy|}{value|142}{rate|38.9%}',
                      // '  {Showers|}{value|21}{rate|5.8%}'
                  ].join('\n'),
                  position: ["-2000%","-500%"],
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
              }]
        },{
          type: 'effectScatter',
          rippleEffect: {
              brushType: 'fill',
              scale: 15.0
            },
          data:[{
                value: ['一般', '中等'],
                symbolSize: 10,
                itemStyle: {
                  color: '#4da6ff',
                  // opacity:.5
                },
                label: {
                  show: true,
                  formatter: [
                      '{hr|}',
                      '{title|饮料区}',
                      '{label|销售情况 }{value|一般}',
                      '{label|热度值 }{value|中等}'
                  ].join('\n'),
                  position: ["-1800%","-500%"],
                  backgroundColor: 'rgba(0,23,11,0.3)',
                  // borderColor:'#777',
                  borderWidth: 1,
                  borderRadius: 4,
                  height: 90,
                  // align: 'center',
                  // verticalAlign: 'middle',
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
              },]
        }],
      }
    }
  }
}
</script>

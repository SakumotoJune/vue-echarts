<template>
  <v-chart :options="option"/>
</template>

<script>
export default {
  namespace: 'PIE',
  data() {
    return {
      option: {
          backgroundColor: '#05274C',
          //暂时不用
          grid: {
              left: '20%'
          },
          color: ['#2AC9FD', '#76FBC0', '#35C96E', '#FCC708', '#48B188', '#5957C2', '#4A5D73'],
          series: [
              {
                  color: ['#2AC9FD', '#76FBC0', '#35C96E', '#FCC708', '#48B188', '#5957C2'],
                  type: 'pie',
                  radius: ['65', '100'],
                  hoverAnimation: false,
                  labelLine: {
                      normal: {
                          show: false,
                          length: 25,
                          length2: 120,
                          lineStyle: {
                              type: 'solid'
                          }
                      },
                  },
                  emphasis: {
                      itemStyle: {
                          shadowBlur: 10,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      },
                      label: {
                          show: true
                      }
                  },
                  label: {
                      normal: {
                          formatter: (params)=>{
                              // console.log(params);
                              return '{c|'+params.percent.toFixed(0)+'%}'
                          },
                          show: false,
                          position: 'center',
                          // borderWidth: 0,
                          // borderRadius: 4,
                          // padding: [0, -86],
                          // height: 70,
                          // fontSize: 13,
                          // align: 'center',
                          // color: '#3494BD',
                          z: 10,
                          //label 样式
                          rich: {
                              b: {
                                  fontSize: 12,
                                  lineHeight: 20,
                                  color: '#41B3DC',
                                  padding: [0, 0, 5, 0]
                              },
                              c: {
                                  fontSize: 20,
                                  lineHeight:20,
                                  color: 'orange'
                              }

                          }
                      },
                      // emphasis: {
                      //     show: true
                      // }
                  },
                  data: [{
                      name: '名称2',
                      value: '272',
                  }, {
                      name: '名称3',
                      value: '292',
                  }, {
                      name: '名称4',
                      value: '120',
                  }, {
                      name: '名称5',
                      value: '42',
                  }, {
                      name: '名称6',
                      value: '88',
                  }, {
                      name: '名称7',
                      value: '92',
                  }],
              },
              {
                  type: 'pie',
                  radius: ['110', '111'],
                  data: [100],
                  hoverAnimation: false,
                  label: {
                      show: false
                  }
              },
              {
                  type: 'pie',
                  hoverAnimation: false,
                  radius: ['50', '51'],
                  data: [100],
                  label: {
                      show: false
                  }
              },
              {
                  type: 'pie',
                  hoverAnimation: false,
                  radius: ['50','111'],
                  // color: ['#2AC9FD', '#76FBC0', '#35C96E', '#FCC708', '#48B188', '#5957C2'],
                  label: {
                      normal: {
                          show: false
                      }
                  },
                  data: [{
                      name: '名称2',
                      value: '272',
                      itemStyle: {
                          shadowBlur: 10,
                          shadowColor: 'rgba(0, 0, 0, 0.5)',
                          // opacity: 0
                      }

                  }, {
                      name: '名称3',
                      value: '292',
                      itemStyle: {
                          // color: "transparent",
                          opacity: 0
                      }
                  }, {
                      name: '名称4',
                      value: '120',
                      itemStyle: {
                          opacity: 0
                      }
                  }, {
                      name: '名称5',
                      value: '42',
                      itemStyle: {
                          opacity: 0
                      }
                  }, {
                      name: '名称6',
                      value: '88',
                      itemStyle: {
                          opacity: 0
                      }
                  }, {
                      name: '名称7',
                      value: '92',
                      itemStyle: {
                          opacity: 0
                      }
                  }]
              }
          ]
        }
    }
  }
}
</script>

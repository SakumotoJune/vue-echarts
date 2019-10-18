<template>
  <div>
    <Scatter  v-for="item in scatters" :key="item.index" :circles="item.circles" />
  </div>
</template>

<script>
import Scatter from '../components/Scatter'
export default {
  namespace: 'ScatterTest',
  components: {
    Scatter
  },
  data: {
    dimaters: [{ d: 40, x: 40},{d: 80, x: 260},{ d: 120, x: 490},{ d: 160, x: 720 },{ d: 200, x: 950}],
    scatters: []
  },
  methods: {
    possibilityCalculation() {

    }
  }
}
</script>

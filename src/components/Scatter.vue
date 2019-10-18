<template>
  <div id="coordinate">
    <div class="one"></div>
    <div class="circle">
      <div v-for="item in circles" :key="item.index" :style="{ left: item.x+'px',top: item.y+'px', width: item.d + 'px', height: item.d + 'px'}"></div>
        <!-- <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div> -->
      </div>
  </div>
</template>

<script>
export default {
  namespace: 'Scatter',
  props: {
    circles: Array
  }
}
</script>

<style scoped>
#coordinate {
  width: 1200px;
  height: 1000px;
  margin: 0 auto;
  background: #05274C;
  /* border: 0px white solid; */
  position: absolute;
}
.one {
  width: 1005px;
  height: 805px;
  background: -webkit-linear-gradient(top, transparent 200px, white 201px),-webkit-linear-gradient(left, transparent 250px, white 251px);
  background-size: 251px 201px;
  position: absolute;
  top: 50px;
  left: 50px;
  border-top-color: white;
  border-top-width: 1px;
  border-top-style: solid;
  border-left-color: white;
  border-left-width: 1px;
  border-left-style: solid;
}
.circle div {
    position: absolute;
    background-color: transparent;
    border: 1px #a72525 solid;
    border-radius: 100px;
}
/**
.circle div:nth-child(2) {
    width: 80px;
    height: 80px;
    top: 210px;
    left: 260px;
    position: absolute;
    background-color: transparent;
    border: 1px #a72525 solid;
    border-radius: 100px;
}
.circle div:nth-child(3) {
    width: 120px;
    height: 120px;
    top: 390px;
    left: 490px;
    position: absolute;
    background-color: transparent;
    border: 1px #a72525 solid;
    border-radius: 100px;
}
.circle div:nth-child(4) {
    width: 160px;
    height: 160px;
    top: 570px;
    left: 720px;
    position: absolute;
    background-color: transparent;
    border: 1px #a72525 solid;
    border-radius: 100px;
}
.circle div:nth-child(5) {
    width: 200px;
    height: 200px;
    top: 750px;
    left: 950px;
    position: absolute;
    background-color: transparent;
    border: 1px #a72525 solid;
    border-radius: 100px;
}
*/

</style>

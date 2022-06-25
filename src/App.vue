<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>
    {{logo}}
    <h4 class="blue" :style='스타일'> 원룸</h4>
    <p>{{price1}}만원</p>
  </div>
    <div>
    <h4> 원룸</h4>
    <p>{{price2}}만원</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      price1 : 50,
      price2 : 70,
      logo : '원룸샵',
      스타일 : 'color : blue',
    }
  },
  components: {
     }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

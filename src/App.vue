


<template>
  <div>
     <h1>지성</h1>
    <jisung :title="title"></jisung>

  </div>
</template>

<script>
import jisung from '@/component/jisung.vue';

 export default {
   components: {
     jisung
   },

  data(){
    return{
      name:'지성'
    }
  },

  data2(){
     return {
       title: 5
     }
  }
 }
</script>


<style scoped>
h1{
  font-size: 20px;
}

</style>
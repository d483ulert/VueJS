<template>
  <div>
      User List
    <div
        v-for="user in users"
        :key="user.id">

    </div>
  </div>

</template>

<script>
import axios from 'axios';

  export default {
    data() {
      return{
        user: []
      }
    },
    created() {
      this.getUsers();
    },
    methods: {
      getUsers(){
        axios.get('www.sss.sss').then(res=>{
          this.user=res.data;
        });
      }
    }
  }

</script>


<style>

</style>
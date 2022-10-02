<template>
  <div>
      User List
    <div
        v-for="user in users"
        :key="user.id">

    </div>
    <div>
      complete todo: {{ numberOfCompletedTodo }}
    </div>
  </div>

</template>

<script>
import { mapState } from 'vuex';
  export default {
    created() {
      this.getUsers();
    },
    computed: {
      users() {
              return this.$store.state.users();
      },
      numberOfCompletedTodo() {
        return this.$store.getter.numberOfCompletedTodo();
      },
      ...mapState([
          "users",
          "numberOfCompletedTodo"
      ]),
    },
    methods: {
     getUsers(){
        this.$store.dispatch('getUsers');
      }
    }
  }

</script>


<style>

</style>
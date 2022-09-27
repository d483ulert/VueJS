<template>
  <div>
      <Todo
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
          @toggle-checkbox="toggleCheckBox"
          @click-delete ="deleteTOdo"
      />
  </div>

</template>

<script>
import Todo from '@/components/TodoVue.vue';

  export default {
    components: {
      Todo
    },
    props: {
      todos: {
        type: Array,
        require: true,

      }
    },
    methods: {
      toggleCheckbox()
    }
  }

</script>


<style>

</style>

<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <input
        v-model="todoText"
        type="text"
        class="w-100 p-2"
        placeholder="Type todo"
        @keyup.enter="addTodo">

    <hr>
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
import TodoVue from "@/components/todoVue";
export default {
  components: {
    Todo
  },
  data(){
    return {
      todoText: '',
      todos: [
        {id: 1, text: 'buy a car', checked: false},
        {id: 2, text: 'buy a game', checked: false}
      ]
    }
  },
  methods: {
    deleteTodo(id) {
        const index = this.todos.findIndex(todo =>{
          return todo.id ===id;
        });
        this.todos.splice(index,1);
    },
    addTodo(e) {
      this.todos.push({
        id: Math.random(),
        text: e.target.value(),
        checked: false
      });
      this.todoText = '';
    },
    toggleCheckBox({id, checked}){
      const index = this.todos.findIndex(todo =>{
        return todo.id === id;
      });
      this.todos[index].checked =checked;
    }
  }
}

</script>

<style>

</style>


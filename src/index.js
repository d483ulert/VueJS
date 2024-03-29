import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: { //데이터 넣는곳
        todos: [
            { id: 1, text: 'buy a car', checked: false},
            { id: 2, text: 'pay a car', checked: false},
        ],
        users: []
    },
    mutations: {
        //데이터를 실질적으로 바꾸는곳
        ADD_TODO(state,value) {
            state.todos.push({
                id: Math.random(),
                text: value,
                checked: false
            });
        },
        TOGGLE_TODO(state,{id, checked}) {
            const index = state.todos.findIndex(todo =>{
                return todo.id ===id;
            })
            state.todos[index].checked =checked;
        },
        DELETE_TOD(state,todo_id) {
            const index = state.todos.findIndex( todo =>{
               return todo.id === todo_id;
            });
            state.todos.splice(index,1);

        }
    },
    actions: {
        getUsers({ commit }) {
            axios.get('www.sss.sss').then (res => {
                commit('SET_USER',res.data);
            });
        },
        //함수 및 비동기적 행위
        addTodo({ commit },payload) {
            setTimeout()

            commit('ADD_TODO', value);
        }
    },
    getters: { //computed
        numberOfCompletedTodo: state =>{
            return state.todos.filter(todo => todo.checked).length;
        }
    }

})
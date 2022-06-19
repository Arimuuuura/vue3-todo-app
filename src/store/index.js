import { createStore } from 'vuex'

export default createStore({
  state: {
	todos: [],
	completes: [],
  },
  getters: {},
// 同期的
  mutations: {
	addTodo(state, input) {
		state.todos.push({
			todo: input,
			completed: false,
		})
	},
	completeTodo(state, payload) {
		state.completes = [...state.completes, state.todos[payload.value]]
		state.todos.splice(payload.value, 1)
		console.log(state.completes);
		console.log(state.todos);
	},
	deleteTodo(state, payload) {
		state.todos.splice(payload.value, 1)
	},
	back(state, payload) {
		state.todos = [...state.todos, state.completes[payload.value]]
		state.completes.splice(payload.value, 1)
	},
  },
// 非同期
  actions: {},
  modules: {},
})

import { createStore } from 'vuex'

export default createStore({
  state: {
	input: '',
	todos: [],
	completes: [],
	count: 0
  },
  getters: {},
// 同期的
  mutations: {
	setInput(state, payload) {
		console.log(payload.value);
		state.input = payload.value;
	},
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

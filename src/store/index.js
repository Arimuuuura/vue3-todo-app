import { createStore } from 'vuex'

export default createStore({
  state: {
	input: '',
	todos: [],
	completes: [],
  },
  getters: {
	getInput: () => {
		return this.input
	}
  },
  mutations: {
	addTodo(state) {
		if(!state.input) return
		state.todos = [...state.todos, state.input]
		state.input = ''
	},
	complete(state, payload) {
		state.completes = [...state.completes, state.todos[payload.value]]
		state.todos.splice(payload.value, 1)
	},
	deleteTodo(state, payload) {
		state.todos.splice(payload.value, 1)
	},
	back(state, payload) {
		state.todos = [...state.todos, state.completes[payload.value]]
		state.completes.splice(payload.value, 1)
	},
  },
  actions: {
  },
  modules: {
  },
})

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
	test(state, payload) {
		console.log("Hi arimura", state, payload, state.input);
		state.input += payload.value
	},
	addTodo(state, input) {
		state.todos.push({
			todo: input,
			completed: false,
		})
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
	increment(state) {
		state.count++
	},
	addCount(state) {
		state.count++
	}
  },
// 非同期
  actions: {
	incrementAction({ commit }) {
		commit('increment');
	},
	addCountAction({ commit }, payload) {
		commit('addCount', payload);
	},
  },
  modules: {
  },
})

<template>
  <div class="input">
    <input placeholder="TODOを入力" v-model="inputValue" />
    <button @click="addTodo">追加</button>
  </div>
  <!-- {{inputValue}}
  {{input}} -->
</template>

<script>
import { ref } from 'vue'
export default {
	name: 'InputView',
    props: {
		input: String
	},
	setup(props, { emit }) {
		console.log(`props: ${props.input}`);
		const inputValue = ref(props.input)

		const addTodo = () => {
			emit('add-todo')
		}

		return {
			inputValue,
			addTodo
		}
	},
	data() {
		// return {
		// 	inputValue: '',
		// }
	},
	methods: {
		// addTodo() {
		// 	this.$emit('event-test1', this.inputValue)
		// }
	},
}
</script>

<style>

</style>
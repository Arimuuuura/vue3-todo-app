<template>
  <div class="input">
    <input placeholder="TODOを入力" v-model="inputValue" />
    <button @click="addTodo">追加</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
	name: 'InputView',
	props: {
		input: String,
	},
	setup(props, { emit }) {
		let inputValue = ref(props.input)

		const addTodo = () => {
			emit('add-todo', inputValue)
		}

		return {
			inputValue,
			addTodo
		}
	},
}
</script>

<style>

</style>
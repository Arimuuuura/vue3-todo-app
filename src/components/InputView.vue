<template>
  <div class="input">
    <input placeholder="TODOを入力" v-model="inputValue" />
    <button @click="$emit('eventTest1')">追加</button>
  </div>
</template>

<script>
export default {
	name: 'InputView',
    props: [
		'input',
	],
	data() {
		return {
			inputValue: this.input,
		}
	},
	methods: {},
}
</script>

<style>

</style>
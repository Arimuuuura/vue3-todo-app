<template>
  <div class="in-complete">
    <p class="title">未完了のTODO</p>
    <ul>
      <li v-for="(todo, index) in $store.state.todos" :key="index">
        <div class="list-row">
          <p>{{ todo.todo }}</p>
          <button @click="completeTodo(index)">完了</button>
          <button @click="deleteTodo(index)">削除</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
	name: 'IncompleteView',
	setup(props) {
		const store = useStore();
		console.log(props.getTodos);
		const completeTodo = (index) => {
			store.commit('completeTodo', {value: index})
		}

		const deleteTodo = (index) => {
			store.commit('deleteTodo', {value: index})
		}

		return {
			completeTodo,
			deleteTodo
		}
	},
}
</script>

<style>

</style>
<template>
  <div class="complete">
    <p className="title">完了したTODO</p>
    <ul>
      <li v-for="(complete, index) in $store.state.completes" :key="index">
        <div className="list-row">
          <p>{{ complete.todo }}</p>
          <button @click="back(index)">戻す</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
	name: 'CompleteView',
	setup() {
		const store = useStore();

		const back = (index) => {
			store.commit('back', {value: index})
		}

		return {
			back
		}
	}
}
</script>

<style>

</style>
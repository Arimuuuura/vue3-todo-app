<template>
  <InputView @add-todo="addTodo" />
  <IncompleteView />
  <CompleteView />
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

import InputView from '@/components/InputView.vue'
import IncompleteView from '@/components/IncompleteView.vue'
import CompleteView from '@/components/CompleteView.vue'

export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    InputView,
    IncompleteView,
    CompleteView
  },
  setup() {
    const store = useStore();
    const input = ref('')

    const addTodo = (e) => {
      store.commit('addTodo', e);
      input.value = '';
    }

    return {
      input,
      addTodo,
    };
  },
  methods: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.input {
  background-color: #c1e4ff;
  width: 400px;
  height: 30px;
  padding: 8px;
  margin: 8px;
  border-radius: 8px;
}

.in-complete {
  background-color: #aefad7;
  width: 400px;
  min-height: 200px;
  padding: 8px;
  margin: 8px;
  border-radius: 8px;
}

.complete {
  background-color: #fcfcc3;
  width: 400px;
  min-height: 200px;
  padding: 8px;
  margin: 8px;
  border-radius: 8px;
}

input {
  border-radius: 16px;
  border: 1px solid #999;
  width: 200px;
  padding: 6px 16px;
  margin: 0 16px;
  outline: none;
}

button {
  border-radius: 16px;
  border: 1px solid #999;
  padding: 4px 16px;
  margin: 0 8px;
}

button:hover {
  background-color: tomato;
  color: #fff;
  cursor: pointer;
}

.title {
  text-align: center;
  margin-top: 0;
  font-weight: bold;
  color: #666;
}

.list-row {
  display: flex;
  align-items: center;
  padding-bottom: 4px;
}

.list-row > p {
  margin-right: 8px;
}

</style>

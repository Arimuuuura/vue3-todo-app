<template>
  <div class="input">
    <input placeholder="TODOを入力" v-model="input" />
    <button v-on:click="add">追加</button>
  </div>
  <div class="in-complete">
    <p class="title">未完了のTODO</p>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <div class="list-row">
          <p>{{ todo }}</p>
          <button v-on:click="complete(index)">完了</button>
          <button v-on:click="deleteTodo(index)">削除</button>
        </div>
      </li>
    </ul>
  </div>
  <div class="complete">
    <p className="title">完了したTODO</p>
    <ul>
      <li v-for="(complete, index) in completes" :key="index">
        <div className="list-row">
          <p>{{ complete }}</p>
          <button v-on:click="back(index)">戻す</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      count: 0,
      input: '',
      todos: [],
      completes: []
    }
  },
  components: {},
  methods: {
    add() {
      if(!this.input) return
      this.todos = [...this.todos, this.input]
      this.input = ''
    },
    complete(index) {
      this.completes = [...this.completes, this.todos[index]]
      this.todos.splice(index, 1)
    },
    deleteTodo(index) {
      this.todos.splice(index, 1)
    },
    back(index) {
      this.todos = [...this.todos, this.completes[index]]
      this.completes.splice(index, 1)
    }
  }
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

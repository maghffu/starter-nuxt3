<script setup lang="ts">
import { Todo } from "~~/composables/Todo";

const todos = useTodos();
const formTodo = useState<boolean>("formTodo", () => false);
const name = useState<string>("name", () => "");

const saveTodo = () => {
  const todo: Todo = {
    name: name.value,
    done: false,
  };
  addTodo(todo);
  formTodo.value = false;
  name.value = "";
};
</script>

<template>
  <h1>Hello wordl</h1>
  <p v-for="(todo, i) in todos" :key="i">
    <input type="checkbox" value="todo.done" /> {{ todo.name }}
  </p>
  <v-btn @click="formTodo = true">Add</v-btn>
  <v-form v-if="formTodo" @submit.prevent="saveTodo">
    <v-text-field v-model="name" type="text" placeholder="name" name="name" />
    <v-btn type="submit">save</v-btn>
  </v-form>
</template>

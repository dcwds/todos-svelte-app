<script lang="ts">
  import "./app.css"
  import todosStore from "./lib/stores/todos"
  import TodoAdd from "./lib/components/TodoAdd.svelte"
  import TodoList from "./lib/components/TodoList.svelte"

  $: todosComplete = $todosStore.filter((todo) => todo.completed)
  $: todosIncomplete = $todosStore.filter((todos) => !todos.completed)
</script>

<main>
  <section class="m-auto max-w-screen-sm py-32">
    <TodoAdd />
    <TodoList name="Your Tasks" type="incomplete" todos={todosIncomplete} />
    <TodoList
      name="Your Completed Tasks"
      type="complete"
      todos={todosComplete}
    />
  </section>
</main>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.900);
    color: theme(colors.white);
  }
</style>

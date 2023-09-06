<script lang="ts">
  import todos from "../stores/todos"

  let message: string = ""

  function addTodo(message: string) {
    todos.update((s) => [
      ...s,
      {
        id: Math.max(1, ...s.map((todo) => todo.id)),
        message,
        completed: false,
      },
    ])
  }
</script>

<input type="text" placeholder="Add a todo..." bind:value={message} />
<input
  type="submit"
  value="Add Task"
  on:click|preventDefault={() => addTodo(message)}
/>

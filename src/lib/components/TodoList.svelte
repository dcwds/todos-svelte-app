<script lang="ts">
  import type { Todo } from "../stores/todos"
  import todos from "../stores/todos"

  function updateTodo(todo: Todo) {
    todos.update((s) => [
      // get todos list without id of updated todo
      ...s.filter(({ id }) => id !== todo.id),
      {
        ...todo,
        // flip the completed value
        completed: !todo.completed,
      },
    ])
  }
</script>

<ul>
  {#each $todos as todo (todo.id)}
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        on:click={() => updateTodo(todo)}
      />
      <p>{todo.message}</p>
    </li>
  {/each}
</ul>

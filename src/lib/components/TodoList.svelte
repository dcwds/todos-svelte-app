<script lang="ts">
  import type { Todo } from "../stores/todos"
  import todosStore from "../stores/todos"

  export let name: string
  export let type: "complete" | "incomplete"
  export let todos: Todo[]

  function updateTodo(todo: Todo) {
    todosStore.update((s) => [
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

<section class="mb-8">
  {#if !todos.length}
    {#if type === "incomplete"}
      <p class="text-lg">You have no tasks.</p>
    {/if}
  {:else}
    <h2 class="font-semibold text-gray-300 mb-4 text-sm">{name}</h2>
    <ul>
      {#each todos as todo (todo.id)}
        <li class="flex text-lg mb-2">
          <input
            type="checkbox"
            checked={todo.completed}
            on:click={() => updateTodo(todo)}
            class="mr-4"
          />
          <p
            class="flex-1"
            class:line-through={todo.completed}
            class:text-gray-400={todo.completed}
          >
            {todo.message}
          </p>
        </li>
      {/each}
    </ul>
  {/if}
</section>

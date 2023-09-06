<script lang="ts">
  import todos from "../stores/todos"

  let message: string = ""

  function addTodo(message: string) {
    todos.update((s) => [
      ...s,
      {
        // this id method is brittle but serves the point
        id: new Date().valueOf(),
        message,
        completed: false,
      },
    ])
  }
</script>

<div class="flex mb-16">
  <input
    type="text"
    placeholder="Add a todo..."
    bind:value={message}
    class="flex-1 rounded-lg px-4 mr-8 text-gray-900"
  />
  <input
    type="submit"
    value="Add Task"
    on:click|preventDefault={() => addTodo(message)}
    class="rounded-lg bg-blue-600 text-white font-semibold py-2 px-4 cursor-pointer"
  />
</div>

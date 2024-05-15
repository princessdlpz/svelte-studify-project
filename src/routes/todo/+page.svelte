<script lang="ts">
    type Todo = {
      text: string
      done: boolean
    }
    type Filters = 'all' | 'active' | 'completed'
  
    let todos = $state<Todo[]>([])
    let filter = $state<Filters>('all')
    let filteredTodos = $derived(filterTodos())
  
    $effect(() => {
      const savedTodos = localStorage.getItem('todos')
      savedTodos && (todos = JSON.parse(savedTodos))
    })
  
    $effect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    })
  
    function addTodo(event: KeyboardEvent) {
      if (event.key !== 'Enter') return
  
      const todoEl = event.target as HTMLInputElement
      const text = todoEl.value
      const done = false
  
      todos = [...todos, { text, done }]
  
      todoEl.value = ''
    }
  
    function editTodo(event: Event) {
      const inputEl = event.target as HTMLInputElement
      const index = +inputEl.dataset.index!
      todos[index].text = inputEl.value
    }
  
    function toggleTodo(event: Event) {
      const inputEl = event.target as HTMLInputElement
      const index = +inputEl.dataset.index!
      todos[index].done = !todos[index].done
    }
  
    function setFilter(newFilter: Filters) {
      filter = newFilter
    }
  
	function filterTodos() {
		switch (filter) {
			case 'all':
				return todos
			case 'active':
				return todos.filter((todo) => !todo.done)
			case 'completed':
				return todos.filter((todo) => todo.done)
		}
	}
  
    function remaining() {
      return todos.filter((todo) => !todo.done).length
    }

    function deleteTodo(index: number) {
    todos = todos.filter((_, i) => i !== index);
  }
  </script>
  
  <h1>To-Do-List</h1>
  <div class="container">
    <input onkeydown={addTodo} class="add-input" placeholder="Add todo" type="text" />
  
    <div class="todos">
      {#each filteredTodos as todo, i}
        <div class="todo" class:completed={todo.done}>            
			<input onchange={toggleTodo} data-index={i} checked={todo.done} type="checkbox" />
            <input oninput={editTodo} data-index={i} value={todo.text} type="text" />
            <button class="delete-button" onclick={() => deleteTodo(i)}>x</button>

        </div>
      {/each}
    </div>
  
    <div class="filters">
        <button onclick={() => setFilter('all')}>All</button>
        <button onclick={() => setFilter('active')}>Active</button>
        <button onclick={() => setFilter('completed')}>Completed</button>
    </div>
  
    <p>{remaining()} Tasks remaining</p>
  </div>
  
  <style lang="scss">
      
    .container {
      background-color: #222;
      color: #fff;
      padding: 2rem;
      border-radius: 11px;
      width: 100%; 
      max-width: 500px; 
      margin: 0; 
      box-sizing: border-box; 
    }
  
    .add-input {
      width: calc(100% - 2rem);
      padding: 1rem;
      margin-bottom: 1rem;
      background-color: #333; 
      border: none;
      color: #fff;
    }
  
    .todos {
      margin-bottom: 1rem;
      font-size: 1.4em;
    }
  
    .todo-label {
      display: flex;
      align-items: center; 
      cursor: pointer;
      padding: 1rem;
      border-radius: 4px;
      transition: background-color 0.2s;
    }
  
    .todo-label:hover {
      background-color: #333;
    }
  
    .todo-label span {
      margin-left: 0.5rem;
      flex-grow: 1; 
      padding: 2.5rem;
    }
  
    .hidden-input {
      display: none; 
      
    }    

    .completed {
	opacity: 0.4;
	}

    .delete-button {
    background-color: transparent;
    color: #ff4d4d; 
    border: none;
    font-size: 1.2em;
    cursor: pointer;
    padding: 0 0.5rem; 

    &:hover {
      color: #ff0000; 
    }
  }

  .todo-label {
    justify-content: space-between; 
    padding: 0.5rem;
  }
  </style>
  
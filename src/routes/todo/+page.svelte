<script type="ts">
    const TodoList = [
        {
            task: "Add Options to root page",
            completed: true,
        },
        {
            task: "Add Options to get-info page",
            completed: true,
        },
        {
            task: "Add token decode to get-info page",
            completed: true,
        },
        {
            task: "Create login page for Maxx",
            completed: true,
        },
        {
            task: "Login API ",
            completed: false,
        },
        {
            task: "Create dashboard for Maxx",
            completed: false,
        },
        {
            task: "Token signing API",
            completed: false,
        },
        {
            task: "Login API",
            completed: false,
        },
        {
            task: "Send Mail API",
            completed: false,
        },
    ]
</script>

<svelte:head>
    <title>Todo | Njord  </title>
</svelte:head>

<div class="flex justify-center">
    <div class="flex flex-col items-center border w-full max-w-3xl rounded-lg top-20">
        <h1 class="text-bold text-3xl mt-16">Njord   Todo List</h1>
        <div class="divider w-4/5 self-center my-5"/>
        <div class="flex flex-col justify-start mb-8">
            {#each TodoList as Task}
                <div class="flex flex-row justify-between">
                    <label for="" class="-bold text-2xl self-center">{Task.task}</label>
                    <input class="checkbox checkbox-md checkbox-[#F0F0F0] self-center ml-36" type="checkbox" disabled bind:checked={Task.completed}/>
                </div>
            {/each}
        </div>
    </div>
</div>
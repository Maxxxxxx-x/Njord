<script lang="ts">
    let CanRun = true;
    let Failed = false;
    let ErrorStr = "";
    let Username = "";
    let Password = "";
    async function Login() {
        if (!CanRun) return;
        CanRun = false;
        Failed = false;
        if (Username.length === 0 || Password.length === 0) {
            console.log("Empty Strings");
            Failed = true;
            CanRun = true;
            return;
        }
        console.log("Both exists");
        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    Username: Username,
                    Password: Password
                })
            })
            const body = await res.json();
            alert(res.status, body);
        } catch(err) {
            if (err instanceof Error) {
               ErrorStr = err.message;
               return;
            }
            throw err;  
        } finally {
            CanRun = true;
        }
    }
</script>

<svelte:head>
    <title>Login | Njord</title>
</svelte:head>

<div class="flex h-screen items-center justify-center">
    <div class="flex flex-col border w-full max-w-xl rounded-xl p-10 gap-5">
        <a class="hover:underline text-lg" href="/">← Back</a>
        <h1 class="text-bold text-2xl self-center">Login to access the dashboard</h1>
        <divider class="divider divider-verticle"/>
        <label class="font-bold text-2xl" for="">Username</label>
        <input class="input input-bordered" type="text" placeholder="Enter your username" bind:value={Username} />
        <label class="font-bold text-2xl" for="">Password</label>
        <input class="input input-bordered" type="password" placeholder="Enter your password" bind:value={Password} />
        {#if Failed}
        <p class="text-error">Please check your username and password</p>
        {/if}
        <button class="btn btn-neutral hover:btn-accent btn-lg mt-5" on:click={Login}>Login</button>
    </div>
</div>
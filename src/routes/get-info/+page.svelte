<script lang="ts">
    import { decode } from "@tsndr/cloudflare-worker-jwt";
    import { fade } from "svelte/transition";
    let Token : string;
    let IsValid = false;
    let TokenName : string;
    let IssuedAt : Date;
    let NeverExpire : boolean;
    let CreatorIP : string;
    let Exp : Date;
    let AllowList : string[] = [];

    function GetTokenData() {
        try {
            const Payload = decode(Token).payload;
            IsValid = true;
            AllowList = Payload.AllowList;
            IssuedAt = new Date((Payload.iat ?? 0) * 1000);
            CreatorIP = Payload.CreatorIP;
            TokenName = Payload.TokenName;
            NeverExpire = Payload.NeverExpire;
            Exp = new Date((Payload.exp || 0) * 1000);
        } catch {
            IsValid = false;
        }
    }
</script>

<svelte:head>
    <title>Get Info | Njord</title>
</svelte:head>

<div class="flex justify-center">
    <div class="flex flex-col justify-start border w-full max-w-xl rounded-xl p-10 top-10 gap-5">
        <div class="flex flex-col justify-start gap-y-10">
            <label class="text-3xl" for="">Token</label>
            <input class="input input-bordered" type="text" placeholder="Enter token here" bind:value={Token} on:keyup={GetTokenData}/>
        </div>
        {#if Token}
            <div class="divider divider-verticle"></div>
            {#if IsValid}
                <div class="w-full rounded-xl border border-success p-5 text-lg" transition:fade={{ duration: 100 }}>
                    <p class="font-bold">Token Name</p>
                    <p class="my-2">{TokenName}</p>
                    <div class="divider divider-verticle before:bg-[#888787] after:bg-[#888787]"/>
                    <p class="font-bold">Issued At</p>
                    <p class="my-2">{IssuedAt.toISOString()}</p>
                    <div class="divider divider-verticle before:bg-[#888787] after:bg-[#888787]"/>
                    <p class="font-bold">Creator IP</p>
                    <p class="my-2">{CreatorIP}</p>
                    <div class="divider divider-verticle before:bg-[#888787] after:bg-[#888787]"/>
                    <p class="font-bold">Never Expire</p>
                    <p class="my-2">{NeverExpire}</p>
                    {#if !NeverExpire}
                    <div class="divider divider-verticle before:bg-[#888787] after:bg-[#888787]"/>
                    <p class="font-bold">Expiration</p>
                    <p class="my-2">{Exp.toISOString()}</p>
                    {/if}
                    <div class="divider divider-verticle before:bg-[#888787] after:bg-[#888787]"/>
                    <p class="font-bold">Allow list</p>
                    {#each AllowList as Email}
                    <p class="my-2">{Email}</p>
                    {/each}
                </div>
            {:else}
                <div class="w-full rounded-xl border border-error p-5" transition:fade={{ duration: 100 }}>
                    <p>Invalid Token</p>
                </div>
            {/if}
        {/if}
    </div>
</div>
<script lang="ts">
	import "./styles.css";
</script>

<svelte:head>
    <title>Iris | Volkfangr</title>
    <meta
        name="description"
        content="Iris, an email sending service for Volkfangrr"
    />
</svelte:head>

<div class="h-full w-full overflow-auto px-4 py-10">
    <div class="flex min-h-full w-full flex-col items-center justify-start gap-2">
        <div class="w-full max-w-3xl rounded-xl border border-primary p-8 text-primary shadow transition-all hover:shadow-md">
            <slot/>
        </div>
    </div>
</div>
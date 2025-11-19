<script lang="ts">
	import { cn } from "$lib/utils";
	import type { HTMLAttributes } from "svelte/elements";

	export let className: string = "";
	export { className as class };

	type CardProps = HTMLAttributes<HTMLDivElement>;

	const cardVariants = {
		root: "rounded-lg border bg-card text-card-foreground shadow-sm",
	};
</script>

<div class={cn(cardVariants.root, className)} {...$$restProps}>
	<slot />
</div>
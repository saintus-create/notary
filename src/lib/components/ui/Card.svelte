<script lang="ts">
	import { cn } from "$lib/utils";
	import type { HTMLAttributes } from "svelte/elements";
	
	export let className: string = "";
	export let padding: "none" | "sm" | "md" | "lg" = "md";
	export let shadow: "none" | "sm" | "md" | "lg" = "sm";
	export let rounded: "sm" | "md" | "lg" | "xl" = "md";
	export { className as class };
	
	type CardProps = HTMLAttributes<HTMLDivElement>;
	
	const paddingVariants = {
		none: "",
		sm: "p-4",
		md: "p-6", 
		lg: "p-8",
	};
	
	const shadowVariants = {
		none: "",
		sm: "shadow-sm",
		md: "shadow-md",
		lg: "shadow-lg",
	};
	
	const roundedVariants = {
		sm: "rounded-sm",
		md: "rounded-md", // 6px from checklist
		lg: "rounded-lg", // 8px from checklist  
		xl: "rounded-xl", // 12px from checklist
	};
</script>

<div 
	class={cn(
		// Base card styling from checklist
		"bg-card text-card-foreground",
		// Apply variants
		paddingVariants[padding],
		shadowVariants[shadow],
		roundedVariants[rounded],
		// Border and overflow handling from checklist
		"border border-border",
		"overflow-hidden",
		className
	)} 
	{...$$restProps}
>
	<slot />
</div>

<!-- Card Header -->
{#if $$slots.header}
	<div class={cn("flex flex-col space-y-1.5", padding !== "none" ? "p-6 pb-0" : "p-0")}>
		<slot name="header" />
	</div>
{/if}

<!-- Card Content -->
{#if $$slots.content || $$slots.default}
	<div class={cn("p-6 pt-0", padding === "none" ? "p-0" : "")}>
		<slot />
	</div>
{/if}

<!-- Card Footer -->
{#if $$slots.footer}
	<div class={cn("flex items-center", padding !== "none" ? "p-6 pt-0" : "p-0")}>
		<slot name="footer" />
	</div>
{/if}
<script>
	import { Slot } from '@radix-ui/react-slot';
	import { cn } from '$lib/utils.js';

	const buttonVariants = {
		default: 'bg-primary text-primary-foreground hover:bg-primary/90',
		secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
		outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
		ghost: 'hover:bg-accent hover:text-accent-foreground',
		destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
	};
	
	// Following checklist sizing specifications
	const buttonSizes = {
		sm: 'h-10 px-3 py-1.5 text-sm rounded-md',
		md: 'h-12 px-4 py-2 text-base rounded-md', 
		lg: 'h-14 px-5 py-2.5 text-lg rounded-md',
	};
</script>

<script>
	export let asChild = false;
	export let variant = 'default';
	export let size = 'md';
	export let className = '';
	
	let Comp = 'button';
</script>

<svelte:element 
	this={asChild ? Slot : 'button'}
	class={cn(
		'inline-flex items-center justify-center font-semibold transition-all duration-200 ease-out',
		'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
		'disabled:pointer-events-none disabled:opacity-50',
		// Following checklist specifications
		'min-w-[64px]', // Accessibility minimum from checklist
		'tracking-normal', // Letter spacing from checklist
		'leading-relaxed', // Line height from checklist
		// Apply variants and sizes
		buttonVariants[variant],
		buttonSizes[size],
		// Custom hover effects (optional)
		variant === 'default' && 'hover:scale-105 active:scale-95',
		className
	)}
	{...$$restProps}
>
	<slot />
</svelte:element>
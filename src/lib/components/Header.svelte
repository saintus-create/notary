<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import { cn } from '$lib/utils';
	
	const navItems = [
		{ label: 'About', href: '#' },
		{ label: 'Features', href: '#' },
		{ label: 'Learn', href: '#' },
		{ label: 'For Business', href: '#' },
		{ label: 'Pricing', href: '#' },
		{ label: 'Download', href: '#' },
	];
</script>

<header class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8 h-18">
		<div class="flex items-center justify-between h-18">
			<!-- Logo -->
			<div class="flex-shrink-0">
				<a href="/" class="flex items-center space-x-2" aria-label="ChatGPT Home">
					<svg class="w-8 h-8 text-primary" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
						<circle cx="16" cy="16" r="15" stroke="currentColor" stroke-width="2" fill="none"/>
						<path d="M8 16L16 8L24 16L16 24L8 16Z" fill="currentColor"/>
					</svg>
					<span class="text-xl font-bold text-primary">ChatGPT</span>
				</a>
			</div>
			
			<!-- Desktop Navigation -->
			<nav class="hidden md:flex items-center space-x-lg" role="navigation" aria-label="Main navigation">
				{#each navItems as item}
					<a 
						href={item.href} 
						class="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
					>
						{item.label}
						<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" aria-hidden="true"></span>
					</a>
				{/each}
			</nav>
			
			<!-- Get Started Button -->
			<div class="flex-shrink-0">
				<Button 
					size="sm" 
					class="hover:scale-105 active:scale-95 transition-transform"
					aria-label="Get started with ChatGPT Atlas"
				>
					Get started
				</Button>
			</div>
		</div>
	</div>
</header>
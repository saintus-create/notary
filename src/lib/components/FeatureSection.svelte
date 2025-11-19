<script>
	import BrowserMockup from './BrowserMockup.svelte';
	
	export let title = '';
	export let description = '';
	export let mockupContent = '';
	export let align = 'left'; // 'left' or 'right'
</script>

<section class="py-3xl">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid lg:grid-cols-2 gap-lg items-center">
			{#if align === 'left'}
				<!-- Text Content (Left) -->
				<div class="order-2 lg:order-1">
					<h2 class="text-5xl font-bold text-neutral-900 mb-sm leading-tight">
						{title}
					</h2>
					<p class="text-base text-neutral-700 leading-relaxed">
						{description}
					</p>
				</div>
				
				<!-- Browser Mockup (Right) -->
				<div class="order-1 lg:order-2">
					<BrowserMockup>
						{mockupContent}
					</BrowserMockup>
				</div>
			{:else}
				<!-- Browser Mockup (Left) -->
				<div>
					<BrowserMockup>
						{mockupContent}
					</BrowserMockup>
				</div>
				
				<!-- Text Content (Right) -->
				<div>
					<h2 class="text-5xl font-bold text-neutral-900 mb-sm leading-tight">
						{title}
					</h2>
					<p class="text-base text-neutral-700 leading-relaxed">
						{description}
					</p>
				</div>
			{/if}
		</div>
	</div>
</section>
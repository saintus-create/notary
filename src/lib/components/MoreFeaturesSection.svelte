<script>
	export let title = 'More features';
	export let features = [
		{
			icon: 'search',
			title: 'Smarter searches',
			description: 'Get information faster with tabs for search links, images, videos, and news (where available).'
		},
		{
			icon: 'layout',
			title: 'Easy to use',
			description: 'Navigate with tabs, autocomplete search bar, and bookmarks for simple web navigation.'
		},
		{
			icon: 'palette',
			title: 'Make it custom',
			description: 'Set browsing preferences and customize colors to make the browser your own.'
		}
	];
</script>

<section class="py-3xl bg-gradient-to-b from-primary-blue-light to-primary-blue-dark">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-2xl">
			<h2 class="text-5xl font-bold text-neutral-900 mb-6">
				{title}
			</h2>
		</div>
		
		<div class="grid md:grid-cols-3 gap-lg">
			{#each features as feature}
				<div class="text-center">
					<!-- Icon -->
					<div class="w-16 h-16 mx-auto mb-6 bg-neutral-0 rounded-xl flex items-center justify-center">
						{#if feature.icon === 'search'}
							<svg class="w-8 h-8 text-primary-blue-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
							</svg>
						{:else if feature.icon === 'layout'}
							<svg class="w-8 h-8 text-primary-blue-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>
							</svg>
						{:else if feature.icon === 'palette'}
							<svg class="w-8 h-8 text-primary-blue-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v6a2 2 0 002 2h4a2 2 0 002-2V5z"/>
							</svg>
						{/if}
					</div>
					
					<h3 class="text-xl font-bold text-neutral-900 mb-4">
						{feature.title}
					</h3>
					
					<p class="text-neutral-700 leading-relaxed">
						{feature.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
<script>
	export let isVisible = true;
	export let title = "Ask ChatGPT";
	export let messages = [
		{
			type: 'ai',
			content: 'I can help you with this content. What would you like to know?'
		},
		{
			type: 'user',
			content: 'Summarize this page'
		},
		{
			type: 'ai',
			content: 'Here\'s a summary of the key points from this page...'
		}
	];
</script>

<div class="bg-neutral-0 border-l border-border-subtle h-full flex flex-col">
	<!-- Sidebar Header -->
	<div class="p-4 border-b border-border-subtle">
		<h3 class="font-semibold text-neutral-900">{title}</h3>
	</div>
	
	<!-- Chat Messages -->
	<div class="flex-1 p-4 space-y-4 overflow-hidden">
		{#each messages as message}
			<div class="space-y-2">
				<div class="flex items-start space-x-2">
					<div class="w-6 h-6 rounded-full bg-primary-blue-dark flex items-center justify-center flex-shrink-0 mt-0.5">
						<div class="w-3 h-3 bg-neutral-0 rounded-full"></div>
					</div>
					<div class="flex-1">
						<p class="text-sm text-neutral-700">
							{message.content}
						</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
	
	<!-- Input Area -->
	<div class="p-4 border-t border-border-subtle">
		<div class="flex items-center space-x-2">
			<input 
				type="text" 
				placeholder="Ask ChatGPT anything..." 
				class="flex-1 px-3 py-2 border border-border-subtle rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue-dark"
			>
			<button class="w-8 h-8 bg-primary-blue-dark rounded-md flex items-center justify-center">
				<svg class="w-4 h-4 text-neutral-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
				</svg>
			</button>
		</div>
	</div>
</div>
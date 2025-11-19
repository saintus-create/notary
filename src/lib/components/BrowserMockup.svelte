<script>
	export let title = '';
	export let className = '';
</script>

<div class={className}>
	<div class="bg-neutral-0 rounded-xl shadow-brand overflow-hidden">
		<!-- Browser Header -->
		<div class="h-9 bg-neutral-50 flex items-center px-4 border-b border-border-subtle">
			<div class="flex items-center space-x-2">
				<div class="w-3 h-3 bg-red-400 rounded-full"></div>
				<div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
				<div class="w-3 h-3 bg-green-400 rounded-full"></div>
			</div>
			<div class="ml-4 flex-1">
				<div class="bg-neutral-0 rounded-md px-3 py-1 text-xs text-neutral-700 border border-border-subtle">
					https://chatgpt.com/atlas
				</div>
			</div>
		</div>
		
		<!-- Browser Content -->
		<div class="p-6">
			<slot />
		</div>
	</div>
</div>
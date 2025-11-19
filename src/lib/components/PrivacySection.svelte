<script>
	import Button from './ui/Button.svelte';
	
	export let title = "You're in control";
	export let description = "You can decide which sites ChatGPT can see, clear your browsing history, use Incognito, and manage browser memories anytime.";
</script>

<section class="py-3xl bg-neutral-0">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h2 class="text-5xl font-bold text-neutral-900 mb-6">
			{title}
		</h2>
		
		<p class="text-xl text-neutral-700 mb-8 max-w-3xl mx-auto">
			{description}
		</p>
		
		<!-- Privacy Settings Mockup -->
		<div class="max-w-md mx-auto bg-neutral-0 rounded-xl shadow-brand border border-border-subtle overflow-hidden">
			<!-- Header -->
			<div class="bg-neutral-50 px-4 py-3 border-b border-border-subtle">
				<div class="flex items-center justify-between">
					<h3 class="font-semibold text-neutral-900">Privacy Settings</h3>
					<button class="text-neutral-500 hover:text-neutral-700">
						<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
						</svg>
					</button>
				</div>
			</div>
			
			<!-- Content -->
			<div class="p-6 space-y-4">
				<div class="flex items-center justify-between">
					<div>
						<p class="font-medium text-neutral-900">Connection is secure</p>
						<p class="text-sm text-neutral-700">ChatGPT can view page content</p>
					</div>
					<div class="w-12 h-6 bg-success rounded-full p-1">
						<div class="w-4 h-4 bg-neutral-0 rounded-full ml-auto"></div>
					</div>
				</div>
				
				<div class="border-t border-border-subtle pt-4">
					<p class="text-sm text-neutral-700 mb-3">You can change this anytime</p>
					<div class="space-y-2">
						<div class="flex items-center justify-between">
							<span class="text-sm text-neutral-700">Allowed</span>
							<div class="w-10 h-5 bg-success rounded-full p-0.5">
								<div class="w-4 h-4 bg-neutral-0 rounded-full ml-auto"></div>
							</div>
						</div>
						<div class="flex items-center justify-between">
							<span class="text-sm text-neutral-700">Not allowed</span>
							<div class="w-10 h-5 bg-neutral-300 rounded-full p-0.5">
								<div class="w-4 h-4 bg-neutral-0 rounded-full"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="mt-8">
			<Button variant="secondary" size="lg">
				Learn more
			</Button>
		</div>
	</div>
</section>
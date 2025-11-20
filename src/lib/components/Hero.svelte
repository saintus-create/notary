<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
</script>

<section class="relative min-h-[480px] flex items-center justify-center overflow-hidden">
	<!-- Background gradient -->
	<div class="absolute inset-0 bg-gradient-to-b from-primary-blue-light to-primary-blue-dark" aria-hidden="true"></div>
	
	<div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24">
		<div class="text-center">
			<!-- App Icon -->
			<div class="mb-6">
				<div class="w-20 h-20 mx-auto bg-primary rounded-xl flex items-center justify-center shadow-lg" aria-label="ChatGPT Atlas App Icon">
					<svg class="w-10 h-10 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
					</svg>
				</div>
			</div>
			
			<!-- Title -->
			<h1 class="text-6xl font-bold text-primary mb-6 leading-tight">
				ChatGPT Atlas
			</h1>
			
			<!-- Description -->
			<p class="text-xl font-medium text-muted-foreground mb-8 max-w-2xl mx-auto">
				Bring ChatGPT with you across the web for instant answers, smarter suggestions, and help with tasks—all with privacy settings you can control.
			</p>
			
			<!-- CTA Button -->
			<Button 
				size="lg" 
				class="shadow-lg hover:shadow-xl transition-shadow"
				aria-label="Get started with ChatGPT Atlas"
			>
				Get started
			</Button>
		</div>
	</div>
</section>
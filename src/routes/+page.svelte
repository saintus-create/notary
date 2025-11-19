<script>
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import MeetSection from '$lib/components/MeetSection.svelte';
	import FeatureSection from '$lib/components/FeatureSection.svelte';
	import ChatSidebar from '$lib/components/ChatSidebar.svelte';
	import PrivacySection from '$lib/components/PrivacySection.svelte';
	import MoreFeaturesSection from '$lib/components/MoreFeaturesSection.svelte';
	import Footer from '$lib/components/Footer.svelte';
	
	// Feature content data
	const unlockContent = `
		<div class="flex">
			<div class="flex-1 pr-4">
				<h3 class="text-lg font-semibold mb-4">Premium Running Shoes</h3>
				<div class="space-y-3">
					<div class="flex justify-between">
						<span class="text-sm text-neutral-700">Price:</span>
						<span class="font-medium">$149.99</span>
					</div>
					<div class="flex justify-between">
						<span class="text-sm text-neutral-700">Rating:</span>
						<span class="font-medium">4.8/5 ⭐</span>
					</div>
					<div class="flex justify-between">
						<span class="text-sm text-neutral-700">Available:</span>
						<span class="text-success font-medium">In Stock</span>
					</div>
				</div>
			</div>
			<div class="w-24 h-24 bg-neutral-200 rounded-lg flex items-center justify-center">
				<svg class="w-8 h-8 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
				</svg>
			</div>
		</div>
	`;
	
	const memoryContent = `
		<div class="space-y-4">
			<h3 class="text-lg font-semibold">Your memories</h3>
			<div class="space-y-3">
				<div class="bg-neutral-50 p-3 rounded-lg">
					<p class="text-sm font-medium">Garden tools</p>
					<p class="text-xs text-neutral-600">Last visited: 2 days ago</p>
				</div>
				<div class="bg-neutral-50 p-3 rounded-lg">
					<p class="text-sm font-medium">Patio furniture</p>
					<p class="text-xs text-neutral-600">Last visited: 1 week ago</p>
				</div>
				<div class="bg-neutral-50 p-3 rounded-lg">
					<p class="text-sm font-medium">Kitchen appliances</p>
					<p class="text-xs text-neutral-600">Last visited: 3 days ago</p>
				</div>
			</div>
		</div>
	`;
	
	const agentContent = `
		<div class="space-y-4">
			<h3 class="text-lg font-semibold">Shopping Assistant</h3>
			<div class="bg-primary-blue-light p-4 rounded-lg">
				<div class="flex items-start space-x-2 mb-2">
					<div class="w-6 h-6 bg-primary-blue-dark rounded-full"></div>
					<p class="text-sm">I found some great deals on the items you're browsing. Would you like me to add them to your cart?</p>
				</div>
				<div class="ml-8 flex space-x-2">
					<button class="px-3 py-1 bg-success text-white text-xs rounded">Add to cart</button>
					<button class="px-3 py-1 bg-neutral-700 text-white text-xs rounded">Compare prices</button>
				</div>
			</div>
			<div class="space-y-2">
				<p class="text-sm text-neutral-700">💡 Consider these alternatives with better ratings...</p>
			</div>
		</div>
	`;
	
	const cursorContent = `
		<div class="space-y-4">
			<div class="border border-border-subtle rounded-lg p-4">
				<h4 class="font-medium mb-2">Draft: Project Proposal</h4>
				<p class="text-sm text-neutral-700 mb-2">I would like to propose a new initiative that could help improve our customer satisfaction ratings...</p>
				<div class="bg-yellow-100 border border-yellow-300 rounded p-2">
					<p class="text-sm"><strong>Selected:</strong> "I would like to propose a new initiative..."</p>
					<p class="text-xs text-neutral-600 mt-1">💡 Suggestion: Make this sound more professional</p>
				</div>
			</div>
		</div>
	`;
</script>

<svelte:head>
	<title>ChatGPT Atlas</title>
	<meta name="description" content="ChatGPT Atlas - A new web browser built with ChatGPT at its core" />
</svelte:head>

<div class="min-h-screen">
	<Header />
	
	<main>
		<Hero />
		<MeetSection />
		
		<FeatureSection 
			title="Unlock the web with ChatGPT by your side"
			description="Open a ChatGPT sidebar in any window to summarize content, compare products, or analyze data from any site you're viewing."
			mockupContent={unlockContent}
			align="left"
		/>
		
		<FeatureSection 
			title="Picks up where you left off"
			description="You can choose what ChatGPT remembers, so it can bring you relevant details when you need them."
			mockupContent={memoryContent}
			align="right"
		/>
		
		<FeatureSection 
			title="Takes action for you"
			description="Let ChatGPT interact with sites to research, shop for a trip, and more—all with your permission and supervision."
			mockupContent={agentContent}
			align="left"
		/>
		
		<FeatureSection 
			title="Assists you when and where you need it"
			description="Turn your cursor into a collaborator. Highlight text in emails, calendar invites, or docs, and get help from chat in one click."
			mockupContent={cursorContent}
			align="right"
		/>
		
		<PrivacySection />
		<MoreFeaturesSection />
		
		<!-- Bottom Hero -->
		<section class="py-3xl bg-gradient-to-b from-primary-blue-light to-primary-blue-dark">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<div class="w-20 h-20 mx-auto bg-neutral-900 rounded-xl flex items-center justify-center mb-6">
					<svg class="w-10 h-10 text-neutral-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
					</svg>
				</div>
				
				<h2 class="text-5xl font-bold text-neutral-900 mb-6">
					Download ChatGPT Atlas
				</h2>
				
				<button class="inline-flex items-center justify-center h-12 px-6 rounded-xl font-semibold text-base bg-neutral-0 text-neutral-900 border border-border-subtle hover:bg-neutral-50 transition-all duration-200 hover:scale-105 active:scale-95 shadow-brand">
					Get started
				</button>
				
				<p class="text-sm text-neutral-600 mt-4">
					*The Atlas macOS app is only available for macOS 14+ with Apple Silicon (M1 or better).
				</p>
			</div>
		</section>
	</main>
	
	<Footer />
</div>
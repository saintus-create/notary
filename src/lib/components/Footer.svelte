<script>
	const footerLinks = {
		company: [
			{ label: 'OpenAI', href: '#' },
			{ label: 'Research', href: '#' },
			{ label: 'Safety', href: '#' },
			{ label: 'API', href: '#' },
			{ label: 'Team', href: '#' },
			{ label: 'News', href: '#' },
		],
		policies: [
			{ label: 'Terms & Policies', href: '#' },
			{ label: 'Terms of Use', href: '#' },
			{ label: 'Privacy Policy', href: '#' },
			{ label: 'Usage Policy', href: '#' },
			{ label: 'Other policies', href: '#' },
		],
	};
	
	const socialLinks = [
		{ icon: 'twitter', href: '#' },
		{ icon: 'youtube', href: '#' },
		{ icon: 'github', href: '#' },
		{ icon: 'tiktok', href: '#' },
		{ icon: 'instagram', href: '#' },
	];
</script>

<footer class="bg-neutral-0 border-t border-border-subtle">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2xl">
		<!-- Top Section -->
		<div class="grid md:grid-cols-4 gap-lg mb-8">
			<!-- Logo -->
			<div>
				<h3 class="text-4xl font-bold text-neutral-900">ChatGPT</h3>
			</div>
			
			<!-- Company Links -->
			<div>
				<h4 class="font-semibold text-neutral-900 mb-4">OpenAI</h4>
				<ul class="space-y-2">
					{#each footerLinks.company as link}
						<li>
							<a href={link.href} class="text-sm text-neutral-700 hover:text-primary-blue-dark transition-colors">
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
			
			<!-- Policies Links -->
			<div>
				<h4 class="font-semibold text-neutral-900 mb-4">Legal</h4>
				<ul class="space-y-2">
					{#each footerLinks.policies as link}
						<li>
							<a href={link.href} class="text-sm text-neutral-700 hover:text-primary-blue-dark transition-colors">
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
			
			<!-- Social & Language -->
			<div>
				<h4 class="font-semibold text-neutral-900 mb-4">Connect</h4>
				<div class="flex space-x-3 mb-4">
					{#each socialLinks as social}
						<a href={social.href} class="w-6 h-6 text-neutral-700 hover:text-primary-blue-dark transition-colors">
							{#if social.icon === 'twitter'}
								<svg fill="currentColor" viewBox="0 0 24 24">
									<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
								</svg>
							{:else if social.icon === 'youtube'}
								<svg fill="currentColor" viewBox="0 0 24 24">
									<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
								</svg>
							{:else if social.icon === 'github'}
								<svg fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
								</svg>
							{:else if social.icon === 'tiktok'}
								<svg fill="currentColor" viewBox="0 0 24 24">
									<path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
								</svg>
							{:else if social.icon === 'instagram'}
								<svg fill="currentColor" viewBox="0 0 24 24">
									<path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988 6.62 0 11.987-5.367 11.987-11.988C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.332-1.297L3.692 17.116c.536.536 1.214.868 1.983.868 1.857 0 3.363-1.506 3.363-3.363 0-.69-.214-1.328-.589-1.822L8.449 16.988zm7.117 0c-1.297 0-2.448-.49-3.332-1.297l-1.425 1.425c.536.536 1.214.868 1.983.868 1.857 0 3.363-1.506 3.363-3.363 0-.69-.214-1.328-.589-1.822l1.425-1.425c.884.807 2.035 1.297 3.332 1.297h-2.757zm-5.117-8.449c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zm5-1.25c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25z"/>
								</svg>
							{/if}
						</a>
					{/each}
				</div>
				
				<select class="text-sm text-neutral-700 border border-border-subtle rounded-md px-3 py-2 bg-neutral-0">
					<option>English (US)</option>
					<option>English (UK)</option>
					<option>Español</option>
					<option>Français</option>
				</select>
			</div>
		</div>
		
		<!-- Bottom Section -->
		<div class="border-t border-border-subtle pt-6 flex flex-col sm:flex-row justify-between items-center">
			<p class="text-sm text-neutral-700">
				OpenAI © 2016-2024 Manage cookies
			</p>
		</div>
	</div>
</footer>
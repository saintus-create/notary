import { c as create_ssr_component, d as compute_rest_props, f as spread, h as escape_attribute_value, i as escape_object, j as each, v as validate_component, k as add_attribute, e as escape } from "../../chunks/ssr.js";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["variant", "size", "className", "href", "disabled", "type"]);
  const buttonVariants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90"
  };
  const buttonSizes = {
    sm: "h-10 px-3 py-1.5 text-sm rounded-md",
    md: "h-12 px-4 py-2 text-base rounded-md",
    lg: "h-14 px-5 py-2.5 text-lg rounded-md"
  };
  let { variant = "default" } = $$props;
  let { size = "md" } = $$props;
  let { className = "" } = $$props;
  let { href = null } = $$props;
  let { disabled = false } = $$props;
  let { type = "button" } = $$props;
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0) $$bindings.variant(variant);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  return `${href ? `<a${spread(
    [
      { href: escape_attribute_value(href) },
      {
        class: escape_attribute_value(cn(
          "inline-flex items-center justify-center font-semibold transition-all duration-200 ease-out",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          // Following checklist specifications
          "min-w-[64px]",
          // Accessibility minimum from checklist
          "tracking-normal",
          // Letter spacing from checklist
          "leading-relaxed",
          // Line height from checklist
          // Apply variants and sizes
          buttonVariants[variant],
          buttonSizes[size],
          // Custom hover effects (optional)
          variant === "default" && "hover:scale-105 active:scale-95",
          className
        ))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a>` : `<button${spread(
    [
      { type: escape_attribute_value(type) },
      { disabled: disabled || null },
      {
        class: escape_attribute_value(cn(
          "inline-flex items-center justify-center font-semibold transition-all duration-200 ease-out",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          // Following checklist specifications
          "min-w-[64px]",
          // Accessibility minimum from checklist
          "tracking-normal",
          // Letter spacing from checklist
          "leading-relaxed",
          // Line height from checklist
          // Apply variants and sizes
          buttonVariants[variant],
          buttonSizes[size],
          // Custom hover effects (optional)
          variant === "default" && "hover:scale-105 active:scale-95",
          className
        ))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</button>`}`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const navItems = [
    { label: "About", href: "#" },
    { label: "Features", href: "#" },
    { label: "Learn", href: "#" },
    { label: "For Business", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Download", href: "#" }
  ];
  return `<header class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b"><div class="container mx-auto px-4 sm:px-6 lg:px-8 h-18"><div class="flex items-center justify-between h-18"> <div class="flex-shrink-0" data-svelte-h="svelte-g7gaqo"><a href="/" class="flex items-center space-x-2" aria-label="ChatGPT Home"><svg class="w-8 h-8 text-primary" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="16" cy="16" r="15" stroke="currentColor" stroke-width="2" fill="none"></circle><path d="M8 16L16 8L24 16L16 24L8 16Z" fill="currentColor"></path></svg> <span class="text-xl font-bold text-primary">ChatGPT</span></a></div>  <nav class="hidden md:flex items-center space-x-lg" aria-label="Main navigation">${each(navItems, (item) => {
    return `<a${add_attribute("href", item.href, 0)} class="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm">${escape(item.label)} <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" aria-hidden="true"></span> </a>`;
  })}</nav>  <div class="flex-shrink-0">${validate_component(Button, "Button").$$render(
    $$result,
    {
      size: "sm",
      class: "hover:scale-105 active:scale-95 transition-transform",
      "aria-label": "Get started with ChatGPT Atlas"
    },
    {},
    {
      default: () => {
        return `Get started`;
      }
    }
  )}</div></div></div></header>`;
});
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="relative min-h-[480px] flex items-center justify-center overflow-hidden"> <div class="absolute inset-0 bg-gradient-to-b from-primary-blue-light to-primary-blue-dark" aria-hidden="true"></div> <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24"><div class="text-center"> <div class="mb-6" data-svelte-h="svelte-1vpjw3n"><div class="w-20 h-20 mx-auto bg-primary rounded-xl flex items-center justify-center shadow-lg" aria-label="ChatGPT Atlas App Icon"><svg class="w-10 h-10 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg></div></div>  <h1 class="text-6xl font-bold text-primary mb-6 leading-tight" data-svelte-h="svelte-zhm1q6">ChatGPT Atlas</h1>  <p class="text-xl font-medium text-muted-foreground mb-8 max-w-2xl mx-auto" data-svelte-h="svelte-1h9u9ge">Bring ChatGPT with you across the web for instant answers, smarter suggestions, and help with tasks—all with privacy settings you can control.</p>  ${validate_component(Button, "Button").$$render(
    $$result,
    {
      size: "lg",
      class: "shadow-lg hover:shadow-xl transition-shadow",
      "aria-label": "Get started with ChatGPT Atlas"
    },
    {},
    {
      default: () => {
        return `Get started`;
      }
    }
  )}</div></div></section>`;
});
const MeetSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Meet ChatGPT" } = $$props;
  let { description = "Bring ChatGPT with you across the web for instant answers, smarter suggestions, and help with tasks—all with privacy settings you can control." } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);
  return `<section class="py-3xl bg-neutral-0"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center"> <div class="max-w-4xl mx-auto bg-neutral-0 rounded-xl p-8 mb-8 border border-border-subtle"><h2 class="text-5xl font-bold text-neutral-900 mb-6">${escape(title)}</h2></div>  <p class="text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">${escape(description)}</p></div></div></section>`;
});
const BrowserMockup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const title = "";
  let { className = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  return `<div${add_attribute("class", className, 0)}><div class="bg-neutral-0 rounded-xl shadow-brand overflow-hidden"> <div class="h-9 bg-neutral-50 flex items-center px-4 border-b border-border-subtle" data-svelte-h="svelte-plt8do"><div class="flex items-center space-x-2"><div class="w-3 h-3 bg-red-400 rounded-full"></div> <div class="w-3 h-3 bg-yellow-400 rounded-full"></div> <div class="w-3 h-3 bg-green-400 rounded-full"></div></div> <div class="ml-4 flex-1"><div class="bg-neutral-0 rounded-md px-3 py-1 text-xs text-neutral-700 border border-border-subtle">https://chatgpt.com/atlas</div></div></div>  <div class="p-6">${slots.default ? slots.default({}) : ``}</div></div></div>`;
});
const FeatureSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { mockupContent = "" } = $$props;
  let { align = "left" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);
  if ($$props.mockupContent === void 0 && $$bindings.mockupContent && mockupContent !== void 0) $$bindings.mockupContent(mockupContent);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0) $$bindings.align(align);
  return `<section class="py-3xl"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid lg:grid-cols-2 gap-lg items-center">${align === "left" ? ` <div class="order-2 lg:order-1"><h2 class="text-5xl font-bold text-neutral-900 mb-sm leading-tight">${escape(title)}</h2> <p class="text-base text-neutral-700 leading-relaxed">${escape(description)}</p></div>  <div class="order-1 lg:order-2">${validate_component(BrowserMockup, "BrowserMockup").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(mockupContent)}`;
    }
  })}</div>` : ` <div>${validate_component(BrowserMockup, "BrowserMockup").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(mockupContent)}`;
    }
  })}</div>  <div><h2 class="text-5xl font-bold text-neutral-900 mb-sm leading-tight">${escape(title)}</h2> <p class="text-base text-neutral-700 leading-relaxed">${escape(description)}</p></div>`}</div></div></section>`;
});
const PrivacySection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "You're in control" } = $$props;
  let { description = "You can decide which sites ChatGPT can see, clear your browsing history, use Incognito, and manage browser memories anytime." } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);
  return `<section class="py-3xl bg-neutral-0"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h2 class="text-5xl font-bold text-neutral-900 mb-6">${escape(title)}</h2> <p class="text-xl text-neutral-700 mb-8 max-w-3xl mx-auto">${escape(description)}</p>  <div class="max-w-md mx-auto bg-neutral-0 rounded-xl shadow-brand border border-border-subtle overflow-hidden" data-svelte-h="svelte-1atyywu"> <div class="bg-neutral-50 px-4 py-3 border-b border-border-subtle"><div class="flex items-center justify-between"><h3 class="font-semibold text-neutral-900">Privacy Settings</h3> <button class="text-neutral-500 hover:text-neutral-700"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div>  <div class="p-6 space-y-4"><div class="flex items-center justify-between"><div><p class="font-medium text-neutral-900">Connection is secure</p> <p class="text-sm text-neutral-700">ChatGPT can view page content</p></div> <div class="w-12 h-6 bg-success rounded-full p-1"><div class="w-4 h-4 bg-neutral-0 rounded-full ml-auto"></div></div></div> <div class="border-t border-border-subtle pt-4"><p class="text-sm text-neutral-700 mb-3">You can change this anytime</p> <div class="space-y-2"><div class="flex items-center justify-between"><span class="text-sm text-neutral-700">Allowed</span> <div class="w-10 h-5 bg-success rounded-full p-0.5"><div class="w-4 h-4 bg-neutral-0 rounded-full ml-auto"></div></div></div> <div class="flex items-center justify-between"><span class="text-sm text-neutral-700">Not allowed</span> <div class="w-10 h-5 bg-neutral-300 rounded-full p-0.5"><div class="w-4 h-4 bg-neutral-0 rounded-full"></div></div></div></div></div></div></div> <div class="mt-8">${validate_component(Button, "Button").$$render($$result, { variant: "secondary", size: "lg" }, {}, {
    default: () => {
      return `Learn more`;
    }
  })}</div></div></section>`;
});
const MoreFeaturesSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "More features" } = $$props;
  let { features = [
    {
      icon: "search",
      title: "Smarter searches",
      description: "Get information faster with tabs for search links, images, videos, and news (where available)."
    },
    {
      icon: "layout",
      title: "Easy to use",
      description: "Navigate with tabs, autocomplete search bar, and bookmarks for simple web navigation."
    },
    {
      icon: "palette",
      title: "Make it custom",
      description: "Set browsing preferences and customize colors to make the browser your own."
    }
  ] } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.features === void 0 && $$bindings.features && features !== void 0) $$bindings.features(features);
  return `<section class="py-3xl bg-gradient-to-b from-primary-blue-light to-primary-blue-dark"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-2xl"><h2 class="text-5xl font-bold text-neutral-900 mb-6">${escape(title)}</h2></div> <div class="grid md:grid-cols-3 gap-lg">${each(features, (feature) => {
    return `<div class="text-center"> <div class="w-16 h-16 mx-auto mb-6 bg-neutral-0 rounded-xl flex items-center justify-center">${feature.icon === "search" ? `<svg class="w-8 h-8 text-primary-blue-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>` : `${feature.icon === "layout" ? `<svg class="w-8 h-8 text-primary-blue-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>` : `${feature.icon === "palette" ? `<svg class="w-8 h-8 text-primary-blue-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v6a2 2 0 002 2h4a2 2 0 002-2V5z"></path></svg>` : ``}`}`}</div> <h3 class="text-xl font-bold text-neutral-900 mb-4">${escape(feature.title)}</h3> <p class="text-neutral-700 leading-relaxed">${escape(feature.description)}</p> </div>`;
  })}</div></div></section>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const footerLinks = {
    company: [
      { label: "OpenAI", href: "#" },
      { label: "Research", href: "#" },
      { label: "Safety", href: "#" },
      { label: "API", href: "#" },
      { label: "Team", href: "#" },
      { label: "News", href: "#" }
    ],
    policies: [
      { label: "Terms & Policies", href: "#" },
      { label: "Terms of Use", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Usage Policy", href: "#" },
      { label: "Other policies", href: "#" }
    ]
  };
  const socialLinks = [
    { icon: "twitter", href: "#" },
    { icon: "youtube", href: "#" },
    { icon: "github", href: "#" },
    { icon: "tiktok", href: "#" },
    { icon: "instagram", href: "#" }
  ];
  return `<footer class="bg-neutral-0 border-t border-border-subtle"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2xl"> <div class="grid md:grid-cols-4 gap-lg mb-8"> <div data-svelte-h="svelte-j8nbtu"><h3 class="text-4xl font-bold text-neutral-900">ChatGPT</h3></div>  <div><h4 class="font-semibold text-neutral-900 mb-4" data-svelte-h="svelte-1vr0t5">OpenAI</h4> <ul class="space-y-2">${each(footerLinks.company, (link) => {
    return `<li><a${add_attribute("href", link.href, 0)} class="text-sm text-neutral-700 hover:text-primary-blue-dark transition-colors">${escape(link.label)}</a> </li>`;
  })}</ul></div>  <div><h4 class="font-semibold text-neutral-900 mb-4" data-svelte-h="svelte-djbmt8">Legal</h4> <ul class="space-y-2">${each(footerLinks.policies, (link) => {
    return `<li><a${add_attribute("href", link.href, 0)} class="text-sm text-neutral-700 hover:text-primary-blue-dark transition-colors">${escape(link.label)}</a> </li>`;
  })}</ul></div>  <div><h4 class="font-semibold text-neutral-900 mb-4" data-svelte-h="svelte-1bids4t">Connect</h4> <div class="flex space-x-3 mb-4">${each(socialLinks, (social) => {
    return `<a${add_attribute("href", social.href, 0)} class="w-6 h-6 text-neutral-700 hover:text-primary-blue-dark transition-colors">${social.icon === "twitter" ? `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg>` : `${social.icon === "youtube" ? `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>` : `${social.icon === "github" ? `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>` : `${social.icon === "tiktok" ? `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path></svg>` : `${social.icon === "instagram" ? `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988 6.62 0 11.987-5.367 11.987-11.988C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.332-1.297L3.692 17.116c.536.536 1.214.868 1.983.868 1.857 0 3.363-1.506 3.363-3.363 0-.69-.214-1.328-.589-1.822L8.449 16.988zm7.117 0c-1.297 0-2.448-.49-3.332-1.297l-1.425 1.425c.536.536 1.214.868 1.983.868 1.857 0 3.363-1.506 3.363-3.363 0-.69-.214-1.328-.589-1.822l1.425-1.425c.884.807 2.035 1.297 3.332 1.297h-2.757zm-5.117-8.449c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zm5-1.25c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25z"></path></svg>` : ``}`}`}`}`} </a>`;
  })}</div> <select class="text-sm text-neutral-700 border border-border-subtle rounded-md px-3 py-2 bg-neutral-0"><option value="English (US)" data-svelte-h="svelte-hxyfyv">English (US)</option><option value="English (UK)" data-svelte-h="svelte-1thi0u7">English (UK)</option><option value="Español" data-svelte-h="svelte-1pk9rox">Español</option><option value="Français" data-svelte-h="svelte-1vwt0nj">Français</option></select></div></div>  <div class="border-t border-border-subtle pt-6 flex flex-col sm:flex-row justify-between items-center" data-svelte-h="svelte-1h9l89e"><p class="text-sm text-neutral-700">OpenAI © 2016-2024 Manage cookies</p></div></div></footer>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `${$$result.head += `<!-- HEAD_svelte-g084le_START -->${$$result.title = `<title>ChatGPT Atlas</title>`, ""}<meta name="description" content="ChatGPT Atlas - A new web browser built with ChatGPT at its core"><!-- HEAD_svelte-g084le_END -->`, ""} <div class="min-h-screen">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main>${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})} ${validate_component(MeetSection, "MeetSection").$$render($$result, {}, {}, {})} ${validate_component(FeatureSection, "FeatureSection").$$render(
    $$result,
    {
      title: "Unlock the web with ChatGPT by your side",
      description: "Open a ChatGPT sidebar in any window to summarize content, compare products, or analyze data from any site you're viewing.",
      mockupContent: unlockContent,
      align: "left"
    },
    {},
    {}
  )} ${validate_component(FeatureSection, "FeatureSection").$$render(
    $$result,
    {
      title: "Picks up where you left off",
      description: "You can choose what ChatGPT remembers, so it can bring you relevant details when you need them.",
      mockupContent: memoryContent,
      align: "right"
    },
    {},
    {}
  )} ${validate_component(FeatureSection, "FeatureSection").$$render(
    $$result,
    {
      title: "Takes action for you",
      description: "Let ChatGPT interact with sites to research, shop for a trip, and more—all with your permission and supervision.",
      mockupContent: agentContent,
      align: "left"
    },
    {},
    {}
  )} ${validate_component(FeatureSection, "FeatureSection").$$render(
    $$result,
    {
      title: "Assists you when and where you need it",
      description: "Turn your cursor into a collaborator. Highlight text in emails, calendar invites, or docs, and get help from chat in one click.",
      mockupContent: cursorContent,
      align: "right"
    },
    {},
    {}
  )} ${validate_component(PrivacySection, "PrivacySection").$$render($$result, {}, {}, {})} ${validate_component(MoreFeaturesSection, "MoreFeaturesSection").$$render($$result, {}, {}, {})}  <section class="py-3xl bg-gradient-to-b from-primary-blue-light to-primary-blue-dark" data-svelte-h="svelte-1v8huos"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><div class="w-20 h-20 mx-auto bg-neutral-900 rounded-xl flex items-center justify-center mb-6"><svg class="w-10 h-10 text-neutral-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg></div> <h2 class="text-5xl font-bold text-neutral-900 mb-6">Download ChatGPT Atlas</h2> <button class="inline-flex items-center justify-center h-12 px-6 rounded-xl font-semibold text-base bg-neutral-0 text-neutral-900 border border-border-subtle hover:bg-neutral-50 transition-all duration-200 hover:scale-105 active:scale-95 shadow-brand">Get started</button> <p class="text-sm text-neutral-600 mt-4">*The Atlas macOS app is only available for macOS 14+ with Apple Silicon (M1 or better).</p></div></section></main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};

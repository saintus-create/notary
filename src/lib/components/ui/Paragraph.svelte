<script lang="ts">
  export let size: "sm" | "base" | "lg" = "base";
  export let className: string = "";
  export let as: string = "p";
</script>

<svelte:element 
  this={as}
  class={`
    font-sans 
    ${size === "sm" ? "text-sm" : ""}
    ${size === "base" ? "text-base" : ""}
    ${size === "lg" ? "text-lg" : ""}
    leading-relaxed 
    tracking-normal 
    text-foreground 
    max-w-prose
    ${className}
  `}>
  <slot />
</svelte:element>
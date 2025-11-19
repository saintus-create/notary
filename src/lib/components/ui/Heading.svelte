<script lang="ts">
  export let level: 1 | 2 | 3 | 4 | 5 | 6 = 1;
  export let className: string = "";
  export let as: string = `h${level}`;
</script>

<svelte:element 
  this={as}
  class={`
    font-sans font-bold 
    tracking-tight text-shadow-sm
    ${level === 1 ? "text-5xl leading-[1.2]" : ""}
    ${level === 2 ? "text-4xl leading-[1.25]" : ""}
    ${level === 3 ? "text-3xl leading-[1.3]" : ""}
    ${level === 4 ? "text-2xl leading-[1.4]" : ""}
    ${level === 5 ? "text-xl leading-[1.5]" : ""}
    ${level === 6 ? "text-lg leading-[1.6]" : ""}
    ${className}
  `}>
  <slot />
</svelte:element>
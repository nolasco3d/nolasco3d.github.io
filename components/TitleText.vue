<template>
  <component class="text-neutral-500" :is="props.tag">
    <slot/>
  </component>
</template>
<script setup lang="ts">
type HeadingsTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
interface PropsTitleText {
  tag: HeadingsTags
}

const props = defineProps<PropsTitleText>()
</script>
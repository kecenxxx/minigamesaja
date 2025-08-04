<script setup>
const props = defineProps({
  game: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <LinkWidget :href="'/' + props.game.link" class="aspect-square">
    <img
      class="h-full w-full rounded-2xl shadow-md"
      v-lazy="props.game.thumb"
      :alt="props.game.title"
    />
  </LinkWidget>
</template>
